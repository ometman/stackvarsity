'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('courses', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    len: [3, 255]
                }
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            category: {
                type: Sequelize.STRING,
                allowNull: true
            },
            level: {
                type: Sequelize.ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert'),
                allowNull: false,
                defaultValue: 'Beginner'
            },
            duration: {
                type: Sequelize.STRING,
                allowNull: true
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: true,
                validate: {
                    min: 0
                }
            },
            image_url: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    isUrl: true,
                    len: [5, 255]
                }
            },
            is_published: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            instructor_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: 'users', // Ensure this matches the instructor table (users or instructors)
                    key: 'id'
                },
                onDelete: 'SET NULL',
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
        await queryInterface.dropTable('courses');
    }
};
