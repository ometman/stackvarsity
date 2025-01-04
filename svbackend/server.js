const app = require('./app');

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log(`Welcome to Web Development on Stackvarsity on ${PORT}`)
})

// Testing REST API
app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to STACKVARSITY: Your Web Development Learning Platform API',
      routes: {
        users: '/api/users',
        courses: '/api/courses',
      },
    });
  });