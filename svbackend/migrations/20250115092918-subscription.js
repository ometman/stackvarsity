'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subscriptions', {
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
      plan_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'plans',  // Assumes a 'plans' table exists
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      start_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
          isDate: true
        }
      },
      status: {
        type: Sequelize.ENUM('Active', 'Expired', 'Suspended', 'Cancelled', 'Trial'),
        defaultValue: 'Trial',
        allowNull: false
      },
      renewal_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      renewal_frequency: {
        type: Sequelize.ENUM('Monthly', 'Yearly'),
        allowNull: true
      },
      auto_renew: {
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
    await queryInterface.dropTable('subscriptions');
  }
};
