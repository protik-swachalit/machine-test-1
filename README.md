# 🧪 Full-Stack (MERN) Machine Test

## 📌 Overview

This repository contains a **Full-Stack (MERN) Machine Test** designed to evaluate candidates on real-world development skills, including:

* Backend API development (Node.js + Express)
* Frontend development (React)
* State management & API integration
* Database design using MongoDB
* Code quality and project structure
* Git workflow and collaboration practices

---

## ⏱ Duration

**45 Minutes**

---

## 🎯 Objective

Build a **Notes Management Application** with full CRUD functionality, search capability, and integration between backend APIs and a React frontend.

---

## 🧰 Tech Stack

* React.js
* Node.js
* Express.js
* MongoDB (**required**)
* Git & GitHub

---

## 📂 Project Structure

/client → React application
/server → Node.js + Express API

---

## 🧩 Problem Statement

Build a **Notes Management System** where users can:

* Create notes
* View all notes
* Update notes
* Delete notes
* Search notes by keyword

---

## 📌 Data Model

Each note should include:

* `title` (string)
* `content` (string)
* `createdAt` (auto-generated)

---

## 🔧 Backend Requirements

* Build REST APIs using Express.js
* Use **MongoDB (Mongoose preferred)**
* Implement proper status codes (200, 201, 400, 404)
* Add basic error handling

---

### 📍 API Endpoints

#### Create Note

POST `/api/notes`

#### Get All Notes (with search)

GET `/api/notes?search=keyword`

👉 Should filter notes by `title` or `content`

#### Update Note

PUT `/api/notes/:id`

#### Delete Note

DELETE `/api/notes/:id`

---

## 🎨 Frontend Requirements

* Use React functional components
* Use hooks (`useState`, `useEffect`)
* Integrate with backend APIs

---

### UI Features:

* Display all notes
* Add a new note
* Edit/update a note
* Delete a note
* Search notes using input field

---

## 🌿 Git Workflow (Mandatory)

Follow these steps carefully:

1. Fork this repository

2. Create a new branch:
   feature/your-name

3. Make meaningful commits:

   * feat: initial setup
   * feat: backend APIs
   * feat: frontend UI
   * feat: search implementation
   * fix: improvements

4. Push your branch

5. Create a Pull Request (PR)

---

## 📄 Pull Request Guidelines

Your PR must include:

* Summary of your solution
* Features implemented
* Any assumptions or limitations

---

## 📘 README Update (Required)

Update this README with:

* Setup instructions
* How to run backend & frontend
* API documentation
* Screenshots (optional)

---

## ⭐ Bonus (Optional but Valuable)

* Implement **debouncing in search input** (React)
* Add input validation (no empty fields)
* Show loading states
* Improve UI/UX
* Use environment variables (`.env`)

---

## ❌ Disqualification Criteria

* Application not running
* MongoDB not used
* No proper Git commits
* Plagiarized code without understanding

---

## 🧠 Tips

* Focus on a working solution first
* Keep your code simple and clean
* Manage your time effectively
* Avoid over-engineering

---

## 📬 Submission

Submit your work by creating a **Pull Request (PR)** to this repository.

---

## 🚀 Good Luck!

We’re excited to see your approach and problem-solving skills.
Happy Coding! 🎯
