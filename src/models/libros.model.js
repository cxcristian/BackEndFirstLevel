const db = require("../config/db")

//metodo para obtenr todos los libros

const obtenerTodosLibros= (callbak)=>{
    db.query("SELECT * FROM libros", callbak)
}
// metodo para obtener libro por id

const obtenerLibros = (id, callbak)=>{
    db.query("SELECT * FROM libros WHERE id=?", id, callbak)
}
//crear libro
const crearLibro = (datos, callbak)=>{
    db.query("INSERT INTO libros SET ?",datos, callbak)
}

// actualizar

const editarLibro =(id, datos, callbak)=>{
    db.query("UPDATE libros SET ? WHERE id=?", [datos,id], callbak)
}
//eliminar
const eliminarLibro = (id, callbak)=>{
    db.query("DELETE FROM libros WHERE id=?", id, callbak)
}
module.exports = {
    obtenerTodosLibros,
    obtenerLibros,
    crearLibro,
    editarLibro,
    eliminarLibro
}