import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from './components/Formulario';
import { useState, useEffect } from 'react';
import ListaDeTareas from './components/ListaDeTareas';
import Login from './components/Login';
import { useAuth0 } from "@auth0/auth0-react";
// import EditarTarea from './components/EditarTarea';
// import {BrowserRouter,Routes, Route} from "react-router-dom";
// import {IdModificaNota} from './components/Tarea';


// import IdModificaNota from './components/Tarea';



function App() {
const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
//  
// const casa = () => buscaTodasLasTareasGuardadas()
  const [listadetareas, setListadetareas] = useState([]);
  // const [tareasActuales, settareasActuales] = useState(()=>buscaTodasLasTareasPendientes());
  const [actualiza, setActualiza] = useState(false);

// const [id, setId] = useState("");


  function buscaTodasLasTareasGuardadas2() {     
      const parametros = {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      };
      fetch("http://localhost:4000/notas/", parametros)
      .then((respuestaServidor)=>{
        return respuestaServidor.json();
      })
      .then((datos)=>{
     
      const listadetareas = [];

      let usuarioActual =  datos.filter(function(datos) {
        return datos.email == user.name;
      })  
      
        usuarioActual.map((tarea) => {
        const listadoActualizado = {
          id: tarea._id,
          name: tarea.descripcion,
          pendiente: tarea.pendiente
        }
        listadetareas.push(listadoActualizado);
      })
       setListadetareas(listadetareas);
       
      });
      
  }

useEffect(  ()  => {
if(user){
  buscaTodasLasTareasGuardadas2();
}   

}, [user]);









      async function buscaTodasLasTareasPendientes() {
        const parametros = {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const respuestaServidor = await fetch("http://localhost:4000/notas/pendientes", parametros);
        const datos = await respuestaServidor.json();
        const listadetareas = [];

        let usuarioActual = datos.filter(function(datos) {
          return datos.email == user.name;
        })

        usuarioActual.map((tarea) => {
          const listadoActualizado = {
            id: tarea._id,
            name: tarea.descripcion,
            pendiente: tarea.pendiente
          }
          listadetareas.push(listadoActualizado);
        })
        setListadetareas(listadetareas);
      }

      async function buscaTodasLasTareasGuardadas() {
        const parametros = {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        }
        
        const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
        const datos = await respuestaServidor.json();
        const listadetareas = [];
        // const TodasLasNotasPorEmail = await datos.find({email: user.name }); 

        let usuarioActual = datos.filter(function(datos) {
          return datos.email == user.name;
        })

        usuarioActual.map((tarea) => {
          const listadoActualizado = {
            id: tarea._id,
          name: [tarea.descripcion /*,".  .", tarea.email*/],
            // email: 
            pendiente: tarea.pendiente
          }
          listadetareas.push(listadoActualizado);
        })
        setListadetareas(listadetareas);
      }

      async function buscaTodasLasTareasCompletadas() {
        const parametros = {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const respuestaServidor = await fetch("http://localhost:4000/notas/realizadas", parametros);
        const datos = await respuestaServidor.json();
        const listadetareas = [];

        let usuarioActual = datos.filter(function(datos) {
          return datos.email == user.name;
        })

        usuarioActual.map((tarea) => {
          const listadoActualizado = {
            id: tarea._id,
            name: tarea.descripcion,
            pendiente: tarea.pendiente
          }
          listadetareas.push(listadoActualizado);
        })
        setListadetareas(listadetareas);
      }

      async function eliminaTodasLasTareasCompletadas() {
        const parametros = {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const respuestaServidor = await fetch("http://localhost:4000/notas/eliminar/realizadas", parametros);
        const datos = await respuestaServidor.json();
        const listadetareas = [];

        let usuarioActual = datos.filter(function(datos) {
          return datos.email == user.name;
        })

        usuarioActual.map((tarea) => {
          const listadoActualizado = {
            id: tarea._id,
            name: tarea.descripcion,
            pendiente: tarea.pendiente
          }
          listadetareas.push(listadoActualizado);
        })
        setListadetareas(listadetareas);
      }

      async function guardarTarea(event) {
        event.preventDefault();
        const nuevaTarea = document.querySelector("#nuevaTareaARealizar").value;
        const parametros = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ descripcion: nuevaTarea, email:user.name})
        }
        const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
        const datos = await respuestaServidor.json();
        setListadetareas([...listadetareas, datos]);
        await buscaTodasLasTareasGuardadas();
      }

      function borrarPorId(id) {
        const listadoActualizado = listadetareas.filter(tarea => tarea.id !== id);
        setListadetareas(listadoActualizado);
      }
      // useEffect(() => buscaTodasLasTareasGuardadas());
      async function editar(e){
       
        const descripcionDeTarea = e.target.previousSibling.previousSibling;
        const idDeTarea = descripcionDeTarea.getAttribute('id');
        console.log(idDeTarea); 
        // setId(idDeTarea);
        



       // console.log(descripcionDeTarea); 
        // id(idDeTarea);
        // console.log(idDeTarea);

    };






    // buscaTodasLasTareasGuardadas()

  return (


    <div className="App">

    {/* <Formulario
      // setNueva={e => setListadetareas(e)}
      guardarTarea={event => guardarTarea(event)}/>,
<ListaDeTareas
      todasTareas={listadetareas}
      borraTarea={id => borrarPorId(id)}
      // tareasPendientes={(subLink, method) => buscaTodasLasTareas(subLink, method)}

      buscaTareasPendientes={() => buscaTodasLasTareasPendientes()}

      buscaTareasGuardadas={() => buscaTodasLasTareasGuardadas()}

      buscaTareasCompletadas={() => buscaTodasLasTareasCompletadas()}

      eliminarTareasCompletadas={() => eliminaTodasLasTareasCompletadas()}        
      editartarea={(e) => editar(e)}   
    // currentTodo={tareasActuales}
    // settareasActuales={() => buscaTodasLasTareasCompletadas()}

    /> */}


{isAuthenticated ? 
            
            // [      
            
            <Formulario
                    // setNueva={e => setListadetareas(e)}
                    guardarTarea={event => guardarTarea(event)}

                    

todasTareas={listadetareas}
todasTareas2 ={(e) => buscaTodasLasTareasPendientes(e)}
                    borraTarea={id => borrarPorId(id)}
                    // tareasPendientes={(subLink, method) => buscaTodasLasTareas(subLink, method)}
            
                    buscaTareasPendientes={() => buscaTodasLasTareasPendientes()}
            
                    buscaTareasGuardadas={() => buscaTodasLasTareasGuardadas()}
            
                    buscaTareasCompletadas={() => buscaTodasLasTareasCompletadas()}
            
                    eliminarTareasCompletadas={() => eliminaTodasLasTareasCompletadas()}        
                    // editartarea={(e) => editar(e)}   
                  // currentTodo={tareasActuales}
                  // settareasActuales={() => buscaTodasLasTareasCompletadas()}
                  />             
                  
                  //  ,  <ListaDeTareas
                    
            
                  // />]
                  : <Login /> } 
                  {/* <Login /> */}
</div>
  );
}

export default App;








// import './App.css';
// //import "bootstrap/dist/css/bootstrap.min.css";
// import Formulario from './components/Formulario';
// import { useState, useEffect } from 'react';
// import ListaDeTareas from './components/ListaDeTareas';
// import Login from './components/Login';
// import { useAuth0 } from "@auth0/auth0-react";
// import EditarTarea from './components/EditarTarea';
// import {BrowserRouter,Routes, Route} from "react-router-dom";
// // import {IdModificaNota} from './components/Tarea';


// // import IdModificaNota from './components/Tarea';


// function App() {
// const { user } = useAuth0();
//   const { isAuthenticated } = useAuth0();

// // const casa = () => buscaTodasLasTareasGuardadas()
//   const [listadetareas, setListadetareas] = useState([]);
//   // const [tareasActuales, settareasActuales] = useState();

// const [id, setId] = useState("");

//       async function buscaTodasLasTareasPendientes() {
//         const parametros = {
//           method: "GET",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/pendientes", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: tarea.descripcion,
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function buscaTodasLasTareasGuardadas() {
//         const parametros = {
//           method: "GET",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];
//         // const TodasLasNotasPorEmail = await datos.find({email: user.name }); 

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: [tarea.descripcion,".  .", tarea.email],
//             // email: 
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function buscaTodasLasTareasCompletadas() {
//         const parametros = {
//           method: "GET",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/realizadas", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: tarea.descripcion,
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function eliminaTodasLasTareasCompletadas() {
//         const parametros = {
//           method: "DELETE",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/eliminar/realizadas", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: tarea.descripcion,
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function guardarTarea(event) {
//         event.preventDefault();
//         const nuevaTarea = document.querySelector("#nuevaTareaARealizar").value;
//         const parametros = {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ descripcion: nuevaTarea, email:user.name})
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
//         const datos = await respuestaServidor.json();
//         setListadetareas([...listadetareas, datos]);
//         await buscaTodasLasTareasGuardadas();
//       }

//       function borrarPorId(id) {
//         const listadoActualizado = listadetareas.filter(tarea => tarea.id !== id);
//         setListadetareas(listadoActualizado);
//       }
//       // useEffect(() => buscaTodasLasTareasGuardadas());

//       useEffect(() => {
//         async function buscaTodasLasTareasGuardadas2() {     
//             const parametros = {
//               method: "GET",
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             }
//             const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
//             const datos = await respuestaServidor.json();
//             const listadetareas = [];

//             let usuarioActual = datos.filter(function(datos) {
//               return datos.email == user.name;
//             })
        
//             usuarioActual.map((tarea) => {
//               const listadoActualizado = {
//                 id: tarea._id,
//                 name: tarea.descripcion,
//                 pendiente: tarea.pendiente
//               }
//               listadetareas.push(listadoActualizado);
//             })
//             setListadetareas(listadetareas);
          
//         }
//         buscaTodasLasTareasGuardadas2()
//       }, []);

//       async function editar(e){
       
//         const descripcionDeTarea = e.target.previousSibling.previousSibling;
//         const idDeTarea = descripcionDeTarea.getAttribute('id');
//         console.log(idDeTarea); 
//         // setId(idDeTarea);
        



//        // console.log(descripcionDeTarea); 
//         // id(idDeTarea);
//         // console.log(idDeTarea);

//     };

    

//   return (


//     <BrowserRouter>
    

//     <div className="App">


//     <Routes>

// <Route path="/"          element = {isAuthenticated ? 
       
//            [<Formulario
//         // setNueva={e => setListadetareas(e)}
//         guardarTarea={event => guardarTarea(event)}/>,
// <ListaDeTareas
//         todasTareas={listadetareas}
//         borraTarea={id => borrarPorId(id)}
//         // tareasPendientes={(subLink, method) => buscaTodasLasTareas(subLink, method)}

//         buscaTareasPendientes={() => buscaTodasLasTareasPendientes()}

//         buscaTareasGuardadas={() => buscaTodasLasTareasGuardadas()}

//         buscaTareasCompletadas={() => buscaTodasLasTareasCompletadas()}

//         eliminarTareasCompletadas={() => eliminaTodasLasTareasCompletadas()}        
//         editartarea={(e) => editar(e)}   
//       // currentTodo={tareasActuales}
//       // settareasActuales={() => buscaTodasLasTareasCompletadas()}

//       />]


//       : <Login /> } /> 

      


      


// <Route path="/modificar"     element = {<EditarTarea editar={setId}/>}/>
 

// </Routes> 



  
      

//     </div>


//     </BrowserRouter>


//   );
// }

// export default App;








// import './App.css';
// //import "bootstrap/dist/css/bootstrap.min.css";
// import Formulario from './components/Formulario';
// import { useState, useEffect } from 'react';
// import ListaDeTareas from './components/ListaDeTareas';
// import Login from './components/Login';
// import { useAuth0 } from "@auth0/auth0-react";

// import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";

// function App() {
// const { user } = useAuth0();
//   const { isAuthenticated } = useAuth0();

// // const casa = () => buscaTodasLasTareasGuardadas()
//   const [listadetareas, setListadetareas] = useState([]);
//   // const [tareasActuales, settareasActuales] = useState();


//       async function buscaTodasLasTareasPendientes() {
//         const parametros = {
//           method: "GET",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/pendientes", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: tarea.descripcion,
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function buscaTodasLasTareasGuardadas() {
//         const parametros = {
//           method: "GET",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];
//         // const TodasLasNotasPorEmail = await datos.find({email: user.name }); 

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: [tarea.descripcion,".  .", tarea.email],
//             // email: 
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function buscaTodasLasTareasCompletadas() {
//         const parametros = {
//           method: "GET",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/realizadas", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: tarea.descripcion,
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function eliminaTodasLasTareasCompletadas() {
//         const parametros = {
//           method: "DELETE",
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/eliminar/realizadas", parametros);
//         const datos = await respuestaServidor.json();
//         const listadetareas = [];

//         let usuarioActual = datos.filter(function(datos) {
//           return datos.email == user.name;
//         })

//         usuarioActual.map((tarea) => {
//           const listadoActualizado = {
//             id: tarea._id,
//             name: tarea.descripcion,
//             pendiente: tarea.pendiente
//           }
//           listadetareas.push(listadoActualizado);
//         })
//         setListadetareas(listadetareas);
//       }

//       async function guardarTarea(event) {
//         event.preventDefault();
//         const nuevaTarea = document.querySelector("#nuevaTareaARealizar").value;
//         const parametros = {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ descripcion: nuevaTarea, email:user.name})
//         }
//         const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
//         const datos = await respuestaServidor.json();
//         setListadetareas([...listadetareas, datos]);
//         await buscaTodasLasTareasGuardadas();
//       }

//       function borrarPorId(id) {
//         const listadoActualizado = listadetareas.filter(tarea => tarea.id !== id);
//         setListadetareas(listadoActualizado);
//       }
//       // useEffect(() => buscaTodasLasTareasGuardadas());

//       useEffect(() => {
//         async function buscaTodasLasTareasGuardadas2() {     
//             const parametros = {
//               method: "GET",
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             }
//             const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
//             const datos = await respuestaServidor.json();
//             const listadetareas = [];

//             let usuarioActual = datos.filter(function(datos) {
//               return datos.email == user.name;
//             })
        
//             usuarioActual.map((tarea) => {
//               const listadoActualizado = {
//                 id: tarea._id,
//                 name: tarea.descripcion,
//                 pendiente: tarea.pendiente
//               }
//               listadetareas.push(listadoActualizado);
//             })
//             setListadetareas(listadetareas);
          
//         }
//         buscaTodasLasTareasGuardadas2()
//       }, []);



//   return (


//     <BrowserRouter>
    

//     <div className="App">






//          {isAuthenticated ? 
            
//       <Formulario
//         // setNueva={e => setListadetareas(e)}
//         guardarTarea={event => guardarTarea(event)}
//       />
//       : <Login /> }
//       <ListaDeTareas
//         todasTareas={listadetareas}
//         borraTarea={id => borrarPorId(id)}
//         // tareasPendientes={(subLink, method) => buscaTodasLasTareas(subLink, method)}

//         buscaTareasPendientes={() => buscaTodasLasTareasPendientes()}

//         buscaTareasGuardadas={() => buscaTodasLasTareasGuardadas()}

//         buscaTareasCompletadas={() => buscaTodasLasTareasCompletadas()}

//         eliminarTareasCompletadas={() => eliminaTodasLasTareasCompletadas()}        

//       // currentTodo={tareasActuales}
//       // settareasActuales={() => buscaTodasLasTareasCompletadas()}

//       />
      

//     </div>


//     </BrowserRouter>


//   );
// }

// export default App;









































// import './App.css';
// //import "bootstrap/dist/css/bootstrap.min.css";
// import Formulario from './components/Formulario';
// import { useState } from 'react';
// import ListaDeTareas from './components/ListaDeTareas';

// function App() {

//   const [listadetareas, setListadetareas] = useState([]);
//   // const [tareasActuales, settareasActuales] = useState("All");

//   async function buscaTodasLasTareas(subLink, method) {
//     const parametros = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//     const respuestaServidor = await fetch("http://localhost:4000/notas/" + subLink, parametros);
//     const datos = await respuestaServidor.json();
//     const listadetareas = [];
//     datos.map((tarea) => {
//       const listadoActualizado = {
//         id: tarea._id,
//         name: tarea.descripcion,
//         pendiente: tarea.pendiente
//       }
//       listadetareas.push(listadoActualizado);
//     })
//     setListadetareas(listadetareas);
//   }
//   // useEffect(() => buscaTodasLasTareas("", "GET"));

//   async function guardarTarea(event) {
//     event.preventDefault();
//     const nuevaTarea = document.querySelector("#nuevaTareaARealizar").value;
//     const parametros = {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ descripcion: nuevaTarea })
//     }
//     const respuestaServidor = await fetch("http://localhost:4000/notas/", parametros);
//     const datos = await respuestaServidor.json();
//     setListadetareas([...listadetareas, datos]);
//   }

//   function borrarPorId(id) {
//     const listadoActualizado = listadetareas.filter(tarea => tarea.id !== id);
//     setListadetareas(listadoActualizado);
//   }


//   return (


//     <div className="App">
//       <Formulario
//         //setNueva={e => setListadetareas(e)}
//         guardarTarea={event => guardarTarea(event)}
//       />
//       <ListaDeTareas
//         todasTareas={listadetareas}
//         borraTarea={id => borrarPorId(id)}
//         tareasPendientes={(subLink, method) => buscaTodasLasTareas(subLink, method)}
//       // currentTodo={tareasActuales}
//       // tareasActuales={e => settareasActuales(e)}

//       />
      

//     </div>
//   );
// }

// export default App;