const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
	Cars.getById(req.params.id)
		.then(car => {
			if (!car) {
				next({
					status: 404,
					message: 'car with id <car id> is not found'
				});
			} else {
				next();
			}
		})
		.catch(next);
};

const checkCarPayload = (req, res, next) => {
	let fieldName = '';
	if (!req.body.make) {
		fieldName = 'make';
		next({
			status: 400,
			message: `${fieldName} is missing`
		});
	} else {
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
	if () {
		next();
	} else {
		next({
			status: 400,
			message: `vin ${req.body.vin} already exists`
		});
	}
};

module.exports = {
	checkCarId,
	checkCarPayload,
	checkVinNumberValid,
	checkVinNumberUnique
};
