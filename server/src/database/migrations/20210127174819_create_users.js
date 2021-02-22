exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('login').notNullable();
    table.string('password').notNullable();
    /*table.decimal('salario').notNullable();
    table.decimal('gastoA').notNullable();
    table.decimal('gastoB').notNullable();
    table.decimal('gastoC').notNullable();
    table.decimal('gastoD').notNullable();
    table.decimal('gastoE').notNullable();*/
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
