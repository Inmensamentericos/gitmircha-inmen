import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (

    <div className="pantallaBienvenida">
      <div className="mensajeBienvenida">




        <div className="mensaje1">
          Un Lugar Para Guardar Tus Tareas
        </div>
        <div className="mensaje2">
          Presional el boton para comenzar
        </div>


        <button onClick={() => loginWithRedirect()} type="submit" className="botoningresar">Ingresar</button>





      </div>

      <div className="marcoImagenBienvenida">
        <div className="imagenBienvenida">
          <div>
            <img className="imagendewell" src="https://i.blogs.es/6712c1/david-travis-5byxxawhoqg-unsplash/450_1000.webp" alt="132" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;



