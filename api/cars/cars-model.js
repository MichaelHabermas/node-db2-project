const db = require('../../data/db-config');

const getAll = () => {
	return db('cars');
};
a;

const getById = id => {
	return db('cars').where({ id }, id).first();
};

const getByVin = vin => {
	return db('cars').where('vin', vin).first();
};

async function create(newCar) {
	const [id] = await db('cars').insert(newCar);
	return getById(id);
}

module.exports = {
	getAll,
	getById,
	create,
	getByVin
};
