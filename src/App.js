import { useState } from 'react';
import './App.css';
import logoFreecodecamp from './img/logo-freecodecamp.png';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {
  //en useState() pasamos el valor inicial de numClics
  //con setNumClics vamos a actualizar el numero de clics
  const [numClics, setNumClics] = useState(0)

  //definir las funciones del componente boton
  const manejarClic = () =>{
    setNumClics(numClics+1)
  }

  const reiniciarContador = () =>{
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={logoFreecodecamp}
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
