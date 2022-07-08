# &#9889; Atividades de Fixação & Exercícios | Bloco 09 - Dia 01

## &#9989; Atividades de Fixação
- Para as duas atividades a seguir, trabalharemos com o código abaixo.
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};
```
1. Adicione uma `callback` como parâmetro da função `getUser`.
- Insira o retorno da função `getUser`;
- (1.1)  Complete a chamada da função `getUser` de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
- (1.2.) Complete a chamada da função `getUser` de modo que o retorno seja: "Ivan is Russian".
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

console.log(getUser(userFullName)); // (1.1)
console.log(getUser(userNationality)); // (1.2)
```

2. Passe, como parâmetro e como retorno, uma `callback` para a função `getUser`.
- No código abaixo a função `getUser` foi modificada e agora funciona de modo assíncrono.
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    console.log(user);
  }, delay());
};
```
- Insira uma `callback` como parâmetro da função `getUser`;
- Retorne a `callback` passada como parâmetro na função `getUser`;
```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    return console.log(callback(user));
  }, delay());
};

getUser(userFullName);
getUser(userNationality);
```

## &#9989; Exercício 01
- Dado o código abaixo, qual a **ordem de finalização** de execução das linhas comentadas?
```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// console.log(planetDistanceFromSun(mars));
// console.log(planetDistanceFromSun(venus));
// console.log(planetDistanceFromSun(jupiter));

```
- Resposta:
```
console.log(planetDistanceFromSun(mars)); // Primeira a ser finalizada;
console.log(planetDistanceFromSun(venus)); // Segunda a ser finalizada;
console.log(planetDistanceFromSun(jupiter)); // Terceira e última a ser finalizada;
```

## &#9989; Exercício 02
- Agora, dado o código abaixo, qual a **ordem de finalização** de execução das linhas comentadas?

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// console.log(planetDistanceFromSun(mars));
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000);
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000);
```
- Resposta:
```
console.log(planetDistanceFromSun(mars)); // Primeira a ser finalizada;
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // Terceira e última a ser finalizada;
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // Segunda a ser finalizada;
```

## &#9989; Exercício 03
- A função `getPlanet` abaixo imprime o planeta Marte de forma síncrona. Modifique `getPlanet`, de forma que **Marte seja impresso assincronamente**, depois de **4 segundos**.
```
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};
```
- Resposta:
```
const getPlanet = () => {
  setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  }, 4000);
};

getPlanet();
```

## &#9989; Exercício 04
- Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de **até 5 segundos** para que termine o envio. Crie a função `sendMarsTemperature`, que **imprime a temperatura em Marte**.
```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};
```
- Resposta:
```
const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    const temperature = callback();
    return console.log(`Current Mars temperature: ${temperature} degree(s) Celsius`);
  }, messageDelay())
}

sendMarsTemperature(getMarsTemperature);
```

## &#9989; Exercício 05
- Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função `sendMarsTemperature` uma `callback` que contenha as **ações a serem tomadas em cima da temperatura**.
```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
```
- Resposta:
```
const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    const temperature = getMarsTemperature();
    return callback(temperature);
  }, messageDelay())
}

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);
```

## &#9989; Exercício 06
- Por fim, o robô Curiosity tem uma **taxa de sucesso de envio de mensagem de 60%** devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função `sendMarsTemperature` uma outra `callback` que contenha as ações a serem tomadas em caso de falha.
```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);
```
- Resposta:
```
const sendMarsTemperature = (sucessCallback, errorCallback) => {
  setTimeout(() => {
    const successProbability = Math.random() >= 0.6;
    if (successProbability) {
      const temperature = getMarsTemperature();
      return sucessCallback(temperature);
    }
    else {
      return errorCallback('Robot is busy')
    }
  }, messageDelay())
}

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);
```

## &#9989; Exercício 07
- Escreva um **teste** que verifique a chamada da callback de uma função `uppercase`, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
```
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
```
- Resposta:
```
test('Verifica se a função uppercase transforma as letras da string passada em letras maiúsculas', (done) => {
  uppercase('batman', (result) => {
    try {
      expect(result).toBe('BATMAN');
      done();
    } catch (error) {
      done(error);
    }
  });
});
```

## &#9989; Exercício 08
- No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função `getPokemonDetails` de modo que ela imprima no console os detalhes do pokémon que você escolheu. 
- PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também.
```
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails();
```
- Resposta:
```
const filterPokemon = (pokemon) => pokemon.name === 'Charmander';

const showMessage = (error, message) => {
  if (error) console.log(error);
  else console.log(message);
}

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails(filterPokemon, showMessage);
```

## &#9989; Exercício 09
- A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo `.test.js` ou `.spec.js` e copie o código abaixo. Complete os testes para a função `getPokemonDetails` de acordo com as especificações.
```
describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
  });
});
```
- Resposta:
```
describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const filter  = (pokemon) => pokemon.name === 'Pikachu';
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails(filter, (error, message) => {
      try {
        expect(message).toBeNull();
        expect(error).toEqual(expectedError);
        done();
      }
      catch (error) {
        done(error);
      }
    })
  });
  
  it("retorna um pokemon que existe no banco de dados", (done) => {
    const filter  = (pokemon) => pokemon.name === 'Charmander';
    getPokemonDetails(filter, (error, message) => {
      try {
        expect(message).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
        expect(error).toBeNull();
        done();
      }
      catch (error) {
        done(error);
      }
    })
  });
});
```

## &#9989; Exercício 10
- 
```

```
- Resposta:
```

```