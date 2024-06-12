import sqlite3

print("Starting script...")

# Connect to SQLite database
try:
    conn = sqlite3.connect('customer_faces_data.db')
    c = conn.cursor()
    print("Successfully connected to the database")
except sqlite3.Error as e:
    print("SQLite error:", e)
    exit(1)

# Create a table to store face data if it doesn't exist
try:
    c.execute('''CREATE TABLE IF NOT EXISTS cart
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, customer_uid TEXT, customer_name TEXT, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')
    print("Table 'cart' created successfully")
except sqlite3.Error as e:
    print("SQLite error:", e)

# Check if there is any data in the table
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
    print("SQLite error:", e)

# Close the connection
conn.close()
print("Finished script.")
