import Usuario from "../models/Usuarios.js";


export const emailRepetido = async (req, res, next) => {

    const email = await Usuario.findOne({ email: req.body.email });    
    if (email)
    return res.json({ message: "No se puede crear el usuario, el e-mail, ya existe." });
    next();

};






