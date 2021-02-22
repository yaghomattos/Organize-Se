
exports.up = function(knex) {
  return knex.schema.createTable('outlays', function(table) {
    table.increments();
    table.float('value').notNullable();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.string('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('outlays');
};
