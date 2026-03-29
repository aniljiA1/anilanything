# 🚀 AnythingAI – Full Stack Task Manager

A full-stack task management application built with **React (Vite)** and **Node.js (Express)**, featuring authentication, CRUD operations, and deployment-ready configuration.

---

## 🌐 Live Demo

* Frontend: https://anilanything.vercel.app/
* Backend API: https://anilanything.onrender.com/
* Postman screenshot: https://drive.google.com/file/d/19jv700nbqu7BQHqqqHM_aX1vTdQFh2ox/view?usp=sharing
* screen recording: https://drive.google.com/file/d/1XLW2GsFfgH_yqu3xSjGIcpMp11esQWtE/view?usp=sharing

---

## 📌 Features

* 🔐 User Authentication (JWT)
* ✅ Create, Read, Update, Delete Tasks
* 🔄 Toggle Task Completion
* 🌐 REST API Integration
* ⚡ Fast UI with React + Vite
* 🔒 Secure Backend with Express & MongoDB
* 🚀 Deployment Ready (Vercel + Render)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt (Password Hashing)
* CORS

---

## 📁 Project Structure

```
AnythingAI/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=mongodb+srv://aniljiA1:Anil12345@cluster0.j8lv3un.mongodb.net/?appName=Cluster0
JWT_SECRET=your_secret_key
```

---

## 🚀 Installation & Setup

```


###  Backend Setup

```
cd backend
npm install
npm start
```

Server runs on:
👉 http://localhost:5000

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

App runs on:
👉 http://localhost:5173

---

## 🔗 API Endpoints

### Auth

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### Tasks

* GET `/api/v1/tasks`
* POST `/api/v1/tasks`
* PUT `/api/v1/tasks/:id`
* DELETE `/api/v1/tasks/:id`

---

## 🔐 Authentication

* Uses **JWT Token**
* Send token in headers:

```
Authorization: Bearer <token>
```

---

## 🌍 CORS Configuration

Supports both:

* Localhost (development)
* Vercel (production)

Example:

```js
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend.vercel.app"
];
```

---

## 🚀 Deployment

### Frontend (Vercel)

* Push repo to GitHub
* Import project in Vercel
* Set build command: `npm run build`

### Backend (Render / Railway)

* Add environment variables
* Start command: `npm start`

---

## 🧪 API Testing

Use:

* Postman

---

Deploy: https://anilanything.vercel.app/

## 👨‍💻 Author
Anil Kumar


---

