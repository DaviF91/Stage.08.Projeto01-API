//rotas do usuário
const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

//instancia
const notesController = new NotesController;


notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);


module.exports = notesRoutes; //exportanto o arquivo para quem quiser utilizar