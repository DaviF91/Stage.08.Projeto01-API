/**Controller
    * index - GET para listar vários registros.
    * show - GET para exibir um registro especifico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * delete = DELETE para remover um registro.
*/
const {hash} = require("bcryptjs");
const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');

class UsersController {
  //create users
  async create(request, response){
    const {name, email, password} = request.body;
    const database = await sqliteConnection();
    //checando se o usuário existe
    const checkUserExists = await database.get("SELECT * FROM users WHERE email= (?)", [email])

    if(checkUserExists) {
      throw new AppError("Este email já esta em uso")

  }

  //senha criptografada
  const hashedPassword = await hash(password, 8);

  //INSERE NA TABELA DE USUÁRIO
  await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  return response.status(201).json();

  }

  //update users
  async update(request,response){
    const {name, email} = request.body;
    const {id} = request.params;

    const database = await  sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if(!user){
      throw new AppError("Usuário não encontrado");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
      throw new AppError("Este email já está em uso");
    }

    user.name = name;
    user.email = email;

    //atualiza na tabela de usuáros e defina os valores
    await database.run(`
    UPDATE users SET
    name = ?, 
    email = ?,
    updated_at = ?
    WHERE id = ?`,
    [user.name, user.email, new Date(), id]
    );

    return response.json();
  }
}

module.exports = UsersController;