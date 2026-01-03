const mysql = require("mysql2");

const coneccion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "libreriabackapi",
});
coneccion.connect((err) => {
  if (err) {
    console.error("Error de conexion a la base de datos: ", err);
    return;
  }

  console.log("Conexion  db exitosa");
});

module.exports = coneccion;
