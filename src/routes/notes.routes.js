//rotas do usuário
const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

//instancia
const notesController = new NotesController;


notesRoutes.post("/:user_id", notesController.create);


module.exports = notesRoutes; //exportanto o arquivo para quem quiser utilizar