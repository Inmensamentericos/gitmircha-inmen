import Nota from "../models/Notas.js"
// import usuario from "../models/Usuarios.js";
// import jsonWebToken from "jsonwebtoken";
// import palabraClave from "../../palabraClave.js";
import Notas from "../models/Notas.js";

export const nuevaNota = async (req, res)=>{

    const {descripcion, email} = req.body;
    const crearNotaNueva = new Nota({descripcion, email});
         
    // const token = req.headers["token-de-acceso"];    
    // const obtenerEmailDesdeHeaders = jsonWebToken.verify(token, palabraClave.SECRET);
    // req.userEmail = obtenerEmailDesdeHeaders.id;
    // const user = await usuario.findById(req.userEmail);    
    // const email = user.email
    // console.log(email);   
    
    // crearNotaNueva.email = email
    const guardada = await crearNotaNueva.save()

    console.log(guardada)
    res.json(guardada)
}

export const obtenerTodasLasNotas = async (req, res)=>{

    // const token = req.headers["token-de-acceso"];   

    // // const obtenerEmailDesdeHeaders = jsonWebToken.verify(token, palabraClave.SECRET);
    // // req.userEmail = obtenerEmailDesdeHeaders.id;
    // // const user = await usuario.findById(req.userEmail);    
    // // const email = user.email
    // // console.log(email);    

    const TodasLasNotasPorEmail = await Nota.find(/*{ email: email }*/);    
    res.json(TodasLasNotasPorEmail);
}

export const obtenerTodasLasNotasPendiente = async (req, res)=>{

    // const token = req.headers["token-de-acceso"];   

    // const obtenerEmailDesdeHeaders = jsonWebToken.verify(token, palabraClave.SECRET);
    // req.userEmail = obtenerEmailDesdeHeaders.id;
    // const user = await usuario.findById(req.userEmail);    
    // const email = user.email
    // console.log(email);    

    const TodasLasNotasPorEmail = await Nota.find({ /*email: email , */pendiente: true});    
    res.json(TodasLasNotasPorEmail);
}
export const obtenerTodasLasNotasRealizadas = async (req, res)=>{

    // const token = req.headers["token-de-acceso"];   

    // const obtenerEmailDesdeHeaders = jsonWebToken.verify(token, palabraClave.SECRET);
    // req.userEmail = obtenerEmailDesdeHeaders.id;
    // const user = await usuario.findById(req.userEmail);    
    // const email = user.email
    // console.log(email);    

    const TodasLasNotasPorEmail = await Nota.find({ /*email: email , */pendiente: false});    
    res.json(TodasLasNotasPorEmail);
}

export const actualizarNota = async (req, res)=>{
   const buscaNotas = await Nota.findByIdAndUpdate(req.params.Id, req.body)
    res.json(buscaNotas)
}
export const marcaNotaRealizada = async (req, res)=>{
   const buscaNotas = await Nota.findByIdAndUpdate(req.params.Id, { pendiente: false})
    res.json(buscaNotas)
}
export const eliminarNota = async (req, res)=>{
    await Nota.findByIdAndDelete(req.params.Id)  
res.json()
}


export const eliminarTodasLasNotasRealizadas = async (req, res)=>{

    // const token = req.headers["token-de-acceso"];   

    // const obtenerEmailDesdeHeaders = jsonWebToken.verify(token, palabraClave.SECRET);
    // req.userEmail = obtenerEmailDesdeHeaders.id;
    // const user = await usuario.findById(req.userEmail);    
    // const email = user.email
    // console.log(email);    

    const TodasLasNotasPorEmail = await Notas.find({ /*email: email , */ pendiente: false});    
    TodasLasNotasPorEmail.map(async (nota) => { await Notas.findByIdAndDelete(nota._id) });
    res.json(TodasLasNotasPorEmail)

}

