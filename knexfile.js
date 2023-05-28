const path = require('path'); //importa o path para resolver o endereço

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db" ) //local onde esta o banco de dados
    },
    pool:{
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb) //ablitar a funcionalidade de quando deletar uma nota ele deletar em cascata as tags
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true // propriedade padrão sqlite
  },
};
