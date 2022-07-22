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

// Passo 02
// function showFirstMessage() {
//   console.log('First Message');
// }

// function showSecondMessage() {
//   console.log('Second Message');
// }

// function showThirdMessage() {
//   console.log('Third Message');
// }

// class App extends Component {
//   render() {
//     return (
//       <main>
//         <button onClick={showFirstMessage}>Button 1</button>
//         <button onClick={showSecondMessage}>Button 2</button>
//         <button onClick={showThirdMessage}>Button 3</button>
//       </main> 
//     )
//   }
// }

// PASSO 03
// showFirstMessage() {
//   console.log('First Message');
// }

// showSecondMessage() {
//   console.log('Second Message');
// }

// showThirdMessage() {
//   console.log('Third Message');
// }

// render() {
//   return (
//     <main>
//       <button onClick={this.showFirstMessage}>Button 1</button>
//       <button onClick={this.showSecondMessage}>Button 2</button>
//       <button onClick={this.showThirdMessage}>Button 3</button>
//     </main> 
//   )
// }