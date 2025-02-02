'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch users and plans from the database
    const users = await queryInterface.sequelize.query(
      `SELECT id, role, email FROM "users"
       WHERE role IN ('student', 'admin');`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const plans = await queryInterface.sequelize.query(
      `SELECT id, duration FROM "plans";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Prepare the data for seeding
    const Subscriptions = [
      {
        id: uuidv4(),
        user_id: users.find(user => user.role === 'student' && user.email === 'student1@example.com')?.id || null,
        plan_id: plans.find(plan => plan.duration === 'Monthly')?.id || null,
        start_date: '2024-01-01',
        end_date: '2025-01-01',
        status: 'Active',
        renewal_count: 1,
        renewal_frequency: 'Monthly',
        auto_renew: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        user_id: users.find(user => user.role === 'student' && user.email === 'student2@example.com')?.id || null,
        plan_id: plans.find(plan => plan.duration === 'Quarterly')?.id || null,
        start_date: '2024-02-01',
        end_date: '2025-02-01',
        status: 'Expired',
        renewal_count: 2,
        renewal_frequency: 'Quarterly',
        auto_renew: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        user_id: users.find(user => user.role === 'student' && user.email === 'student3@example.com')?.id || null,
        plan_id: plans.find(plan => plan.duration === 'Yearly')?.id || null,
        start_date: '2024-03-01',
        end_date: '2025-03-01',
        status: 'Trial',
        renewal_count: 0,
        renewal_frequency: 'Yearly',
        auto_renew: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        user_id: users.find(user => user.role === 'admin' && user.email === 'admin1@example.com')?.id || null,
        plan_id: plans.find(plan => plan.duration === 'Lifetime')?.id || null,
        start_date: '2024-03-01',
        end_date: '2025-03-01',
        status: 'Trial',
        renewal_count: 0,
        renewal_frequency: 'No Renewal',
        auto_renew: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ];

    // Perform bulk inserts
    await queryInterface.bulkInsert('subscriptions', Subscriptions);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subscriptions', null, {});
  },
};
