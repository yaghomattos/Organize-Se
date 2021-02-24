exports.up = function(knex) {
  return knex.schema.createTable('salary', function(table) {
    table.float('salary').notNullable();

    table.float('alimentacao').notNullable();
    table.float('aluguel').notNullable();
    table.float('assinaturas').notNullable();
    table.float('economias').notNullable();
    table.float('educacao').notNullable();
    table.float('lazer').notNullable();
    table.float('transporte').notNullable();   

    table.string('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('salary');
};
