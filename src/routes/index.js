const express = require("express");
const router = express.Router();

const v1Routes = require("./v1");
router.get("/",(req, res) =>{
    res.json({
        message: "api libreria v1",
        endpoints: {
            libros: "/api/v1/libros"
        }
    })
})
router.use("/v1", v1Routes);
module.exports = router;