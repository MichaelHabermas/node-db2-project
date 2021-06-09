const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
	Cars.getById(req.params.id)
		.then(car => {
			if (!car) {
				next({
					status: 404,
					message: `car with id ${req.params.id} is not found`
				});
			} else {
				req.car = car;
				next();
			}
		})
		.catch(next);
};

const checkCarPayload = (req, res, next) => {
	const { vin, make, model, mileage, title, transmission } = req.body;
	if (!vin) {
		next({ status: 400, message: 'vin is missing' });
	} else if (!make) {
		next({ status: 400, message: 'make is missing' });
	} else if (!model) {
		next({ status: 400, message: 'model is missing' });
	} else if (!mileage) {
		next({ status: 400, message: 'mileage is missing' });
	} else {
		// req.newCar = {
		// 	vin: vin,
		// 	make: make.trim(),
		// 	model: model.trim(),
		// 	mileage,
		// 	title: title.trim(),
		// 	transmission: transmission.trim()
		// };
		next();
	}
};

const checkVinNumberValid = (req, res, next) => {
	if (vinValidator.validate(req.body.vin)) {
		next();
	} else {
		next({
			status: 400,
			message: `vin ${req.body.vin} is invalid`
		});
	}
};

const checkVinNumberUnique = (req, res, next) => {
	Cars.getByVin(req.body.vin)
		.then(vin => {
			if (vin) {
				next({
					status: 400,
					message: `vin ${req.body.vin} already exists`
				});
			} else {
				next();
			}
		})
		.catch(next);
};

module.exports = {
	checkCarId,
	checkCarPayload,
	checkVinNumberValid,
	checkVinNumberUnique
};
