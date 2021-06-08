const router = require('express').Router();
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');

const Cars = require('./cars-model');

router.get('/', (req, res, next) => {
	Cars.getAll()
		.then(cars => {
			res.json(cars);
		})
		.catch(next);
});

router.get('/:id', checkCarId, (req, res, next) => {
	Cars.getById(req.params.id)
		.then(car => {
			res.status(200).json(car);
		})
		.catch(next);
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
	Cars.create(req.body)
		.then(newCar => {
			res.status(200).json(newCar);
		})
		.catch(next);
});

module.exports = router;
