import './App.css';
import Boton from './componentes/Boton';
import Asapgaming from './imagenes/asapgaming-logo.jpg';
import Contador from './componentes/Contador';
import { useState } from 'react';
function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className='App'>
      <div className='asapgaming-logo-contenedor'>
        <img
          className='asapgaming-logo'
          src={Asapgaming}
          alt='Logo de AsapGaming' />
      </div>
      <div className='contenedor-contador'>
        <Contador numClics= { numClics } />
        <Boton 
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>);
}

export default App;
