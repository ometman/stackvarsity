const { application } = require('express');
const app = require('./app');

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Testing Root
app.get('/', (req, res) => {
  res.send('Welcome to STACKVARSITY: Your Web Development Learning Platform');
});


// Testing REST API
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Welcome to STACKVARSITY: Your Web Development Learning Platform API',
//     routes: {
//       users: '/api/users',
//       courses: '/api/courses',
//     },
//   });
// });

