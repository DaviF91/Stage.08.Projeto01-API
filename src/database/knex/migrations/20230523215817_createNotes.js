exports.up = knex =>
  knex.schema.createTable('notes', table => {
    table.increments('id')
    table.text('title')
    table.text('description')
    table.integer('user_id').references('id').inTable('users')// faz uma referencia dentro da tabela do usuario

    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  }) //processo de criar a tabela

exports.down = knex => knex.schema.dropTable('notes')// processo de deletar a tabela
