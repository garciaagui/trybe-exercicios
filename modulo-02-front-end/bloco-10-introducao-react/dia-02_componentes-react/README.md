# &#9889; Atividades de Fixação & Exercícios | Bloco 10 - Dia 02

- As Atividades de Fixação foram realizadas a partir da aplicação "fixation-exercises-10-2", criada utilizando o comando `npm create-react-app`.

## &#9989; Atividade de Fixação 01 - Props
- Crie um arquivo `Image.js` no diretório `src` do projeto e copie o código abaixo. Uma vez feito isso tudo, responda:
```
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
```
1. Qual o nome do componente declarado acima?
- Resposta: Image.
2. Chame o componente `Image` dentro do componente `App`, de forma que seja mostrada [esta imagem](https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg), ou o texto "Cute cat staring", caso a imagem não consiga ser carregada.
```
import React from 'react';
import Image from './Components/Image'

function App() {
  const imgSrc = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  const altText = 'Cute cat staring';
  return (
    <main>
      <Image source={imgSrc} alternativeText={altText}/>
    </main>
  );
}

export default App;
```

## &#9989; Atividade de Fixação 02 - Composição de componentes
- Considerando os componentes `Order` e `App` abaixo, realize as tarefas a seguir.
```
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;
```
```
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
      </div>
    );
  }
}

export default App;
```
1. O que o componente `App` é em relação a Order?
- Resposta: Pai.
2. Complete o código acima de forma que os pedidos referentes aos produtos `headphone` e `energyDrink` sejam filhos de `App`.
```
import React from 'react';
import Order from './Components/Order'

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order order={headphone}/>
         <Order order={energyDrink}/>
      </div>
    );
  }
}

export default App;
```

## &#9989; Atividade de Fixação 03 - Lista de componentes e chaves
- Considere os componentes `UserProfile` e `App` abaixo.
```
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
```
```
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile user={user} />)}
      </div>
    );
  }
}

export default App;
```
- Tendo em vista que é preciso passar uma `key` para `UserProfile`, altere a chamada desse componente de forma que a lista seja gerada dinamicamente de maneira adequada.
```
import React from 'react';
import UserProfile from './Components/UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map((user, index) => <UserProfile key={user.id} user={user}/>)}
      </div>
    );
  }
}

export default App;
```

## &#9989; Exercício do dia
- Crie um novo projeto utilizando `npx create-react-app my-pokedex`;
- Para realizar esse exercício, crie um arquivo chamado `data.js` no diretório `.src/` do projeto que você acabou de criar. Copie para esse arquivo o seguinte conteúdo:
```
const pokemons = [
  {
      id: 25,
      name: "Pikachu",
      type: 'Electric',
      averageWeight: {
          value: 6.0,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
      id: 4,
      name: "Charmander",
      type: 'Fire',
      averageWeight: {
          value: 8.5,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
      id: 10,
      name: "Caterpie",
      type: 'Bug',
      averageWeight: {
          value: 2.9,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
      id: 23,
      name: "Ekans",
      type: 'Poison',
      averageWeight: {
          value: 6.9,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
  },
  {
      id: 65,
      name: "Alakazam",
      type: 'Psychic',
      averageWeight: {
          value: 48.0,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
  },
  {
      id: 151,
      name: "Mew",
      type: 'Psychic',
      averageWeight: {
          value: 4.0,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
  },
  {
      id: 78,
      name: "Rapidash",
      type: 'Fire',
      averageWeight: {
          value: 95.0,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
  },
  {
      id: 143,
      name: "Snorlax",
      type: 'Normal',
      averageWeight: {
          value: 460.0,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
  },
  {
      id: 148,
      name: "Dragonair",
      type: 'Dragon',
      averageWeight: {
          value: 16.5,
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
  }
];

export default pokemons;
```
- Você vai implementar de forma simplificada uma **Pokedex**. A sua aplicação precisa mostrar todos os pokémons presentes no arquivo `data.js` e precisa ter ao menos dois componentes:
  1. `Pokedex`: esse componente representa a enciclopédia de pokémons. Esse componente recebe como entrada uma lista de pokémons para serem mostrados na tela. Para cada um desses pokémons recebidos, Pokedex chama o componente citado abaixo (`Pokemon`).
  2. `Pokemon`: como o próprio nome diz, esse componente representa um pokémon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokémon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando **PropTypes**:
      - Nome do pokemon;
      - Tipo do pokemon;
      - Peso médio do pokemon, acompanhado da unidade de medida usada;
      - Imagem do pokemon.
### Resposta...
- Componente `Pokemon`:
```
import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { value, measurementUnit } = this.props.averageWeight
    return (
      <section className='container-pokemon'>
        <span className='title-pokemon'>{(this.props.name).toUpperCase()}</span>
        <section className='info-pokemon'>
          <span>
            Type: <span className='value'>{this.props.type}</span>
          </span>
          <span>
            Average Weight: <span className='value'>{value}{measurementUnit}</span>
          </span>
          <a href={this.props.moreInfo} target='_blank' rel='noreferrer'>
            <span className='value'>Click for more Info</span>
          </a>
        </section>
        <section className='section-image'>
          <img className='image-pokemon' src={this.props.image} alt={this.props.name} />
        </section>
      </section>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired,
}

export default Pokemon;
```
- Componente `Pokedex`:
```
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
```
- Componente `App`:
```
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
```
- CSS:
```
* {
  box-sizing: border-box;
}

.main-title {
  text-align: center;
  font-size: 36px;
}

.container-pokedex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container-pokemon {
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  margin: 15px;
  width: 500px;
  height: 200px;
  padding: 0 10px 0px 20px;
  border-radius: 20px;
  border: 1px solid rgb(201, 201, 201);
}

.title-pokemon {
  width: 100%;
  font-size: 21px;
  font-weight: 800;
  text-align: center;
  margin: auto;
}

.info-pokemon {
  display: flex;
  flex-direction: column;
  width: 60%;
  max-height: 100%;
  font-size: 18px;
  justify-content: space-evenly;
  height: auto;
  color: rgb(230, 59, 59);
  font-weight: 800;
}

.value {
  color: rgb(37, 37, 37);
}

.section-image {
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
}

.image-pokemon {
  width: 75%;
}
```