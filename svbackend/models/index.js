const sequelize = require('./db');
const Admin = require('./models/admin');
const AdminRole = require('./models/adminRole');
const User = require('./models/user');
const Subscription = require('./models/subscription');
const Student = require('./models/student');
const Course = require('./models/course');
const Module = require('./models/module');
const Lesson = require('./models/lesson');
const Project = require('./models/project');
const Grade = require('./models/grade');

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Database & tables created!");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
})();
