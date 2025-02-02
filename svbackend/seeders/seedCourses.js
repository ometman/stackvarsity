'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Fetch the ID for the 'Instructor' role from 'admin_roles' table
      const instructorRoleId = await queryInterface.sequelize.query(
        `SELECT id FROM "admin_roles" WHERE role_name = 'Instructor'`,
        { type: Sequelize.QueryTypes.SELECT }
      );

      if (instructorRoleId.length > 0) {
        // Fetch the first admin with the 'Instructor' role
        const instructorAdmins = await queryInterface.sequelize.query(
          `SELECT id FROM "admins" WHERE role_id = :role_id LIMIT 1`,
          {
            replacements: { role_id: instructorRoleId[0].id },
            type: Sequelize.QueryTypes.SELECT,
          }
        );

        if (instructorAdmins.length > 0) {
          const instructorId = instructorAdmins[0].id;

          // Insert courses with the correct 'instructor_id'
          await queryInterface.bulkInsert('courses', [
            {
              id: uuidv4(),
              title: 'Frontend Developer',
              description: 'Learn the fundamentals of web development, including HTML5, CSS3, and JavaScript, to build modern and responsive web pages.',
              category: 'Web Development',
              level: 'Beginner',
              duration: '6 weeks',
              price: 99.99,
              image_url: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1740&auto=format&fit=crop',
              is_published: true,
              instructor_id: instructorId,
              created_at: new Date(),
              updated_at: new Date(),
              deleted_at: null,
            },
            {
              id: uuidv4(),
              title: 'Advanced Front-End Developer',
              description: 'Master front-end technologies with React, Vue.js, and modern CSS frameworks to create dynamic and interactive web applications.',
              category: 'Web Development',
              level: 'Advanced',
              duration: '8 weeks',
              price: 149.99,
              image_url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=640',
              is_published: true,
              instructor_id: instructorId,
              created_at: new Date(),
              updated_at: new Date(),
              deleted_at: null,
            },
            {
              id: uuidv4(),
              title: 'Back-End Developer',
              description: 'Focus on server-side programming with Node.js, Express, Django, and Flask to build robust back-end applications.',
              category: 'Web Development',
              level: 'Intermediate',
              duration: '10 weeks',
              price: 139.99,
              image_url: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop',
              is_published: true,
              instructor_id: instructorId,
              created_at: new Date(),
              updated_at: new Date(),
              deleted_at: null,
            },
            {
              id: uuidv4(),
              title: 'Advanced Back-End Developer',
              description: 'Master advanced back-end frameworks and architectures for scalable applications.',
              category: 'Web Development',
              level: 'Advanced',
              duration: '10 weeks',
              price: 179.99,
              image_url: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop',
              is_published: true,
              instructor_id: instructorId,
              created_at: new Date(),
              updated_at: new Date(),
              deleted_at: null,
            },
            {
              id: uuidv4(),
              title: 'Full-Stack Developer',
              description: 'Learn end-to-end application development with MERN and MEAN stacks, integrating front-end and back-end technologies.',
              category: 'Web Development',
              level: 'Intermediate',
              duration: '12 weeks',
              price: 199.99,
              image_url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=640',
              is_published: true,
              instructor_id: instructorId,
              created_at: new Date(),
              updated_at: new Date(),
              deleted_at: null,
            },
            {
              id: uuidv4(),
              title: 'Cloud-Optimized Developer',
              description: 'Learn to build scalable and serverless applications using Next.js, Firebase, and AWS Lambda for cloud deployment.',
              category: 'Cloud Computing',
              level: 'Intermediate',
              duration: '10 weeks',
              price: 179.99,
              image_url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1740&auto=format&fit=crop',
              is_published: true,
              instructor_id: instructorId,
              created_at: new Date(),
              updated_at: new Date(),
              deleted_at: null,
            },
          ]);
        } else {
          console.log('No instructor admin found.');
        }
      } else {
        console.log('Instructor role not found.');
      }
    } catch (error) {
      console.error('Error inserting courses:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      // Remove seeded courses
      await queryInterface.bulkDelete('courses', null, {});
    } catch (error) {
      console.error('Error removing courses:', error);
    }
  },
};
