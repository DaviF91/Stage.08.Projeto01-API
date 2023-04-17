//importando o sqlite3
const sqlite3 = require("sqlite3"); //driver sqlite3
const sqlite = require("sqlite");// conectar
//biblioteca
const path = require("path");


//função assincrona
async function sqliteConnection(){
  const database = await sqlite.open({
    //passando um objeto com configurações da conexão
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });
  return database;
}

//exportar
module.exports = sqliteConnection;