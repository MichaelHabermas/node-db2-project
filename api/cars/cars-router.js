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
	Cars.create({
		vin: req.body.vin,
		make: req.body.make.trim(),
		model: req.body.model.trim(),
		mileage: req.body.mileage,
		title: req.body.title.trim(),
		transmission: req.body.transmission.trim()
	})
		.then(thing => {
			res.status(201).json(thing);
		})
		.catch(next);
});

module.exports = router;
