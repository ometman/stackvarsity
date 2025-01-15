'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('answers', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            answer_text: {
                type: Sequelize.STRING,
                allowNull: false
            },
            is_correct: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            question_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'questions', // This must match the table name of the Question model
                    key: 'id'
                },
                onDelete: 'CASCADE'
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
        await queryInterface.dropTable('answers');
    }
};
