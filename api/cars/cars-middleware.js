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

const checkCarPayload = (req, res, next) => {};

const checkVinNumberValid = (req, res, next) => {};

const checkVinNumberUnique = (req, res, next) => {};
