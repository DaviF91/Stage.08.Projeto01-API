exports.up = knex =>
  knex.schema.createTable('tags', table => {
    table.increments('id');
    table.text('name').notNullable();

    table.integer('note_id').references('id').inTable('notes').onDelete("CASCADE");// faz uma referencia dentro da tabela de nota 
    //(.onDelete("CASCATE") -> SIGNIFICA SE DELETAR A NOTA QUE A TAG ESTA VINCULADA AUTOMATICAMENTE ELE DELETA A TAG)
    table.integer('user_id').references('id').inTable('users');// faz uma referencia dentro da tabela do usuario

  
  }) //processo de criar a tabela

exports.down = knex => knex.schema.dropTable('tags');// processo de deletar a tabela
