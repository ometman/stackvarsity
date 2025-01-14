const sequelize = require('../utilities/dbPool');
const Admin = require('./Admin');
const AdminRole = require('./AdminRole');
const User = require('./User');
const Subscription = require('./Subscription');
const Student = require('./Student');
const Course = require('./Course');
const Module = require('./Module');
const Lesson = require('./Lesson');
const Project = require('./Project');
const Grade = require('./Grade');

(async () => {
    try {
        await sequelize.sync({ alter : true });
        console.log("Database & tables created!");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
})();
