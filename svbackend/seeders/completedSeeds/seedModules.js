'use strict';

const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // Use findAll with attributes to get only the ID
    const courses = await queryInterface.sequelize.query(
      `SELECT id, title FROM "courses" WHERE title IN (
        'Frontend Developer', 
        'Back-End Developer', 
        'Advanced Front-End Developer', 
        'Advanced Back-End Developer', 
        'Full-Stack Developer'
        )`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Mapping for easy lookup of course IDs
    const courseIdMap = courses.reduce((acc, course) => {
      acc[course.title] = course.id;
      return acc;
    }, {});

    await queryInterface.bulkInsert('modules', [
      {
        id: uuidv4(),
        title: 'HTML Basics',
        order_index: 1,
        description: 'Introduction to HTML5, covering the basic structure of web pages and essential HTML tags.',
        course_id: courseIdMap['Frontend Developer'],  // Frontend Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'CSS Fundamentals',
        order_index: 2,
        description: 'Learn the basics of styling web pages using CSS3, including layout techniques and responsive design.',
        course_id: courseIdMap['Frontend Developer'],  // Frontend Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'JavaScript Basics',
        order_index: 3,
        description: 'Cover the fundamentals of JavaScript programming, including variables, functions, and loops.',
        course_id: courseIdMap['Frontend Developer'],  // Frontend Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'React Introduction',
        order_index: 1,
        description: 'Begin your journey with React, learning the core concepts like components, state, and props.',
        course_id: courseIdMap['Advanced Front-End Developer'],  // Advance Front-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Advanced React Features',
        order_index: 2,
        description: 'Dive deeper into React with hooks, context API, and routing to build dynamic web applications.',
        course_id: courseIdMap['Advanced Front-End Developer'],  // Advance Front-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Vue.js Basics',
        order_index: 3,
        description: 'Learn the fundamentals of Vue.js, including directives, components, and Vue CLI.',
        course_id: courseIdMap['Advanced Front-End Developer'],  // Advance Front-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Node.js Basics',
        order_index: 1,
        description: 'Learn the basics of Node.js, including setting up servers and handling requests.',
        course_id: courseIdMap['Back-End Developer'],  // Back-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Express.js Framework',
        order_index: 2,
        description: 'Build web applications using the Express.js framework to create RESTful APIs.',
        course_id: courseIdMap['Back-End Developer'], // Back-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Database Management with MongoDB',
        order_index: 3,
        description: 'Learn how to manage databases with MongoDB, including CRUD operations and schema design.',
        course_id: courseIdMap['Back-End Developer'],  // Back-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Node.js and Express with MongoDB',
        order_index: 1,
        description: 'Combine Node.js, Express.js, and MongoDB to create full-stack applications.',
        course_id: courseIdMap['Advanced Back-End Developer'],  // Advance Back-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Advanced Node.js Features',
        order_index: 2,
        description: 'Explore advanced features of Node.js, including streams, buffers, and child processes.',
        course_id: courseIdMap['Advanced Back-End Developer'],  // Advance Back-End Developer course
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Web Security Best Practices',
        order_index: 3,
        description: 'Understand the best practices for securing web applications, including data protection and authentication.',
        course_id: courseIdMap['Advanced Back-End Developer'],  // Advance Back-End Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Introduction to MERN Stack',
        order_index: 1,
        description: 'Learn about the MERN stack (MongoDB, Express, React, Node.js) for full-stack development.',
        course_id: courseIdMap['Full-Stack Developer'],  // Full-Stack Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Connecting Front-End and Back-End with MERN',
        order_index: 2,
        description: 'Learn how to connect the front-end (React) with the back-end (Node.js and Express) in a full-stack application.',
        course_id: courseIdMap['Full-Stack Developer'],  // Full-Stack Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Deploying MERN Applications',
        order_index: 3,
        description: 'Learn how to deploy MERN stack applications to cloud platforms like AWS and Heroku.',
        course_id: courseIdMap['Full-Stack Developer'],  // Full-Stack Developer
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('modules', null, {});
  },
};
