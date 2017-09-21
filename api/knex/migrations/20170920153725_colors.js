exports.up = knex => {
  return knex.schema.createTable('colors', table => {
    table.increments();
    table.string('hex').notNullable().unique();
    table.string('color').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('colors');
};

