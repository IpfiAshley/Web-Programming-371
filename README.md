# Web-Programming-371

This is a dynamic, multi-page **Community Portal Website** built using **Node.js**, **Express.js**, and **EJS** templating. It allows users to learn about the team, explore upcoming events, and contact the organization through a simple form.

---

## Table of Contents
- [Overview]
- [Overview]
- [Technologies Used]
- [Team Members & Roles]
- [Features]
- [Setup Instructions]
- [Folder Structure]

---

## Overview
This project was developed as part of the **WPR37(8)1 Group Assignment**. The site dynamically renders content for events and team members, and processes form submissions using in-memory arrays.

The portal includes the following pages:
- **Home** – Welcome message + dynamic upcoming events
- **About** – Team information loaded from a backend array
- **Events** – All events with title, date, location, and image
- **Contact** – Simple contact form using POST method
- **Thank You** – Confirmation after form submission

---

## Technologies Used

- Node.js (v18+)
- Express.js (v4+)
- EJS Templating Engine (v3+)
- CSS/Bootstrap for styling
- Git & GitHub for version control
- Nodemon (for development)

---

## 👥 Team Members & Roles

| Name                | Role                  |
|---------------------|-----------------------|
| Itumeleng Ndlovu    | Frontend Developer    |
| Moraswi Chuene      | Backend Developer     |
| Ipfi Ungani         | Data Manager          |
| Morongwa Olifant    | Documentation Manager |
-----------------------------------------------

> All members contributed to both frontend and backend functionality as required.

---

## ✨ Features

- Modular Express routing
- Dynamic EJS templates using `<%= %>` and partials
- Fully functional contact form with in-memory storage
- Clean and accessible layout using CSS
- Static assets served from the public folder
- Peer collaboration via GitHub

---

## ⚙️ Setup Instructions

### 📥 1. Clone the repository
```bash
git clone https://github.com/your-username/community-portal.git
-- cd community-portal

🛠 2. Install dependencies
-- npm install

🚀 3. Run the development server
-- npm run dev

🌐 4. Visit in your browser
-- http://localhost:3000/

📁 Folder Structure
community-portal/
├── app.js
├── package.json
├── .gitignore
├── public/
│   ├── css/style.css
│   └── images/
├── routes/
│   └── pageRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── pages/
│       ├── home.ejs
│       ├── about.ejs
│       ├── events.ejs
│       ├── contact.ejs
│       └── thankyou.ejs
