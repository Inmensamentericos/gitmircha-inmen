import express from "express";
import morgan from "morgan";
import "./database.js"
import rutasdeautentificacion from "./src/routes/rutasDeAutentificacion.js";
import rutasdenotas from "./src/routes/rutasDeNotas.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/notas", rutasdenotas);
app.use("/autorizacion", rutasdeautentificacion);

app.listen(4000);
console.log("Servidor corriendo en Puerto 😎", 4000);