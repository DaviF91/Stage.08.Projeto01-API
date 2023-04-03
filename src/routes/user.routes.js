//rotas do usuário
const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router()

//instancia
const usersController = new UsersController


userRoutes.post("/", usersController.create)

module.exports = userRoutes //exportanto o arquivo para quem quiser utilizar