/**Controller
    * index - GET para listar vários registros.
    * show - GET para exibir um registro especifico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * delete = DELETE para remover um registro.
*/
const AppError = require('../utils/AppError');

const sqliteConnection = require('../database/sqlite');

class UsersController {
  async create(request, response){
    const {name, email, password} = request.body;
    const database = await sqliteConnection();
    //checando se o usuário existe
    const checkUserExists = await database.get("SELECT * FROM users WHERE email= (?)", [email])

    if(checkUserExists) {
      throw new AppError("Este email já esta em uso")

  }

  return response.status(201).json();

  }

}

module.exports = UsersController;