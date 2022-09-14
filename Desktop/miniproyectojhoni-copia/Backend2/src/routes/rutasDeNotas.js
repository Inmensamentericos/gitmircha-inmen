import { Router } from "express";
import {nuevaNota} from "../controllers/controladorDeNotas.js";
import {obtenerTodasLasNotasPendiente} from "../controllers/controladorDeNotas.js";
import {obtenerTodasLasNotasRealizadas} from "../controllers/controladorDeNotas.js";
import {obtenerTodasLasNotas} from "../controllers/controladorDeNotas.js";
import {actualizarNota} from "../controllers/controladorDeNotas.js";
import {marcaNotaRealizada} from "../controllers/controladorDeNotas.js";
import {eliminarNota} from "../controllers/controladorDeNotas.js";
import {eliminarTodasLasNotasRealizadas} from "../controllers/controladorDeNotas.js";
//import {verificacionDeToken}  from "../middlewares/verificacionDeToken.js";


const rutas = Router();









rutas.post("/",                      /*verificacionDeToken,*/ nuevaNota);
rutas.get("/pendientes",             /*verificacionDeToken,*/ obtenerTodasLasNotasPendiente);
rutas.get("/realizadas",             /*verificacionDeToken,*/ obtenerTodasLasNotasRealizadas);
rutas.get("/",                       /*verificacionDeToken,*/ obtenerTodasLasNotas);
rutas.put("/:Id",                    /*verificacionDeToken,*/ actualizarNota);
rutas.put("/marcarrealizada/:Id",   /*verificacionDeToken,*/ marcaNotaRealizada);
rutas.delete("/:Id",                /* verificacionDeToken,*/ eliminarNota);
rutas.delete("/eliminar/realizadas", /*verificacionDeToken,*/ eliminarTodasLasNotasRealizadas);


export default rutas;