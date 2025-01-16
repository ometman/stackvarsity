'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subscriptions', [
      {
        id: 'uuid1',
        user_id: 'user_uuid1',
        plan_id: 'plan_uuid1',
        start_date: '2024-01-01',
        end_date: '2025-01-01',
        status: 'Active',
        renewal_count: 1,
        renewal_frequency: 'Yearly',
        auto_renew: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'uuid2',
        user_id: 'user_uuid2',
        plan_id: 'plan_uuid2',
        start_date: '2024-02-01',
        end_date: '2025-02-01',
        status: 'Expired',
        renewal_count: 2,
        renewal_frequency: 'Monthly',
        auto_renew: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'uuid3',
        user_id: 'user_uuid3',
        plan_id: 'plan_uuid3',
        start_date: '2024-03-01',
        end_date: '2025-03-01',
        status: 'Trial',
        renewal_count: 0,
        renewal_frequency: 'Monthly',
        auto_renew: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'uuid4',
        user_id: 'user_uuid4',
        plan_id: 'plan_uuid4',
        start_date: '2024-04-01',
        end_date: '2025-04-01',
        status: 'Cancelled',
        renewal_count: 1,
        renewal_frequency: 'Yearly',
        auto_renew: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'uuid5',
        user_id: 'user_uuid5',
        plan_id: 'plan_uuid5',
        start_date: '2024-05-01',
        end_date: '2025-05-01',
        status: 'Suspended',
        renewal_count: 0,
        renewal_frequency: 'Monthly',
        auto_renew: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subscriptions', null, {});
  },
};