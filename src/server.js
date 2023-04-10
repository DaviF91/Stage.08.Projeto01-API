require("express-async-errors"); //importando biblioteca express-async-errors

const AppError = require('./utils/AppError'); // importa AppError
const express = require("express"); // importa o express

const routes = require("./routes");

const app = express(); // inicializa o express
app.use(express.json()); //definindo o padrão para receber as informações no corpo da requisição (post - insomnia)

app.use(routes);

//erro = capturar errro da requisição
// response = devolver a resposta com o tipo de erro
// next = caso queira avançar para uma proxima etapa
app.use((error, request, response, next)=>{
  // erro do lado cliente
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }
  console.error(error);

  //erro do lado servidor
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });

});

const PORT = 3333; // criou uma constante definindo o número da porta que a API vai ficar observando, esperando requisições e também devolver as respostas
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // quando iniciar vai enviar essa mensagem

