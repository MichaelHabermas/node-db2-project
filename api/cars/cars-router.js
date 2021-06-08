const router = require('express').Router();
const Cars = require('./cars-model');
const { getAll, getById, create } = require('./cars-middleware');

router.get('/', (req, res, next) => {
	Cars.getAll()
		.then(cars => {
			res.json(cars);
		})
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Cars.getById().then().catch(next);
});

router.post('/', (req, res, next) => {
	Cars.create(req.body)
		.then(newCar => {})
		.catch(next);
});
