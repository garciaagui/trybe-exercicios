import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <main>
        <button onClick={() => console.log('First Message')}>Button 1</button>
        <button onClick={() => console.log('Second Message')}>Button 2</button>
        <button onClick={() => console.log('Third Message')}>Button 3</button>
      </main> 
    )
  }
}

export default App;

// Passo 01
// class App extends Component {
//   render() {
//     return (
//       <button onClick={() => console.log('Message')}>Button</button>
//     )
//   }
// }
