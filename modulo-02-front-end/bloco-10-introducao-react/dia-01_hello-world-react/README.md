# &#9889; Atividades de Fixação & Exercícios | Bloco 10 - Dia 01

## &#9989; Atividades de Fixação
- Crie um novo projeto utilizando `npx create-react-app`.
- Na pasta `src`, acesse `App.js` e remova todo o conteúdo da função `App`, de modo que ela fique assim:
```
  import React from 'react';

  class App extends React.Component {
    render() {
      return ();
    }
  }
  
  export default App;
```
1. Na pasta `src`, crie um arquivo chamado `About.js`. Em seguida, acesse o arquivo `About.js` e crie um componente que retorne um `h1` com o **seu nome** e um parágrafo `p` com uma **breve descrição** sobre você.
```
import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
          <h1>Guilherme Garcia</h1>
          <p>Brazilian, 22 years old, living in Porto Feliz/SP</p>
      </div>
    )
  }
}

export default About
```
2. Adicione dentro da função `render` do componente `About` o código abaixo. Após isso, faça os passos a seguir.
- Adicione na array `skills` mais habilidades;
- Adicione um `h2` com o título "Minhas Habilidades";
- Adicione uma **lista não ordenada** depois do título e coloque nela a array `jsxSkills`.
```
const skills = ["HTML"]
const jsxSkills = skills.map((skill) => <li>{skill}</li>)
```
- Resposta:
```
import React, { Component } from "react";

class About extends Component {
  render() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'Git']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
          <h1>Guilherme Garcia</h1>
          <p>Brazilian, 22 years old, living in Porto Feliz/SP</p>
          <h2>My Skills</h2>
          <ol>{jsxSkills}</ol>
      </div>
    )
  }
}

export default About
```
3. Importe o componente `About.js` em `App.js` de modo que ele seja renderizado na tela quando a aplicação for iniciada.
```
import React from 'react';
import About from './About';

class App extends React.Component {
  render() {
    return <About/>;
  }
}

export default App;
```

## &#9989; Exercício 01
- Crie um novo projeto utilizando `npx create-react-app`. Após isso, crie uma **lista de tarefas** simples seguindo os passos abaixo.
1. Insira a função `Task` a seguir **acima** do seu componente `App` dentro do arquivo `App.js`.
```
import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
  )
}

export default App;
```

2. Chame a função dentro do seu componente `App`. Insira o valor que você quiser.
```
import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <section>
        <h1>Lista de Tarefas</h1>
        {Task('Finalizar Projeto')}
    </section>
  )
}

export default App;
```

3. Por fim, crie uma array de compromissos e use a função `map` para que cada item do array apareça, como um **item de lista**, no seu componente `App`.
```
import React from 'react'

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const appointments = ['Finalizar Projeto', 'Happy Hour', 'Lavar Louça', 'Limpar Quarto', 'Descansar'];

function App() {
  return (
    <section>
        <h1>Lista de Tarefas</h1>
        <ul>{appointments.map((appointment) => Task(appointment))}</ul>
    </section>
  )
}

export default App;
```

## &#9989; Exercício 02
- Crie um novo projeto utilizando `npx create-react-app`.

1. Na pasta `src`, crie um novo arquivo chamado `Header.jsx`, que representará o componente `Header`;
- No arquivo `Header.jsx`, crie uma **classe React**, chamada `Header`. Essa classe deve renderizar uma tag `h1` com o texto 'Conteúdos de Front-End';
- Após isso, importe e renderize o componente `Header` no componente `App`.
```
// Componente Header
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <h1 className='header'>Conteúdos de Front-End</h1>
    )
  }
}

export default Header
```
```
// Componente App
import './App.css';
import Header from './Header';

function App() {
  return (
    <body>
      <Header/>
    </body>
  );
}

export default App;
```
2. Na pasta `src`, crie um novo arquivo chamado `Content.jsx`, que representará o componente `Content`.
- Dentro do arquivo `Content.jsx`, crie uma **classe React** chamada `Content`;
- Ainda no arquivo `Content.jsx`, adicione o seguinte array:
```
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
```
- A classe `Content` deve renderizar o array `conteudos` com a utilização da função `map`, de acordo com o seguinte formato:
```
O conteúdo é: `Nome do Conteúdo`
Status: `Status do Conteúdo`
Bloco: `Bloco do Conteúdo`
```
- Na renderização, adicione o atributo `key` ao elemento pai dessa lista.
- Após todos esses passos, importe e renderize o componente `Content` no componente `App`.
```
// Componente Content
import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const showContent = (obj, key) => {
  const { conteudo, bloco, status } = obj;
  return (
    <section key={key} className="content">
      <span className="subject">O conteúdo é: {conteudo}</span><br/>
      <span>Status: {status}</span><br/>
      <span>Bloco: {bloco}</span>
    </section>
  );
}

class Content extends React.Component {
  render() {
    return (
      <section className="content-section">{conteudos.map((conteudo, index) => showContent(conteudo, index))}</section>
    )
  }
}

export default Content
```
```
// Componente App
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <body>
      <Header/>
      <Content/>
    </body>
  );
}

export default App;
```
3. Crie um novo arquivo `Footer.jsx` e, neste arquivo, crie uma **classe** chamada `Footer`.
- A classe `Footer` deve renderizar uma tag `h1` com o texto "E isso é só o começo...".
- Importe o componente Footer no app.js
