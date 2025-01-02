const app = require('./index');

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello, Application calling get')
});

app.listen(port, (req, res) => {
    console.log(`Welcome to Web Development on Stackvarsity on ${port}`)
})