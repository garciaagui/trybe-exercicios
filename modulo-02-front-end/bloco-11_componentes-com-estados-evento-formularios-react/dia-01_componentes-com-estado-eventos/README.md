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

function showMessage(message) {
  console.log(message)
}

class App extends Component {
  render() {
    return (
      <main>
        <button onClick={() => showMessage('First Message')}>Button 1</button>
        <button onClick={() => showMessage('Second Message')}>Button 2</button>
        <button onClick={() => showMessage('Third Message')}>Button 3</button>
      </main> 
    )
  }
}

export default App;
```
