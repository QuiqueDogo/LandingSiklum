
import './App.css';
import Header from './views/Header'
import ContentInitial from './views/ContentInitial'
import Plataform from './views/Plataform';
import { useState } from 'react';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element:<Landing />},
  {path: "/Prueba",element: <div>Hello world!</div>,},
]);

function Landing () {
  const [tipoModal, settipoModal] = useState("")
  return(
    <div className="App">
      <Header />
      <main>
        <ContentInitial settipoModal={settipoModal}/>
        <Plataform tipoModal={tipoModal} settipoModal={settipoModal} />
      </main>
    </div>
  )
}


function App() {
  return (
    <RouterProvider router={router} />
   
  );
}

export default App;
