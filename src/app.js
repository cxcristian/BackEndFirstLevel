console.log("Api Libreria funcionando");

//configuracion del servidor de express
const express = require("express");
const app = express();
const { port } = require('./config/env');
//inicio de la primera ruta


app.get("/", (req,res)=>{
    res.send("Bienvenido a la API de la Libreria");
})

app.listen(port, ()=>{
   console.log(" Servidor escuchando - puerto "+ port)
})