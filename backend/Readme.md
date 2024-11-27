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
