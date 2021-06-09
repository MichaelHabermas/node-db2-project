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

// router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
//     try{
//         await Cars.create(req.body)
//         res.status(201).json(req.newCar);
//     } catch(err) {
//         next(err)
//     }
// }

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
	Cars.create(req.body)
		.then(thing => {
			res.status(201).json(thing);
		})
		.catch(next);
});

module.exports = router;
