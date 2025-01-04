backend/
├── src/                      # Source code
│   ├── api/                  # API route handlers
│   │   ├── auth/             # Authentication API routes
│   │   │   ├── login.js      # Login API handler
│   │   │   └── signup.js     # Signup API handler
│   │   └── courses/          # Course-related API routes
│   │       ├── getCourses.js # Get all courses
│   │       └── createCourse.js # Create a new course
│   ├── controllers/          # Business logic
│   │   ├── authController.js # Handles login and signup logic
│   │   └── courseController.js # Handles course logic
│   ├── routes/               # Express route definitions
│   │   ├── userRoutes.js     # User-related routes
│   │   └── courseRoutes.js   # Course-related routes
│   ├── services/             # Service layer for business logic
│   │   ├── authService.js    # Authentication services
│   │   └── courseService.js  # Course services
│   ├── models/               # Database models
│   │   ├── userModel.js      # User model
│   │   └── courseModel.js    # Course model
│   ├── middleware/           # Custom middleware
│   │   ├── authMiddleware.js # JWT authentication middleware
│   │   └── errorHandler.js   # Global error handler
│   ├── utils/                # Utility functions
│   │   ├── db.js             # Database connection using pg
│   │   ├── bcryptUtils.js    # Bcrypt password hashing utilities
│   │   └── jwtUtils.js       # JWT generation and verification
│   ├── config/               # Configuration files
│   │   ├── default.json      # Default configuration
│   │   ├── production.json   # Production-specific configuration
│   │   └── development.json  # Development-specific configuration
│   ├── app.js                # Express app setup
│   └── server.js             # Server startup logic
├── migrations/               # Database migration files
├── tests/                    # Unit and integration tests
│   ├── auth.test.js          # Tests for authentication endpoints
│   ├── course.test.js        # Tests for course endpoints
│   └── utils.test.js         # Tests for utility functions
├── .env                      # Backend environment variables
├── Dockerfile                # Docker configuration
├── package.json              # Project dependencies and scripts
├── jest.config.js            # Jest configuration for tests
└── README.md                 # Backend documentation


Database Tables

-- USERS TABLE
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT "student",
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- STUDENTS TABLE
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    bio TEXT,
    date_of_birth DATE,
    country VARCHAR(100),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    profile_picture TEXT,
    level VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


-- Enrollment table schema
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    progress DECIMAL(5, 2) DEFAULT 0.00 CHECK (progress >= 0 AND progress <= 100),
    grade VARCHAR(5), -- e.g., A, B, C, D, F or Pass/Fail
    status VARCHAR(20) DEFAULT 'Active', -- Active, Completed, Dropped, etc.
    
    -- Foreign Keys
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    course_id INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    grade VARCHAR(10) NOT NULL,
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- ADMINS TABLE
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES admin_roles(id)
);

-- ADMIN ROLES TABLE
CREATE TABLE admin_roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);

-- COURSES TABLE
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    duration VARCHAR(50),
    students INT DEFAULT 0,
    is_premium BOOLEAN DEFAULT FALSE,
    image TEXT,
    instructor VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MODULES TABLE
CREATE TABLE modules (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- LESSONS TABLE
CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    module_id INT NOT NULL,
    content TEXT,
    FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
);

-- STUDENT PROGRESS TABLE
CREATE TABLE student_progress (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    lesson_id INT NOT NULL,
    progress_percent INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
);

-- SUBSCRIPTIONS TABLE





Add Only Relationships

-- Add foreign key relationships to the users table
ALTER TABLE students 
ADD CONSTRAINT fk_students_user_id 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

ALTER TABLE admins 
ADD CONSTRAINT fk_admins_user_id 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

ALTER TABLE admins 
ADD CONSTRAINT fk_admins_role_id 
FOREIGN KEY (role_id) 
REFERENCES admin_roles(id);

-- Add foreign key relationships to the courses table --- done
ALTER TABLE modules 
ADD CONSTRAINT fk_modules_course_id 
FOREIGN KEY (course_id) 
REFERENCES courses(id) 
ON DELETE CASCADE;

-- done
ALTER TABLE lessons 
ADD CONSTRAINT fk_lessons_module_id 
FOREIGN KEY (module_id) 
REFERENCES modules(id) 
ON DELETE CASCADE;

-- Add foreign key relationships to student_progress
ALTER TABLE student_progress 
ADD CONSTRAINT fk_student_progress_user_id 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

ALTER TABLE student_progress 
ADD CONSTRAINT fk_student_progress_course_id 
FOREIGN KEY (course_id) 
REFERENCES courses(id) 
ON DELETE CASCADE;

ALTER TABLE student_progress 
ADD CONSTRAINT fk_student_progress_lesson_id 
FOREIGN KEY (lesson_id) 
REFERENCES lessons(id) 
ON DELETE CASCADE;

-- Add foreign key relationships to subscriptions
ALTER TABLE subscriptions 
ADD CONSTRAINT fk_subscriptions_user_id 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

ALTER TABLE subscriptions 
ADD CONSTRAINT fk_subscriptions_course_id 
FOREIGN KEY (course_id) 
REFERENCES courses(id) 
ON DELETE CASCADE;



INSERT INTO users (id, username, email, password)
VALUES (2160, 'placeholder_user', 'placeholder_email@example.com', 'placeholder_password');

INSERT INTO students (id, first_name, last_name, email, password, bio, date_of_birth, country, registration_date, last_login, profile_picture, level, is_active, user_id)
VALUES
(3, 'Alice', 'Smith', 'alice@example.com', '$2b$10$8eo7ogGX.TIzb3A.skMji.RZ.3FGbjHc/3Q6bLtUAHKfQB84enKeq', 'Enthusiastic learner!', '2002-07-15', 'USA', '2024-12-25 05:12:39.671818', NULL, 'https://example.com/alice.jpg', '1', TRUE, 101),
(4, 'Bob', 'Johnson', 'bob@example.com', '$2b$10$nXJVQOTjkUxC4obEF7Aa9ON/hBpsdTce3Y.DRKZ2WT8k3PYakoyNC', 'Loves coding.', '2001-03-22', 'Canada', '2024-12-25 05:12:39.671818', NULL, 'https://example.com/bob.png', '2', TRUE, 102),
(5, 'Charlie', 'Williams', 'charlie@example.com', '$2b$10$8eo7ogGX.TIzb3A.skMji.RZ.3FGbjHc/3Q6bLtUAHKfQB84enKeq', 'Interested in web development.', '2000-11-08', 'UK', '2024-12-25 05:12:39.671818', NULL, 'https://example.com/charlie.gif', '3', TRUE, 103),
(6, 'David', 'Brown', 'david@example.com', '$2b$10$nXJVQOTjkUxC4obEF7Aa9ON/hBpsdTce3Y.DRKZ2WT8k3PYakoyNC', 'Learning to code for fun.', '2003-05-12', 'Australia', '2024-12-25 05:12:39.671818', NULL, 'https://example.com/david.svg', '1', TRUE, 104);




INSERT INTO courses (id, title, category, description, instructor, duration, students, image) VALUES
(1, 'Frontend Developer', 'Developer', 'Learn the fundamentals of web development, including HTML5, CSS3, and JavaScript, to build modern and responsive web pages.', 'John Doe', '6 weeks', 120, 'https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(2, 'Advance Front-End Developer', 'Developer', 'Master front-end technologies with React, Vue.js, and modern CSS frameworks to create dynamic and interactive web applications.', 'Jane Smith', '8 weeks', 85, 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=640'),
(3, 'Back-End Developer', 'Developer', 'Focus on server-side programming with Node.js, Express, Django, and Flask to build robust back-end applications.', 'Emily Davis', '10 weeks', 70, 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(4, 'Advance Back-End Developer', 'Developer', 'Focus on server-side programming with Node.js, Express, Django, and Flask to build robust back-end applications.', 'Emily Davis', '10 weeks', 70, 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(5, 'Full-Stack Developer', 'Developer', 'Learn end-to-end application development with MERN and MEAN stacks, integrating front-end and back-end technologies.', 'Michael Brown', '12 weeks', 150, 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=640'),
(6, 'Advanced Full-Stack Developer', 'Developer', 'Explore cutting-edge tools like the T3 Stack and Astro to optimize performance and build modern web applications.', 'Olivia Martinez', '10 weeks', 40, 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(7, 'Cloud-Optimized Developer', 'Developer', 'Learn to build scalable and serverless applications using Next.js, Firebase, and AWS Lambda for cloud deployment.', 'David Johnson', '10 weeks', 95, 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(8, 'Mobile-Friendly Developer', 'Developer', 'Develop mobile-first and hybrid web applications with React Native and Ionic frameworks, ensuring cross-platform compatibility.', 'Sophia Wilson', '8 weeks', 60, 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(9, 'Enterprise Developer', 'Developer', 'Create enterprise-grade applications with Spring Boot, React, and ASP.NET Core, focusing on scalability and performance.', 'James Anderson', '14 weeks', 65, 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');


INSERT INTO grades (student_id, course_id, grade, comments)
VALUES
(1, 1, 'A', 'Excellent performance'),
(2, 2, 'B', 'Good understanding but needs improvement'),
(3, 3, 'C', 'Satisfactory work, but should focus more on assignments'),
(4, 4, 'B+', 'Great effort, but room for improvement in project work'),
(5, 5, 'A-', 'Consistent and high-quality work throughout the course');


INSERT INTO enrollments (id, student_id, course_id, enrollment_date, progress, grade, status)
VALUES
(1, 1, 1, '2024-12-01', 45.0, 'B+', 'In Progress'),
(2, 2, 3, '2024-11-25', 80.0, 'A', 'Completed'),
(3, 3, 5, '2024-12-05', 20.0, NULL, 'In Progress'),
(4, 1, 2, '2024-12-08', 60.0, 'B', 'In Progress');
