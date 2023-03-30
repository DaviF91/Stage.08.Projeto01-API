
const { Router } = require("express");

const userRoutes = Router()
// Query Params - os parametros são opcionais
// estrutura -> http://localhost:3333/users?page=5&limit=10
userRoutes.post("/", (request, response) => {
  const {name, email, password} = request.body;

  // response.send(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password} `);
  response.json({name, email, password}); // respondendo no formato JSON
});

module.exports = userRoutes //exportanto o arquivo para quem quiser utilizar