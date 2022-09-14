import React from "react";
import "../styles/estilo.css";

export default function Tarea(props) {

    const id = function IdModificaNota(idmodificar) {
        let idparamodificar = "";
        idparamodificar = idmodificar;
        console.log(idparamodificar)
    }

    async function ponerComplada(event) {
        const casillaDeCompletado = event.target;
        let descripcionDeTarea = null;

        if (casillaDeCompletado.classList.contains("marcadorCompletado")) {
            // casillaDeCompletado.style = "color: blue";
            // casillaDeCompletado.cssText = "color:red"
            descripcionDeTarea = casillaDeCompletado.nextSibling;
        } else {
            // casillaDeCompletado.style = "display : block";
            casillaDeCompletado.style = "color: blue";
            descripcionDeTarea = casillaDeCompletado.parentElement.nextSibling;
        }
        const parametros = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const idDeTarea = descripcionDeTarea.getAttribute('id');
        const a = await fetch("http://localhost:4000/notas/marcarrealizada/" + idDeTarea, parametros);
    }

    async function eliminaCompletados(event) {
        const descripcionDeTarea = event.target.previousSibling;

        console.log(event);
        console.log(event.target);
        console.log(event.target.previousSibling);

        const idDeTarea = descripcionDeTarea.getAttribute('id');
        const parametros = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const a = await fetch("http://localhost:4000/notas/" + idDeTarea, parametros);
        props.borraTarea(idDeTarea);
    }


    async function editar(e) {
        e.preventDefault();
        const descripcionDeTarea = e.target.previousSibling.previousSibling;
        const idDeTarea = descripcionDeTarea.getAttribute('id');
        console.log(idDeTarea);
        // const casillaDeCompletado = event.target;
        // let descripcionDeTarea = null;
        const nuevaTarea = document.querySelector("#nuevaTareaARealizar").value;

        // const casillaDeCompletado = event.target;
        // let descripcionDeTarea = null;

        // if (casillaDeCompletado.classList.contains("marcadorCompletado")) {
        //     descripcionDeTarea = casillaDeCompletado.nextSibling;
        // } else {
        //     casillaDeCompletado.style = "display : block";
        //     descripcionDeTarea = casillaDeCompletado.parentElement.nextSibling;
        // }
        const parametros = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ descripcion: nuevaTarea })


        }
        // const idDeTarea = descripcionDeTarea.getAttribute('id');
        const respuestaServidor = await fetch("http://localhost:4000/notas/" + idDeTarea, parametros);
        const datos = await respuestaServidor.json();

        // window.open("http://localhost:3000/", "_self")
        // ()=>{props.buscatareaspendientes()}




    }


    // function editar(e) {
    //     props.editar(e);
    //     // window.open("http://localhost:3000/modificar/","_self");

    // }
    // async function editar(e){

    //     const descripcionDeTarea = e.target.previousSibling.previousSibling;
    //     const idDeTarea = descripcionDeTarea.getAttribute('id');
    //     console.log(idDeTarea); 
    //     // setId(idDeTarea);




    //    // console.log(descripcionDeTarea); 
    //     // id(idDeTarea);
    //     // console.log(idDeTarea);

    // };


    return (
        <div className="tarea">

            <i className="marcadorCompletado"
                onClick={ponerComplada}

                style={!props.completed ? { color: "blue" }
                    : {}}
            >

                {/* <i className="marcaCompletado"> </i> */}



                <div>o</div>

            </i>

            <i className="tareaIndividual" id={props.id}>
                {props.name}</i>
            <i className="deleteTodo" onClick={eliminaCompletados}>X</i>
            <i className="deleteTodo2" onClick={(e) => editar(e)}>Editar</i>


        </div>
    )
}


//asuarez@alaver.com.do