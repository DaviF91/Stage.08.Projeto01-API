//reunir os grupos de rotas da aplicação

const {Router} = require("express");

const usersRouter = require("./user.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");

const routes = Router()

routes.use("/users", usersRouter) //toda vez que acessarem o /users sera direcionado para o grupo de rotas usersRouter
routes.use("/notes", notesRouter) 
routes.use("/tags", tagsRouter) 

module.exports = routes; //usado sempre para exportar a rota