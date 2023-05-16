const config = require("../../../knexfile");  //trazer as configurações que fizemos no knex
const knex = require("knex")//importa o knex

const connection = knex(config.development) //criar conexão e passa as configurações

module.exports = connection;