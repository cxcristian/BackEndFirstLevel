const express = require("express");
const router = express.Router();

const librosRoutes = require("./libros.routes");
router.use("/libros", librosRoutes);

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);


module.exports = router;