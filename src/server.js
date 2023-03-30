const express = require("express"); // importa o express

const app = express(); // inicializa o express

app.use(express.json()); //definindo o padrão para receber as informações no corpo da requisição (post - insomnia)

// Query Params - os parametros são opcionais
// estrutura -> http://localhost:3333/users?page=5&limit=10
app.post("/users", (request, response) => {
  const {name, email, password} = request.body;

  // response.send(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password} `);
  response.json({name, email, password}); // respondendo no ofrmato JSON
});

const PORT = 3333; // criou uma constante definindo o número da porta que a API vai ficar observando, esperando requisições e também devolver as respostas
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // quando iniciar vai enviar essa mensagem