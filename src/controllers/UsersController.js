/**Controller
    * index - GET para listar vários registros.
    * show - GET para exibir um registro especifico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * delete = DELETE para remover um registro.
*/
const AppError = require('../utils/AppError');

class UsersController {
  create(request, response){
    const {name, email, password} = request.body;

  if(!name){
    throw new AppError('Nome Obrigatorio');
  }
  response.status(201).json({name, email, password}); // respondendo no formato JSON
  }

}

module.exports = UsersController;