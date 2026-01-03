const db = require("../config/db");

const crearUsuario = (datos, callback)=>{
    db.query("INSERT INTO usuarios SET ?", datos, callback)
}

const buscarEmail = (email, callback) => {
    db.query("SELECT * FROM usuarios WHERE email = ?", email, callback);
};


module.exports = { crearUsuario, buscarEmail };
