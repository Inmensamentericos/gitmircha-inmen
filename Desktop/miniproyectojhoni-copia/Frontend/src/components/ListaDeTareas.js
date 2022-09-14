import React from 'react'
import "../styles/estilo.css";
import Botones from './Botones';

import Tarea from './Tarea';


function ListaDeTareas(props) {


    return (
        <div id="tareas">
            <div id="listaDeTodasTareas">

                {
                    props.todasTareas.map(tarea =>
                        <Tarea
                            name={tarea.name}
                            id={tarea.id}
                            email={tarea.email}
                            borraTarea={id => props.borraTarea(id)} 
                            completed={tarea.pendiente} 
                            editar = {props.editartarea}
                            buscatareaspendientes ={props.buscaTareasPendientes}

                           />
                    )
                }
            </div>

            <Botones
            borraTarea={id => props.borrarPorId(id)}

            // tareasPendientes={(subLink, method) => props.tareasPendientes(subLink, method)}

            buscaTareasPendientes={() => props.buscaTareasPendientes()}

            buscaTareasGuardadas={() => props.buscaTareasGuardadas()}

            buscaTareasCompletadas={() => props.buscaTareasCompletadas()}

            eliminarTareasCompletadas={() => props.eliminarTareasCompletadas()}
                    

            


            />

        </div>
    )
}
export default ListaDeTareas







// import React from 'react'
// import "../styles/estilo.css";

// import Tarea from './Tarea';


// function ListaDeTareas(props) {

//     function actualizaInterfaz(subLink, method, botonInferior) {
//         props.tareasPendientes(subLink, method);
//         props.tareasActuales(botonInferior)
//     }


//     return (
//         <div id="tareas">
//             <div id="listaDeTodasTareas">

//                 {
//                     props.todasTareas.map(tarea =>
//                         <Tarea
//                             name={tarea.name}
//                             id={tarea.id}
//                             borraTarea={id => props.borraTarea(id)} completed={tarea.completed} />
//                     )
//                 }

//             </div>
//             <div id="botonesInferiorFiltros">
//                 {
//                     <div className="conteoDeTareas"> item(s) left</div>
//                 }
//                 <div>
//                     <div className="botonFiltro" onClick={() => actualizaInterfaz("", "GET", "All")} >All</div>
//                     <div className="botonFiltro" onClick={() => actualizaInterfaz("active", "GET", "Active")} >Active</div>
//                     <div className="botonFiltro" onClick={() => actualizaInterfaz("completed", "GET", "Completed")} >Completed</div>
//                 </div>
//                 <div className="conteoDeTareas" onClick={() => actualizaInterfaz("clearAllCompleted", "DELETE", "Clear-Completed")}>Clear Completed</div>
//             </div> 

             

//         </div>
//     )
// }
// export default ListaDeTareas