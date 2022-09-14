import jsonWebToken from "jsonwebtoken";
import palabraClave from "../../palabraClave.js";
import usuario from "../models/Usuarios.js";


export const registrarse = async (req, res) => {
    const { nombre, email, password } = req.body;
    const nuevoUsuario = new usuario({
        nombre,
        email,
        password: await usuario.encryptPassword(password)
    })
    await nuevoUsuario.save()
    res.json("Usuario Creado 😎")
}

export const iniciarSession = async (req, res) =>{
    const usuarioEncontrado = await usuario.findOne({email:req.body.email});
    if(!usuarioEncontrado) return res.json("usuario no encontrado 😥")
    const comparandoContrasenas = await usuario.comparePassword(req.body.password, usuarioEncontrado.password)
    if(!comparandoContrasenas) return res.json("Contrasena invalida 😣")
    const token = jsonWebToken.sign({id: usuarioEncontrado._id}, palabraClave.SECRET, {expiresIn: 86400})   
    res.json({token})

}
