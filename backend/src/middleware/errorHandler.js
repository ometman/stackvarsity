// src/middleware/errorHandler.js
const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = { notFoundHandler, errorHandler };
