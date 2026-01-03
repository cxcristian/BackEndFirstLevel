const express = require("express");
const router = express.Router();
const auth = require("../../controller/auth.controller");

router.post("/registro", auth.registroUsuario);
router.post("/login", auth.loginUsuario);

router.get("/", (req,res)=>{
    res.status(200).json({
        message: "ruta de autenticacion"
    })
})
module.exports = router;
