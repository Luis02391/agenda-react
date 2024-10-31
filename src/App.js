import React from 'react';
import './styles/App.css'
import AgendaApp from './components/AgendaApp';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <h1>Agenda de Contactos</h1>
        <AgendaApp/>
      </header>
    </div>
  );
}

export default App;
