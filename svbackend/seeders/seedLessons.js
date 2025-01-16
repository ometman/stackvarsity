'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Lessons', [
      // Frontend Developer - HTML Basics
      {
        id: 'lesson_uuid1',
        title: 'Introduction to HTML',
        content: 'This lesson covers the fundamentals of HTML, including the basic structure of an HTML document and essential tags such as <html>, <head>, <body>, and more.',
        order_index: 1,
        module_id: 'module_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Frontend Developer - CSS Fundamentals
      {
        id: 'lesson_uuid2',
        title: 'Understanding CSS Selectors',
        content: 'This lesson explores various CSS selectors (element, class, ID) and demonstrates how to apply styles to HTML elements.',
        order_index: 1,
        module_id: 'module_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Frontend Developer - JavaScript Basics
      {
        id: 'lesson_uuid3',
        title: 'Variables and Data Types',
        content: 'In this lesson, we will explore JavaScript variables, data types (strings, numbers, arrays, etc.), and how to use them effectively in a program.',
        order_index: 1,
        module_id: 'module_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Advance Front-End Developer - React Introduction
      {
        id: 'lesson_uuid4',
        title: 'Getting Started with React',
        content: 'This lesson introduces you to React, including setting up a simple React app and understanding the basic concepts such as components and props.',
        order_index: 1,
        module_id: 'module_uuid4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Advance Front-End Developer - Advanced React Features
      {
        id: 'lesson_uuid5',
        title: 'Using React Hooks',
        content: 'This lesson will teach you about React Hooks, including useState and useEffect, and demonstrate how they simplify state management in functional components.',
        order_index: 1,
        module_id: 'module_uuid5',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Advance Front-End Developer - Vue.js Basics
      {
        id: 'lesson_uuid6',
        title: 'Introduction to Vue.js',
        content: 'Learn the basics of Vue.js in this lesson, including its structure, directives, and components.',
        order_index: 1,
        module_id: 'module_uuid6',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Back-End Developer - Node.js Basics
      {
        id: 'lesson_uuid7',
        title: 'Setting up Node.js',
        content: 'This lesson will guide you through setting up a Node.js environment and writing a basic Node.js application.',
        order_index: 1,
        module_id: 'module_uuid7',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Back-End Developer - Express.js Framework
      {
        id: 'lesson_uuid8',
        title: 'Creating RESTful APIs with Express.js',
        content: 'Learn how to create RESTful APIs using the Express.js framework, including setting up routes and handling HTTP requests.',
        order_index: 1,
        module_id: 'module_uuid8',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Back-End Developer - Database Management with MongoDB
      {
        id: 'lesson_uuid9',
        title: 'Introduction to MongoDB',
        content: 'In this lesson, you will learn how to connect to MongoDB, perform CRUD operations, and manage databases for your back-end applications.',
        order_index: 1,
        module_id: 'module_uuid9',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Advance Back-End Developer - Node.js and Express with MongoDB
      {
        id: 'lesson_uuid10',
        title: 'Building Full-Stack Applications',
        content: 'In this lesson, we will integrate Node.js, Express, and MongoDB to build a full-stack web application.',
        order_index: 1,
        module_id: 'module_uuid10',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Advance Back-End Developer - Advanced Node.js Features
      {
        id: 'lesson_uuid11',
        title: 'Working with Streams in Node.js',
        content: 'Learn how to use Node.js streams for handling large amounts of data efficiently in this lesson.',
        order_index: 1,
        module_id: 'module_uuid11',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Advance Back-End Developer - Web Security Best Practices
      {
        id: 'lesson_uuid12',
        title: 'Securing Web Applications',
        content: 'This lesson focuses on securing web applications, including using HTTPS, authentication, and protecting against common security vulnerabilities.',
        order_index: 1,
        module_id: 'module_uuid12',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Full-Stack Developer - Introduction to MERN Stack
      {
        id: 'lesson_uuid13',
        title: 'Setting Up MERN Stack',
        content: 'Learn how to set up the MERN (MongoDB, Express, React, Node.js) stack in this lesson, and build the foundation of a full-stack application.',
        order_index: 1,
        module_id: 'module_uuid13',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Full-Stack Developer - Connecting Front-End and Back-End with MERN
      {
        id: 'lesson_uuid14',
        title: 'Integrating React with Node.js and Express',
        content: 'In this lesson, you will learn how to connect your React front-end with a Node.js back-end to build a full-stack application.',
        order_index: 1,
        module_id: 'module_uuid14',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
      // Full-Stack Developer - Deploying MERN Applications
      {
        id: 'lesson_uuid15',
        title: 'Deploying MERN Apps to Cloud Platforms',
        content: 'Learn how to deploy your MERN stack applications to cloud platforms such as AWS and Heroku in this lesson.',
        order_index: 1,
        module_id: 'module_uuid15',
        createdAt: new Date(),
        updatedAt: new Date(),
        deleteAt: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Lessons', null, {});
  },
};
