
import './App.css';
import Header from './views/Header'
import ContentInitial from './views/ContentInitial'
import Plataform from './views/Plataform';
import { useState } from 'react';

function App() {
  const [tipoModal, settipoModal] = useState("")
  return (
    <div className="App">
      <Header />
      <main>
        <ContentInitial settipoModal={settipoModal}/>
        <Plataform tipoModal={tipoModal} settipoModal={settipoModal} />
      </main>
    </div>
  );
}

export default App;
