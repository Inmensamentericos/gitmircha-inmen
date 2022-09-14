import React, { useEffect } from "react";
import "../styles/estilo.css";
import { useAuth0 } from "@auth0/auth0-react";
import ListaDeTareas from "./ListaDeTareas";


export default function Formulario(props) {


    const { user } = useAuth0();
    const { logout } = useAuth0();
    console.log(logout);

    // useEffect(() => {
    //     async function buscaTodasLasTareasGuardadas2() {     
    //         const parametros = {
    //           method: "GET",
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         }
    //         const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
    //         const datos = await respuestaServidor.json();
    //         const listadetareas = [];
      
    //         let usuarioActual = await datos.filter(function(datos) {
    //           return datos.email ==  user.name;
    //         })
        
            
    //          await usuarioActual.map((tarea) => {
    //           const listadoActualizado = {
    //             id: tarea._id,
    //             name: tarea.descripcion,
    //             pendiente: tarea.pendiente
    //           }
    //           listadetareas.push(listadoActualizado);
    //         })
    //         props.todasTareas2(listadetareas);
          
    //     }
    //      buscaTodasLasTareasGuardadas2()
    //   }, []);
      
      
    return (
        <>
        
      
        <div id="formulario">

            <div>
                <div id="tituloFormulario"><div>Lista de Tareas</div></div>
                {/* <div> */}


                <div className="usuarioySession">
                    <div className="usuario">Hola, {user.name}</div>
                    <div className="cerrrarSession" onClick={() => logout()}>Cerrar Sessión</div>

                </div>


                {/* </div> */}


                <form onSubmit={event => props.guardarTarea(event)}>
                    <div id="botonFormulario">
                        <input type="text" placeholder="Crea o edite la tarea..." name="nuevaTareaARealizar" id="nuevaTareaARealizar" />
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            </div>

        </div>

<ListaDeTareas



                    todasTareas={props.todasTareas}
                    borraTarea={id => props.borraTarea(id)}
                    // tareasPendientes={(subLink, method) => buscaTodasLasTareas(subLink, method)}
            
                    buscaTareasPendientes={() => props.buscaTareasPendientes()}
            
                    buscaTareasGuardadas={() =>props.buscaTareasGuardadas ()}
            
                    buscaTareasCompletadas={() => props.buscaTareasCompletadas()}
            
                    eliminarTareasCompletadas={() =>props.eliminarTareasCompletadas ()}  
/>


      </>
      )
}