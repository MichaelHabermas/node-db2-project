const Cars = require('./cars-model');

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
	console.log('checkCarPayload: ', checkCarPayload);
};

const checkVinNumberValid = (req, res, next) => {
	console.log('checkVinNumberValid: ', checkVinNumberValid);
};

const checkVinNumberUnique = (req, res, next) => {
	console.log('checkVinNumberUnique: ', checkVinNumberUnique);
};

module.exports = {
	checkCarId,
	checkCarPayload,
	checkVinNumberValid,
	checkVinNumberUnique
};
