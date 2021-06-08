exports.up = function (knex) {
	return knex.schema.createTable('cars', table => {
		table.increments('id');
		table.string('vin', 128).unique().notNullable();
		table.string('make', 128).notNullable();
		table.string('model', 128).notNullable();
		table.float('mileage').notNullable();
		table.string('title', 128);
		table.string('transmission', 128);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('cars');
};
