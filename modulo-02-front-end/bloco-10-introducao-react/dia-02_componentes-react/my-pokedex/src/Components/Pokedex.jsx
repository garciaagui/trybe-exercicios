import React from 'react';
import Pokemon from './Pokemon';
import data from '../data'

class Pokedex extends React.Component {
  render() {
    const pokemonsList = data;
    return (
      <section className='container-pokedex'>
        {pokemonsList.map(pokemon => <Pokemon key={pokemon.id} 
        name={pokemon.name} 
        type={pokemon.type} 
        averageWeight={pokemon.averageWeight}
        image={pokemon.image}
        moreInfo={pokemon.moreInfo}/>)}
      </section>
    )
  }
}

export default Pokedex;
