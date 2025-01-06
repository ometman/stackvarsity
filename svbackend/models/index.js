const sequelize = require('../utilities/db');
const Admin = require('./adminModel');
const AdminRole = require('./adminRoleModel');
const User = require('./userModel');
const Subscription = require('./subscriptionModel');
const Student = require('./studentModel');
const Course = require('./courseModel');
const Module = require('./moduleModel');
const Lesson = require('./lessonModel');
const Project = require('./projectModel');
const Grade = require('./gradeModel');

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Database & tables created!");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
})();
