const app = require('./app');
const sequelize = require('./utils/dbSequel');

const PORT = process.env.port || 5000;

// Testing port listening on Console
app.listen(PORT, async () => {
   await sequelize
    .authenticate()
    .then(() => {
      console.log('Database connection successful - with Sequelize')
    })
    .catch(err => {
      console.error('Unable to connect Database - via Sequel', err)
    });
})


// Testing REST API at root
app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to STACKVARSITY: Your Web Development Learning Platform API',
      routes: {
        users: '/users',
        courses: '/courses',
      },
    });
  });