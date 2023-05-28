exports.up = knex =>
  knex.schema.createTable('links', table => {
    table.increments('id');
    table.text('url').notNullable();

    table.integer('note_id').references('id').inTable('notes').onDelete("CASCADE");// faz uma referencia dentro da tabela de nota 
    //(.onDelete("CASCATE") -> SIGNIFICA SE DELETAR A NOTA QUE A TAG ESTA VINCULADA AUTOMATICAMENTE ELE DELETA A TAG)
    table.timestamp('created_at').default(knex.fn.now())
  
  }) //processo de criar a tabela

exports.down = knex => knex.schema.dropTable('links');// processo de deletar a tabela
