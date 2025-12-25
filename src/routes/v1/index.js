const express = require("express");
const router = express.Router();

const librosRoutes = require("./libros.routes");

router.use("/libros", librosRoutes);

module.exports = router;