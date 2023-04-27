//rotas do usuário
const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

//instancia
const usersController = new UsersController;


userRoutes.post("/", usersController.create);
userRoutes.put("/:id", usersController.update);

module.exports = userRoutes //exportanto o arquivo para quem quiser utilizar