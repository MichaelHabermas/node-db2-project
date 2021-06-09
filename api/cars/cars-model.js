const db = require('../../data/db-config');

const getAll = () => {
	return db('cars');
};

const getById = id => {
	return db('cars').where({ id }, id).first();
};

async function create(newCar) {
	const [id] = await db('cars').insert(newCar);
	return getById(id);
}

module.exports = {
	getAll,
	getById,
	create
};
