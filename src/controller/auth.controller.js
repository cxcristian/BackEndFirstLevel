const Usuario = require("../models/usuarios.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//registro de un usuario

exports.registroUsuario = (req, res) => {
  const { nombre, email, password, rol } = req.body;
  if (!nombre || !email || !password || !rol) {
    return res.status(400).json({ error: "Datos incompletos" });
  }
  const passwordHash = bcrypt.hashSync(password, 10);

  Usuario.crearUsuario(
    { nombre, email, password: passwordHash, rol },
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        mensaje: "Usuario registrado exitosamente :D",
        usuario: { nombre, email },
      });
    }
  );
};

exports.loginUsuario = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Datos Incompletos" });
  }

  Usuario.buscarEmail(email, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const usuario = result[0];
    const validado = bcrypt.compareSync(password, usuario.password);

    if (!validado) {
      return res.status(401).json({ error: "Credenciales invalidas" });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      mensaje: "Login exitoso :D",
      token: token,
    });
  });
};
