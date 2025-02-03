'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('plans', [
      {
        id: uuidv4(),
        name: 'Basic Plan',
        description: 'A basic plan for individual learners with access to essential courses and materials.',
        price: 29.99,
        duration: 'Monthly',
        features: JSON.stringify(['Access to 5 courses', 'Basic support']),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        name: 'Pro Plan',
        description: 'A pro plan for students looking to take advanced courses with additional support.',
        price: 59.99,
        duration: 'Quarterly',
        features: JSON.stringify(['Access to all courses', 'Priority support', 'Certificate upon completion']),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        name: 'Premium Plan',
        description: 'A premium plan for professionals with exclusive content, mentorship, and certification.',
        price: 99.99,
        duration: 'Yearly',
        features: JSON.stringify(['Access to all courses', 'Exclusive mentorship sessions', 'Priority support', 'Certificate upon completion', 'Lifetime access to course updates']),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        name: 'Enterprise Plan',
        description: 'A comprehensive plan for businesses and teams, offering bulk access to courses and additional management features.',
        price: 499.99,
        duration: 'Lifetime',
        features: JSON.stringify(['Bulk access to courses for teams', 'Dedicated account manager', 'Customized support', 'Certificate upon completion', 'Priority support']),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('plans', null, {});
  },
};
