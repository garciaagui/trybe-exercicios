# &#9889; Atividades de Fixação & Exercícios | Bloco 11 - Dia 01

## &#9989; Atividades de Fixação - Fancy Buttons
1. Crie uma aplicação React com `npx create-react-app fancy-buttons`.
- Altere o componente `App.js` para que seja um componente de classe e contenha um **botão associado a um evento** que imprime um texto qualquer via `console.log()`.
- **Observação**: por ora, a sintaxe não estará correta
```
import React, { Component } from 'react'

function showMessage() {
  console.log('Message')
}

class App extends Component {
  render() {
    return (
      <button onClick={showMessage}>Button</button>
    )
  }
}

export default App;
```

2. Faça com que sua aplicação exiba **três botões** lado a lado com textos diferentes. **Cada botão clicado deve acionar um evento diferente**, cada um escrevendo algo diferente no console do navegador via `console.log()`.
```
import React, { Component } from 'react'

function showFirstMessage() {
  console.log('First Message');
}

function showSecondMessage() {
  console.log('Second Message');
}

function showThirdMessage() {
  console.log('Third Message');
}

class App extends Component {
  render() {
    return (
      <main>
        <button onClick={showFirstMessage}>Button 1</button>
        <button onClick={showSecondMessage}>Button 2</button>
        <button onClick={showThirdMessage}>Button 3</button>
      </main> 
    )
  }
}

export default App;
```

3. Declare **dentro da classe** do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe.
```
import React, { Component } from 'react'

class App extends Component {

  showFirstMessage() {
    console.log('First Message');
  }

  showSecondMessage() {
    console.log('Second Message');
  }

  showThirdMessage() {
    console.log('Third Message');
  }

  render() {
    return (
      <main>
        <button onClick={this.showFirstMessage}>Button 1</button>
        <button onClick={this.showSecondMessage}>Button 2</button>
        <button onClick={this.showThirdMessage}>Button 3</button>
      </main> 
    )
  }
}

export default App;
```

4. Garanta acesso ao objeto `this` nas funções declaradas.
```
import React, { Component } from 'react'

class App extends Component {

  constructor(){
    super();
    this.showFirstMessage = this.showFirstMessage.bind(this);
    this.showSecondMessage = this.showSecondMessage.bind(this);
    this.showThirdMessage = this.showThirdMessage.bind(this);
  }

  showFirstMessage() {
    console.log('First Message', this);
  }

  showSecondMessage() {
    console.log('Second Message', this);
  }

  showThirdMessage() {
    console.log('Third Message', this);
  }

  render() {
    return (
      <main>
        <button onClick={this.showFirstMessage}>Button 1</button>
        <button onClick={this.showSecondMessage}>Button 2</button>
        <button onClick={this.showThirdMessage}>Button 3</button>
      </main> 
    )
  }
}
```