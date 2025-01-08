const app = require('./app');
const sequelize = require('./utilities/dbSequel');

const PORT = process.env.port || 5000;

// app.listen(PORT, () => {
//     console.log(`Welcome to Web Development on Stackvarsity on ${PORT}`)
// })

app.listen(PORT, async () => {
   await sequelize
    .authenticate()
    .then(() => {
      console.log('Database connection successful - Sequelize')
    })
    .catch(err => {
      console.error('Unable to connect Database - via Sequel', err)
    });
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