//rotas do usuário
const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();

//instancia
const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes; //exportanto o arquivo para quem quiser utilizar