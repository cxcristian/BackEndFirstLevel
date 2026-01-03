const express = require("express");
const router = express.Router();
const controller = require("../../controller/libros.controller");

//middlewares
const { verificarToken } = require("../../middleware/auth.middleware");
const { esAdmin } = require("../../middleware/rol.middleware");

//simulaicion de metodos http
router.get("/", verificarToken, controller.obtenerTodosLibros);
router.get("/:id", verificarToken, controller.obtenerLibros);
router.post("/", verificarToken, esAdmin, controller.crearLibro);
router.put("/:id", verificarToken, esAdmin, controller.editarLibro);
router.delete("/:id", verificarToken, esAdmin, controller.eliminarLibro);
module.exports = router;
