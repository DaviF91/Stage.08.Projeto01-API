const express = require("express"); // importa o express

const routes = require("./routes");

const app = express(); // inicializa o express
app.use(express.json()); //definindo o padrão para receber as informações no corpo da requisição (post - insomnia)

app.use(routes);

const PORT = 3333; // criou uma constante definindo o número da porta que a API vai ficar observando, esperando requisições e também devolver as respostas
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // quando iniciar vai enviar essa mensagem

