const Libro = require("../models/libros.model");

//get

exports.obtenerTodosLibros = (req, res) => {
  Libro.obtenerTodosLibros((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
//get con parametro id
exports.obtenerLibros = (req, res) => {
  const id = req.params.id;
  Libro.obtenerLibros(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
//_post

exports.crearLibro = (req, res) => {
  // Si nos envian una lista (array) de libros
  if (Array.isArray(req.body)) {
    // Convertimos el array de objetos a un array de arrays para SQL
    const libros = req.body.map((l) => [l.titulo, l.autor, l.categoria, l.año]);

    return Libro.crearLibrosMasivos(libros, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        mensaje: "Libros guardados exitosamente :D",
        cantidad: result.affectedRows,
      });
    });
  }

  const { titulo, autor, categoria, año } = req.body;

  if (!titulo || !autor || !categoria) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }
  Libro.crearLibro(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({
      mensaje: "Libro guardado exitosamente :D",
      libro: req.body,
    });
  });
};
//put

exports.editarLibro = (req, res) => {
  const id = req.params.id;
  Libro.editarLibro(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({
      mensaje: "libro actualizado :D",
      libro: req.body,
    });
  });
};
// delete

exports.eliminarLibro = (req, res) => {
  const id = req.params.id;
  Libro.eliminarLibro(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "libro eliminado :D" });
  });
};
