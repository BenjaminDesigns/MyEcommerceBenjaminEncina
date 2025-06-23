import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import teclado from "./products/teclado.jpg";
import audífonos from "./products/audífonos.jpg";
import mouse from "./products/mouse.jpg";



function App() {

  return (
    <div>
      <NavBar />

      <div className='flex justify-evenly gap-4 mt-16'>
        <ItemListContainer
        title="Teclado RGB"
        imageSrc={teclado}
        price={"90.000"} 
      />
      <ItemListContainer
        title="Audífonos Gamer"
        imageSrc={audífonos}
        price={"45.000"} 
      />
      <ItemListContainer
        title="Mouse Pro"
        imageSrc={mouse}
        price={"25.000"} 
      />
      </div>
      
    </div>
    
  )
}

export default App
