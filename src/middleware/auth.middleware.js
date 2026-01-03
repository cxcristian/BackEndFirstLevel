const jwt = require("jsonwebtoken");

exports.verificarToken =(req, res, next)=>{
    const header = req.headers["authorization"]

    if(!header) return res.status(403).json({error: "El token es requerido"})
    const token = header.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err) return res.status(401).json({error: "token invalido"})
            req.usuario = decoded;
        next();
    })
}