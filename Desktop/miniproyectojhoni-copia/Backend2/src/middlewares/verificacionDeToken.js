import jsonWebToken from "jsonwebtoken";
import palabraClave from "../../palabraClave.js";
import Usuario from "../models/Usuarios.js";

export const verificacionDeToken = async (req, res, next) =>{
    try {
    const token = req.headers["token-de-acceso"];
    if(!token) return res.json({message: "Se necesita un token, para acceder"})
    const decoded = jsonWebToken.verify(token, palabraClave.SECRET);
    req.userId = decoded.id;
    const user = await Usuario.findById(req.userId);
    if(!user) return res.json({message: "usuario no encontrado"})
 
    next();

    } catch (error) {
    return res.json({message: "No autorizado 😣"})
    }

}
