'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',  // Assumes a 'users' table exists
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [2, 40]
        }
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [2, 40]
        }
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      registration_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      last_login: {
        type: Sequelize.DATE,
        allowNull: true
      },
      profile_picture: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isUrl: true, // Ensure it's a valid URL
          len: [0, 255], // Limit URL length
          is: /^.*\.(jpg|jpeg|png)$/i // Allow only jpg, jpeg, and png images
        }
      },
      level: {
        type: Sequelize.ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert'),
        allowNull: true
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};
