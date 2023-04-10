//AppError.js = Padronizar quando tiver algum tipo de excessão

class AppError{
  message;
  statusCode;

  constructor(message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;