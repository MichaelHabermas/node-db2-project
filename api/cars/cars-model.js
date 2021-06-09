const db = require('../../data/db-config');

const getAll = () => {
	return db('cars');
};

const getById = id => {
	return db('cars').where({ id }, id).first();
};

const getByVin = vin => {
	return db('cars').where({ vin }, vin).first();
};

async function create({ vin, make, model, mileage, title, transmission }) {
	const [id] = await db('cars').insert({ vin, make, model, mileage, title, transmission });
	return getById(id);
}

module.exports = {
	getAll,
	getById,
	create,
	getByVin
};
