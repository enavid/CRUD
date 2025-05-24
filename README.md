
# 📋 CRUD API with JavaScript – Final Step of CS-Internship Web Track

Welcome to the final project of the **CS-Internship Web Development Track**, proudly built during my graduation phase from this program!

> 🔗 **CS-Internship GitHub**: [github.com/cs-internship](https://github.com/cs-internship)  
> 📰 **CS-Internship Introduction (Persian)**: [virgool.io article](https://virgool.io/cs-internship/cs-internship-k3j2hx4wgvga)  
> 📺 **Coding Session on YouTube**: [Watch CRUD Code Walkthrough](https://www.youtube.com/watch?v=f2mjEMarthI&list=PLSQ2VqVf5QiCC75ED9XyEk-BGsR2gxfbU&index=95)

---

## 📌 About This Project

This is a simple, yet complete **CRUD** (Create, Read, Update, Delete) API written entirely in **JavaScript** using **Node.js** and **Express.js**.

🔧 In this project:
- Users can **sign up**, **log in**, and **receive tokens**
- Each user manages a task list through standard **CRUD** operations
- Data is stored in a mock in-memory `db` structure (`model.js`)

---

## 💡 What is CRUD?

**CRUD** stands for:
- 🟢 **Create** → Add new data
- 🔵 **Read** → Fetch existing data
- 🟠 **Update** → Modify existing data
- 🔴 **Delete** → Remove data

These four operations are the backbone of nearly every application you use today.

---

## 📂 Project Structure

```
.
├── controller.js     # Logic for handling CRUD and authentication
├── model.js          # In-memory mock database
├── router.js         # Route definitions for API endpoints
├── server.js         # Express server configuration
```

---

## 🔑 API Endpoints

| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| POST   | `/v1/api/signup`  | Register new user            |
| POST   | `/v1/api/login`   | Login with username/password |
| GET    | `/v1/api/`        | Fetch user's task data       |
| POST   | `/v1/api/`        | Add new task                 |
| PUT    | `/v1/api/`        | Update task by ID            |
| DELETE | `/v1/api/`        | Delete task by ID            |

🔐 All routes (except signup/login) require a valid token inside the request body to identify the user.

---

## 🚀 How to Run

```bash
# Clone the repo
git clone https://github.com/enavid/CRUD.git

# Move into the directory
cd CRUD

# Install dependencies
npm install express

# Start the server
node server.js
```

🌐 Server runs on: `http://localhost:3000/v1/api`

---

## 🧠 What I Learned

- Modular structure of Express apps
- RESTful API design
- Authentication with token (no external libraries)
- Data handling with mock databases
- Error handling and user-specific responses

---

## 📣 Credits

This project was built as part of the **CS-Internship Web Track**, a professional internship program designed to help aspiring developers build real-world projects and gain deep industry knowledge.

🌐 [CS-Internship GitHub](https://github.com/cs-internship)  
📰 [CS-Internship on Virgool (Farsi)](https://virgool.io/cs-internship/cs-internship-k3j2hx4wgvga)  
📺 [YouTube Recording of This Code](https://www.youtube.com/watch?v=f2mjEMarthI&list=PLSQ2VqVf5QiCC75ED9XyEk-BGsR2gxfbU&index=95)
