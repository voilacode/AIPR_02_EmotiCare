# EmotiCare: AI-Driven Mental Wellness Companion

## 🚀 Introduction

**Emoticare** is an innovative web application that generates content based on user emotions. Powered by Node.js, Express, Tailwind CSS, and MySQL, this platform leverages AI through the GPT Rapid API to deliver personalized experiences. Emoticare is designed with user-centric authentication, role-based access control, and a sleek, responsive interface.

In an era where mental health awareness is paramount, EmotiCare emerges as a
groundbreaking AI-driven mental wellness companion. This innovative platform leverages
artificial intelligence to provide personalized emotional support, mood tracking, and mental
health resources tailored to individual needs. Developed using state-of-the-art technologies
such as React Native, Node.js, TensorFlow.js, and MongoDB, EmotiCare integrates advanced
natural language processing and machine learning algorithms to offer real-time emotional
analysis and support.

EmotiCare delivers a comprehensive user experience with a range of powerful features,
including secure authentication, customizable wellness plans, and interactive mood tracking.
The platform allows users to engage in AI-powered conversations, set mental health goals, and
receive personalized recommendations for coping strategies and mindfulness exercises. To
enhance user engagement and support, EmotiCare includes a smart notification system that
provides timely reminders, motivational messages, and crisis resources when needed.

## 🎯 Features

- **Basic Authentication** – User login and registration system.
- **Role-Based Access Control** – Admins have access to all users' listings; users have limited access.
- **Admin Dashboard** – Admins can manage and view all user data.
- **AI-Powered Content Generation** – Generate content using the GPT Rapid API.
- **Tailwind CSS** – Sleek, responsive design for the user interface.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** Tailwind CSS
- **Database:** MySQL
- **Authentication & Roles:** Csurf, Express Session
- **AI Integration:** GPT Rapid API for generating content.

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/voilacode/AIPR_02_EmotiCare.git
cd coreapp
npm i
```

### 2️⃣ Setup Database Credentials

```sh
const mysql = require('mysql2');

const db = mysql
  .createPool({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'databasename',
  })
  .promise();

module.exports = db;
```

### 3️⃣ Setup Database

User table

```sh
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    location VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Insert default users into tables, the accounts are created with password as 12345

```sh
INSERT INTO users (name, phone, email, password, gender, location, role)
VALUES ('Admin', '1234567890', 'admin@gmail.com', '$2b$10$MN9cI0M2wzY2r8fJ6xazlOqKWgdPGBsNUWEZqtqBcyIb01fXs.WGW', 'male', 'Admin Location', 'admin');

INSERT INTO users (name, phone, email, password, gender, location, role)
VALUES ('User', '1234567890', 'user@gmail.com', '$2b$10$MN9cI0M2wzY2r8fJ6xazlOqKWgdPGBsNUWEZqtqBcyIb01fXs.WGW', 'male', 'User Location', 'user');
```

## Login Details

- **User Account:** email: user@gmail.com, password: 12345
- **Admin Account:** email: admin@gmail.com, password: 12345

### 4️⃣ Run the application by starting the server

```sh
node app.js
```

Open the browser and point the url to http://localhost:3000
