import './App.css';
import logoFreecodecamp from './img/logo-freecodecamp.png';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {
  //definir las funciones del componente boton
  const manejarClic = () =>{
    console.log('clic')
  }

  const reiniciarContador = () =>{
    console.log('reiniciar')
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
        <Contador numClics='5' />
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
