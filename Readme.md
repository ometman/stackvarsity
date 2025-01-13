# Web Development Learning Platform

A modern and interactive platform for learning web development, featuring courses, quizzes, progress tracking, gamification, and a community forum.

---

## Features

- **User Authentication**: Secure signup, login, and role-based access.
- **Course Management**: Organized learning paths with interactive lessons.
- **Interactive Code Editor**: Code examples with syntax highlighting and execution.
- **Progress Tracking**: Visual representation of user progress.
- **Subscription Management**: Tiered access with integrated payment gateway.
- **Community Forum**: Discussion board for questions and interactions.
- **Gamification**: Points, badges, and leaderboards to motivate learning.

---

## Tech Stack

### Frontend
- **Next.js**: React-based framework for fast and SEO-friendly development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API calls.

### Backend
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Minimalist web framework.
- **PostgreSQL**: Relational database for storing user and course data.
- **JWT**: Secure user authentication.

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- PostgreSQL installed and running.

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ometman/web-learning-platform.git
   cd web-learning-platform


2. **Backend Setup**
   cd backend
   npm install
   cp .env.example .env
   # Fill in your PostgreSQL credentials in the .env file
   npm run start

3. **Frontend Setup**
   cd frontend
   npm install
   npm run dev

4. Access the Application Open your browser and go to http://localhost:3000

**Project Structure**

backend/
├── db.js                 # Database connection
├── routes/               # API routes (auth, courses, etc.)
├── server.js             # Main server entry point
└── .env                  # Environment variables

frontend/
├── pages/                # Next.js pages
├── components/           # Reusable React components
├── styles/               # Tailwind CSS styles
├── utils/api.js          # API call utility
└── public/               # Static assets

**Environment Variables**

Create a .env file in the backend folder and include:

DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=web_learning
JWT_SECRET=your_jwt_secret


**Contributing**

Contributions are welcome! Here's how you can contribute:

Fork the repository.
Create a feature branch.
Commit your changes.
Push the branch and create a pull request.

**License**
This project is licensed under the MIT License. See the LICENSE file for details.


**Contact**
For questions or support, feel free to contact:

Name: Omet Omeni
Email: revomet@gmail.com
Website: https://ometman.com

d	role_name	permissions	description
1	superadmin	{"manage_users": true, "manage_courses": true, "manage_content": true, "view_reports": true, "all_permissions": true}	Full system access
2	content_manager	{"manage_courses": true, "manage_content": true}	Manages course content only
3	support	{"manage_users": true, "view_reports": true}	User management and reports