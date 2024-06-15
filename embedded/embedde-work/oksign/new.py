import cv2
import numpy as np
import sqlite3
from keras.models import load_model  # TensorFlow is required for Keras to work

# Disable scientific notation for clarity
np.set_printoptions(suppress=True)

# Load the face detection model
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Load the sunglasses images
sunglasses_male = cv2.imread('pictures/sunglasses-kitty-02.png', cv2.IMREAD_UNCHANGED)
sunglasses_female = cv2.imread('pictures/sunglasses-kitty-02.png', cv2.IMREAD_UNCHANGED)

# Load the gender detection model
genderProto = "models/gender_deploy.prototxt"
genderModel = "models/gender_net.caffemodel"
genderNet = cv2.dnn.readNet(genderModel, genderProto)

# Load the gesture detection model
gesture_model = load_model("models/keras_Model.h5", compile=False)

# Load the gesture labels
gesture_class_names = open("models/labels.txt", "r").readlines()

# Load pre-trained face recognition model
faceRecognizer = cv2.face.LBPHFaceRecognizer_create()
faceRecognizer.read("models/trained_lbph_face_recognizer_model.yml")

# Define a scaling factor for the sunglasses size
sunglasses_scale = 0.8  # Adjust as needed

# Gender classification threshold
gender_threshold = 0.6  # Adjust as needed

# Font and display settings
fontFace = cv2.FONT_HERSHEY_SIMPLEX
fontScale = 0.6
fontColor = (255, 255, 255)
fontWeight = 2
fontBottomMargin = 30
nametagColor = (100, 180, 0)
nametagHeight = 50
faceRectangleBorderColor = nametagColor
faceRectangleBorderSize = 2

# Start the webcam
cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Convert the frame to grayscale for face detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in faces:
        # Prepare the input image for gender detection
        face_roi = frame[y:y+h, x:x+w]
        blob = cv2.dnn.blobFromImage(face_roi, 1.0, (227, 227), (78.4263377603, 87.7689143744, 114.895847746), swapRB=False)

        # Run gender detection
        genderNet.setInput(blob)
        genderPreds = genderNet.forward()

        # Get the predicted gender and confidence
        gender = "Male" if genderPreds[0, 0] > gender_threshold else "Female"
        gender_confidence = genderPreds[0, 0]

        # Choose the sunglasses based on gender
        sunglasses = sunglasses_male if gender == "Male" else sunglasses_female

        # Calculate the position and size of the sunglasses
        sunglasses_width = int(sunglasses_scale * w)
        sunglasses_height = int(sunglasses_width * sunglasses.shape[0] / sunglasses.shape[1])

        # Resize the sunglasses image
        sunglasses_resized = cv2.resize(sunglasses, (sunglasses_width, sunglasses_height))

        # Calculate the position to place the sunglasses
        x1 = x + int(w/2) - int(sunglasses_width/2)
        x2 = x1 + sunglasses_width
        y1 = y + int(0.55 * h) - sunglasses_height  
        y2 = y1 + sunglasses_height

        # Adjust for out-of-bounds positions
        x1 = max(x1, 0)
        x2 = min(x2, frame.shape[1])
        y1 = max(y1, 0)
        y2 = min(y2, frame.shape[0])

        # Create a mask for the sunglasses
        sunglasses_mask = sunglasses_resized[:, :, 3] / 255.0
        frame_roi = frame[y1:y2, x1:x2]

        # Blend the sunglasses with the frame
        for c in range(0, 3):
            frame_roi[:, :, c] = (1.0 - sunglasses_mask) * frame_roi[:, :, c] + sunglasses_mask * sunglasses_resized[:, :, c]

        # Draw bounding box and label
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
        label = f"{gender}: {gender_confidence:.2f}"
        cv2.putText(frame, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 0, 0), 2)

        # Recognize the face
        customer_uid, Confidence = faceRecognizer.predict(gray[y:y + h, x:x + w])

        # Connect to SQLite database
        try:
            conn = sqlite3.connect('customer_faces_data.db')
            c = conn.cursor()
        except sqlite3.Error as e:
            print("SQLite error:", e)
            continue

        c.execute("SELECT customer_name, confirmed FROM customers WHERE customer_uid = ?", (customer_uid,))
        row = c.fetchone()
        if row:
            customer_name = row[0].split(" ")[0]
            confirmed = row[1]
        else:
            customer_name = "Unknown"
            confirmed = 0

        print(f"Detected face: {customer_name}, UID: {customer_uid}, Confidence: {Confidence}")

        if 45 < Confidence < 85:
            # Create rectangle around the face
            cv2.rectangle(frame, (x - 20, y - 20), (x + w + 20, y + h + 20), faceRectangleBorderColor, faceRectangleBorderSize)

            # Display name tag
            cv2.rectangle(frame, (x - 22, y - nametagHeight), (x + w + 22, y - 22), nametagColor, -1)
            cv2.putText(frame, str(customer_name) + ": " + str(round(Confidence, 2)) + "%", (x, y - fontBottomMargin), fontFace, fontScale, fontColor, fontWeight)

    # Perform gesture detection on the same frame
    gesture_image = cv2.resize(frame, (224, 224), interpolation=cv2.INTER_AREA)
    gesture_image = np.asarray(gesture_image, dtype=np.float32).reshape(1, 224, 224, 3)
    gesture_image = (gesture_image / 127.5) - 1

    # Predict the gesture
    gesture_prediction = gesture_model.predict(gesture_image)
    gesture_index = np.argmax(gesture_prediction)
    gesture_class_name = gesture_class_names[gesture_index]
    gesture_confidence_score = gesture_prediction[0][gesture_index]

    # Display gesture prediction and confidence score
    cv2.putText(frame, "Gesture: " + gesture_class_name[2:], (10, 30), fontFace, fontScale, fontColor, fontWeight)
    cv2.putText(frame, "Confidence: " + str(np.round(gesture_confidence_score * 100))[:-2] + "%", (10, 60), fontFace, fontScale, fontColor, fontWeight)

    # Update the database if "okay_sign" gesture is detected
    if gesture_class_name.strip() == "okay_sign":
        print("Okay sign detected with confidence:", gesture_confidence_score)
        if customer_uid is not None:
            print(f"Updating database for customer UID: {customer_uid}")
            try:
                c.execute("UPDATE customers SET confirmed = 1 WHERE customer_uid = ?", (customer_uid,))
                conn.commit()
                print("Database updated successfully.")
            except sqlite3.Error as e:
                print("SQLite update error:", e)

    # Display the resulting frame
    cv2.imshow('Face and Gesture Detection', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
# Close the database connection
conn.close()