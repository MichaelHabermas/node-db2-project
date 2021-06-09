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
	res.status(200).json(req.car);
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
	// const { vin, make, model, mileage, title = '', transmission = '' } = req.body;
	Cars.create(req.body)
		.then(() => {
			res.status(200).json(req.newCar);
		})
		.catch(next);
});

module.exports = router;
