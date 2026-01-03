console.log("Api Libreria funcionando");

//configuracion del servidor de express
const express = require("express");
const app = express();
const { port } = require('./config/env');
//inicio de la primera ruta


//Configuaracion simulada de la base de datos

require('./config/db')

// Middleware para parsear JSON
// Cargar variables de entorno
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.send("Bienvenido a la API de la Libreria");
})

app.listen(port, ()=>{
   console.log(" Servidor escuchando - puerto "+ port)
})

//rutas
app.use("/api",require("./routes"));

