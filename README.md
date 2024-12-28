### **README: Command Cheat Sheet**
#### File Structure
my-project/
├── db/
│   ├── pool.js         # Database connection pool setup
│   ├── queries.js      # CRUD operations for users/comments
│   ├── populate_db.js  # Example usage: create tables, insert seed data
│   ├── update_db.js    # Update database schema or data
├── data/
│   ├── app_data.json   # Optional: JSON file for seed data
├── .env                # Environment variables (template provided)
├── index.js            # Main app entry point
├── Procfile            # Heroku process file
├── package.json        # Node.js package configuration
└── README.md           # Project setup and instructions


#### **1. Initialize Node.js Project and Install Dependencies**
1. Navigate to the project directory in your terminal:
   ```bash
   cd <project-folder>
   ```

2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```

3. Install necessary dependencies:
   ```bash
   npm install express pg dotenv cors
   ```


---

#### **2. Initialize Git Repository**
1. Initialize a new Git repository:
   ```bash
   git init
   ```


3. Stage and commit the initial files:
   ```bash
   git add .
   git commit -m "Initial project setup"
   ```

4. Set the remote repository:
   ```bash
   git remote add origin <your-github-repo-url>
   ```

5. Push the code to the remote repository:
   ```bash
   git push -u origin main
   ```

---

#### **3. Create the Database Locally Using PostgreSQL**
1. **Update `db/queries.js`**:
   - Add functions to create the required tables (e.g., `users`, `comments`) for the project.
   - Include proper error handling and meaningful logs for debugging.

2. **Update `db/populate_db.js`**:
   - Use the `createTables` function from `queries.js` to create the tables.
   - Add initial data using `createUser` and other insert functions.
   - Include logs to confirm successful operations or errors.

---

#### **Run the Scripts**

1. **Run the `populate_db.js` script to create the database and insert sample data**:
   ```bash
   node db/populate_db.js
   ```
---

#### **4. Set Up for Heroku Deployment**
1. Log in to Heroku CLI:
   ```bash
   heroku login
   ```

2. Create a new Heroku app:
   ```bash
   heroku create <your-app-name>
   ```

3. Add a Heroku Postgres add-on:
   ```bash
   heroku addons:create heroku-postgresql:essential-0 --app <your-app-name>
   ```

4. Verify the `DATABASE_URL` is set:
   ```bash
   heroku config --app <your-app-name>
   ```

5. Push the code to Heroku:
   ```bash
   git push heroku main
   ```

---

#### **5. Recreate Tables on Heroku and Test**
1. Run the `createTables` function on Heroku to create the tables:
   ```bash
   heroku run node db/updatedb.js --app <your-app-name>
   ```

3. Check the tables and data in the Heroku database:
   ```bash
   heroku pg:psql --app <your-app-name>
   ```


---

#### **6. Test the App**
1. Open the app in your browser:
   ```bash
   heroku open --app <your-app-name>
   ```

2. Test API endpoints using tools like `curl` or Postman:
   ```bash
   curl https://<your-app-name>.herokuapp.com/api/users
   ```

3. Check logs for debugging:
   ```bash
   heroku logs --tail --app <your-app-name>
   ```

---
