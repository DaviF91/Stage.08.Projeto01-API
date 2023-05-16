const path = require('path'); //importa o path para resolver o endereço

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db" ) //local onde esta o banco de dados
    },
    useNullAsDefault: true // propriedade padrão sqlite
  },
};
