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

// Passo 01
// function showMessage() {
//   console.log('Message')
// }

// class App extends Component {
//   render() {
//     return (
//       <button onClick={showMessage}>Button</button>
//     )
//   }
// }
//
