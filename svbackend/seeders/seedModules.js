'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Modules', [
      {
        id: 'module_uuid1',
        title: 'HTML Basics',
        order_index: 1,
        description: 'Introduction to HTML5, covering the basic structure of web pages and essential HTML tags.',
        course_id: 'course_uuid1',  // Frontend Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid2',
        title: 'CSS Fundamentals',
        order_index: 2,
        description: 'Learn the basics of styling web pages using CSS3, including layout techniques and responsive design.',
        course_id: 'course_uuid1',  // Frontend Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid3',
        title: 'JavaScript Basics',
        order_index: 3,
        description: 'Cover the fundamentals of JavaScript programming, including variables, functions, and loops.',
        course_id: 'course_uuid1',  // Frontend Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid4',
        title: 'React Introduction',
        order_index: 1,
        description: 'Begin your journey with React, learning the core concepts like components, state, and props.',
        course_id: 'course_uuid2',  // Advance Front-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid5',
        title: 'Advanced React Features',
        order_index: 2,
        description: 'Dive deeper into React with hooks, context API, and routing to build dynamic web applications.',
        course_id: 'course_uuid2',  // Advance Front-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid6',
        title: 'Vue.js Basics',
        order_index: 3,
        description: 'Learn the fundamentals of Vue.js, including directives, components, and Vue CLI.',
        course_id: 'course_uuid2',  // Advance Front-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid7',
        title: 'Node.js Basics',
        order_index: 1,
        description: 'Learn the basics of Node.js, including setting up servers and handling requests.',
        course_id: 'course_uuid3',  // Back-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid8',
        title: 'Express.js Framework',
        order_index: 2,
        description: 'Build web applications using the Express.js framework to create RESTful APIs.',
        course_id: 'course_uuid3',  // Back-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid9',
        title: 'Database Management with MongoDB',
        order_index: 3,
        description: 'Learn how to manage databases with MongoDB, including CRUD operations and schema design.',
        course_id: 'course_uuid3',  // Back-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid10',
        title: 'Node.js and Express with MongoDB',
        order_index: 1,
        description: 'Combine Node.js, Express.js, and MongoDB to create full-stack applications.',
        course_id: 'course_uuid4',  // Advance Back-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid11',
        title: 'Advanced Node.js Features',
        order_index: 2,
        description: 'Explore advanced features of Node.js, including streams, buffers, and child processes.',
        course_id: 'course_uuid4',  // Advance Back-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid12',
        title: 'Web Security Best Practices',
        order_index: 3,
        description: 'Understand the best practices for securing web applications, including data protection and authentication.',
        course_id: 'course_uuid4',  // Advance Back-End Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid13',
        title: 'Introduction to MERN Stack',
        order_index: 1,
        description: 'Learn about the MERN stack (MongoDB, Express, React, Node.js) for full-stack development.',
        course_id: 'course_uuid5',  // Full-Stack Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid14',
        title: 'Connecting Front-End and Back-End with MERN',
        order_index: 2,
        description: 'Learn how to connect the front-end (React) with the back-end (Node.js and Express) in a full-stack application.',
        course_id: 'course_uuid5',  // Full-Stack Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      {
        id: 'module_uuid15',
        title: 'Deploying MERN Applications',
        order_index: 3,
        description: 'Learn how to deploy MERN stack applications to cloud platforms like AWS and Heroku.',
        course_id: 'course_uuid5',  // Full-Stack Developer
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Modules', null, {});
  },
};
