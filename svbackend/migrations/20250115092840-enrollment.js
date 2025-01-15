'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('enrollments', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            enrollment_date: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            status: {
                type: Sequelize.ENUM('enrolled', 'in progress', 'completed', 'dropped'),
                allowNull: false,
                defaultValue: 'enrolled'
            },
            student_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'students',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            course_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'courses',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            deleted_at: {
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('enrollments');
    }
};
