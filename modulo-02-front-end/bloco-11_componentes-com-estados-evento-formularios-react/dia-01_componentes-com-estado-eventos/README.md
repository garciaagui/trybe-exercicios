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

5. Converta a aplicação para uma que **conta o número de cliques dado em cada botão**! Primeiramente, **defina um estado inicial** para a contagem de cada botão.
```  
constructor(){
  super();

  this.state = {
    firstBtnClicks: 0,
    secondBtnClicks: 0,
    thirdBtnClicks: 0,
  }

  this.countFirstButtonClicks = this.countFirstButtonClicks.bind(this);
  this.countSecondButtonClicks = this.countSecondButtonClicks.bind(this);
  this.countThirdButtonClicks = this.countThirdButtonClicks.bind(this);
}
```

6. Agora, quando um botão for clicado, altere de forma assíncrona o **estado deste botão de zero para um**.
```
import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      firstBtnClicks: 0,
      secondBtnClicks: 0,
      thirdBtnClicks: 0,
    }

    this.countFirstButtonClicks = this.countFirstButtonClicks.bind(this);
    this.countSecondButtonClicks = this.countSecondButtonClicks.bind(this);
    this.countThirdButtonClicks = this.countThirdButtonClicks.bind(this);
  }

  countFirstButtonClicks() {
    this.setState((prevState) => ({
      firstBtnClicks: 1
    }))
  }

  countSecondButtonClicks() {
    this.setState((prevState) => ({
      secondBtnClicks: 1
    }))
  }

  countThirdButtonClicks() {
    this.setState((prevState) => ({
      thirdBtnClicks: 1
    }))
  }

  render() {
    return (
      <main>
        <button onClick={this.countFirstButtonClicks}>Button 1</button>
        <button onClick={this.countSecondButtonClicks}>Button 2</button>
        <button onClick={this.countThirdButtonClicks}>Button 3</button>
      </main> 
    )
  }
}

export default App;
```

7. Por fim, baseie-se no estado anterior ao atual para **incrementar a contagem de cliques** cada vez que um botão for clicado!
```
import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      firstBtnClicks: 0,
      secondBtnClicks: 0,
      thirdBtnClicks: 0,
    }

    this.countFirstButtonClicks = this.countFirstButtonClicks.bind(this);
    this.countSecondButtonClicks = this.countSecondButtonClicks.bind(this);
    this.countThirdButtonClicks = this.countThirdButtonClicks.bind(this);
  }

  countFirstButtonClicks() {
    this.setState((prevState) => ({
      firstBtnClicks: prevState.firstBtnClicks + 1
    }))
  }

  countSecondButtonClicks() {
    this.setState((prevState) => ({
      secondBtnClicks: prevState.secondBtnClicks + 1
    }))
  }

  countThirdButtonClicks() {
    this.setState((prevState) => ({
      thirdBtnClicks: prevState.thirdBtnClicks + 1
    }))
  }

  render() {
    return (
      <main>
        <button onClick={this.countFirstButtonClicks}>Button 1</button>
        <button onClick={this.countSecondButtonClicks}>Button 2</button>
        <button onClick={this.countThirdButtonClicks}>Button 3</button>
      </main> 
    )
  }
}

export default App;
```

8. Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser **verde**.
```
import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      firstBtnClicks: 0,
      secondBtnClicks: 0,
      thirdBtnClicks: 0,
    }

    this.countFirstButtonClicks = this.countFirstButtonClicks.bind(this);
    this.countSecondButtonClicks = this.countSecondButtonClicks.bind(this);
    this.countThirdButtonClicks = this.countThirdButtonClicks.bind(this);
  }

  changeButtonColor = (state, button) => {
    if(state % 2 === 0) {
      button.style.backgroundColor = 'green';
    } else {
      button.style.backgroundColor = 'white';
    }
  }

  countFirstButtonClicks() {
    this.setState((prevState) => ({
      firstBtnClicks: prevState.firstBtnClicks + 1
    }), () => {
      const firstBtn = document.querySelector('.first-btn');
      this.changeButtonColor(this.state.firstBtnClicks, firstBtn);
    })
  }

  countSecondButtonClicks() {
    this.setState((prevState) => ({
      secondBtnClicks: prevState.secondBtnClicks + 1
    }), () => {
      const secondBtn = document.querySelector('.second-btn');
      this.changeButtonColor(this.state.secondBtnClicks, secondBtn);
    })
  }

  countThirdButtonClicks() {
    this.setState((prevState) => ({
      thirdBtnClicks: prevState.thirdBtnClicks + 1
    }), () => {
      const thirdBtn = document.querySelector('.third-btn');
      this.changeButtonColor(this.state.thirdBtnClicks, thirdBtn);
    })
  }

  render() {
    return (
      <main>
        <button className="first-btn" onClick={this.countFirstButtonClicks}>Button 1</button>
        <button className="second-btn" onClick={this.countSecondButtonClicks}>Button 2</button>
        <button className="third-btn" onClick={this.countThirdButtonClicks}>Button 3</button>
      </main> 
    )
  }
}

export default App;
```

9. A cor atual do botão deve ser impressa num `console.log()` de dentro da função do evento que lida com o clique.
```
changeButtonColor = (state, button) => {
  if(state % 2 === 0) {
    button.style.backgroundColor = 'green';
  } else {
    button.style.backgroundColor = 'white';
  }
  return console.log(button.style.backgroundColor);
}
```
