import React from 'react'

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <button 
    //asignamos clase: si esBotonDeClic es verdadero entonces asigno la clase boton-clic de lo contrario se le asignará la clase boton-reiniciar
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      // Agregamos un event listener
      onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton