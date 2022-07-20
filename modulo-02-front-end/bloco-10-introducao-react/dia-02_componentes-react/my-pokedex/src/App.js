import React from 'react';
import Pokedex from './Components/Pokedex'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1 className='main-title'>POKEDEX</h1>
        <Pokedex/>
      </main>
    )
  }
}

export default App;
