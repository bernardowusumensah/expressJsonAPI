# 📁 Portfolio Admin Dashboard API

This is a **Node.js + Express** application that serves as an **admin dashboard** for managing portfolio data, including **Skills** and **Projects**. It connects to **MongoDB Atlas**, uses **Pug** for server-side rendering, and is styled with **Tailwind CSS**. The app also includes public **JSON API endpoints** to power a frontend portfolio (to be built later).

---

## 🚀 Features

- ✅ Admin dashboard to:
  - Add and delete **skills**
  - Add and delete **projects**
- ✅ JSON API endpoints:
  - `GET /api/skills` – returns all skills
  - `GET /api/projects` – returns all projects
- ✅ Tailwind CSS styling
- ✅ Pug template engine
- ✅ MongoDB Atlas for cloud data storage
- ✅ Session support (for future login features)

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Pug](https://pugjs.org/)
- [Tailwind CSS (CDN)](https://tailwindcss.com/)
- [express-session](https://www.npmjs.com/package/express-session)

---

## 📂 Project Structure
portfolio-admin-api/
├── models/ # Mongoose models (Skill, Project)
├── routes/ # Admin and API route files
├── views/ # Pug templates (admin pages)
├── public/ # Static assets (e.g. CSS/images)
├── .env # MongoDB connection string
├── server.js # Main Express server file
└── README.md # This file
