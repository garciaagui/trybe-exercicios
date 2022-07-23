import React from 'react';
import './App.css';
import pokemons from './data'
import Pokedex from './components/Pokedex'

class App extends React.Component {
  render() {
    return (
      <main>
        <h1 className='main-title'>POKEDEX</h1>
        <Pokedex pokemons={ pokemons }/>
      </main>
    )
  }
}

export default App;
