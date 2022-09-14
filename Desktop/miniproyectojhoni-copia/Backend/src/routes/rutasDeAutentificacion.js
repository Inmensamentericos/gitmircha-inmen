import { Router } from "express";
import {registrarse} from "../controllers/controladorAutentificacion.js";
import {iniciarSession} from "../controllers/controladorAutentificacion.js";
import {emailRepetido} from "../middlewares/emailRepetido.js";

const rutas = Router();

rutas.post("/registrarse", emailRepetido, registrarse)
rutas.post("/iniciarSession", iniciarSession)


export default rutas;