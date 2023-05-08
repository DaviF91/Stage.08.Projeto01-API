/**Controller
    * index - GET para listar vários registros.
    * show - GET para exibir um registro especifico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * delete = DELETE para remover um registro.
*/

//adicionado o compare para poder comparar a senha digitada com a senha criptografada
const {hash, compare} = require("bcryptjs");
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
    //add password e old_password
    const {name, email, password, old_password} = request.body;
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

    //criando a validação para a atualização de senha
    if( password && !old_password){
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
    }

    if( password && old_password){
      //comparando a senha com a criptografada
      const checkOldPassword =  await compare(old_password, user.password)

      if(!checkOldPassword){
        throw new AppError("A senha antiga não confere");
      }

      user.password = await hash(password, 8)
    }

    //atualiza na tabela de usuáros e defina os valores
    await database.run(`
    UPDATE users SET
    name = ?, 
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
    [user.name, user.email, user.password, id]
    );

    return response.json();
  }
}

module.exports = UsersController;