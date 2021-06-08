const express = require('express');
const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);

// server.use('*', (req, res) => {
// 	res.status(404).send(`<p>Oops! Can't find that!</p>`);
// });

server.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		custom: 'Strange things are afoot at the Circle K',
		message: err.message,
		stack: err.stack
	});
});

module.exports = server;
