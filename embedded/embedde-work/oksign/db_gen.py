import sqlite3

print("Starting script...")

# Connect to SQLite database
try:
    with sqlite3.connect('customer_faces_data.db') as conn:
        c = conn.cursor()
        print("Successfully connected to the database")
        
        # Create a table to store face data if it doesn't exist
        try:
            c.execute('''CREATE TABLE IF NOT EXISTS cart
                         (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_uid TEXT, customer_name TEXT, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')
            print("Table 'cart' created successfully")
        except sqlite3.Error as e:
            print("SQLite error while creating 'cart' table:", e)

        # Check if there is any data in the cart table
        try:
            c.execute('SELECT * FROM cart')
            rows = c.fetchall()
            if rows:
                print("Data in 'cart' table:")
                for row in rows:
                    print(row)
            else:
                print("No data found in 'cart' table")
        except sqlite3.Error as e:
            print("SQLite error while querying 'cart' table:", e)

        # Create a customer table if it doesn't exist
        try:
            c.execute('''CREATE TABLE IF NOT EXISTS customer
                         (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_uid TEXT, customer_name TEXT, face_data BLOB, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')
            print("Table 'customer' created successfully")
        except sqlite3.Error as e:
            print("SQLite error while creating 'customer' table:", e)

        # Check if there is any data in the customer table
        try:
            c.execute('SELECT * FROM customer')
            rows = c.fetchall()
            if rows:
                print("Data in 'customer' table:")
                for row in rows:
                    print(row)
            else:
                print("No data found in 'customer' table")
        except sqlite3.Error as e:
            print("SQLite error while querying 'customer' table:", e)
except sqlite3.Error as e:
    print("SQLite error:", e)
    
print("Finished script.")
