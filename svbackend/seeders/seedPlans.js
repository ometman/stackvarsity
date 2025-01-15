'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Plans', [
      {
        id: 'plan_uuid1',
        name: 'Basic Plan',
        description: 'A basic plan for individual learners with access to essential courses and materials.',
        price: 29.99,
        duration: '1 month',
        features: JSON.stringify(['Access to 5 courses', 'Basic support']),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'plan_uuid2',
        name: 'Pro Plan',
        description: 'A pro plan for students looking to take advanced courses with additional support.',
        price: 59.99,
        duration: '3 months',
        features: JSON.stringify(['Access to all courses', 'Priority support', 'Certificate upon completion']),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'plan_uuid3',
        name: 'Premium Plan',
        description: 'A premium plan for professionals with exclusive content, mentorship, and certification.',
        price: 99.99,
        duration: '6 months',
        features: JSON.stringify(['Access to all courses', 'Exclusive mentorship sessions', 'Priority support', 'Certificate upon completion', 'Lifetime access to course updates']),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'plan_uuid4',
        name: 'Enterprise Plan',
        description: 'A comprehensive plan for businesses and teams, offering bulk access to courses and additional management features.',
        price: 499.99,
        duration: '12 months',
        features: JSON.stringify(['Bulk access to courses for teams', 'Dedicated account manager', 'Customized support', 'Certificate upon completion', 'Priority support']),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Plans', null, {});
  },
};
