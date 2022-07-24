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
    return console.log(button.style.backgroundColor);
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

// PASSO 01
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

// PASSO 02
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
//
// PASS 04
// class App extends Component {
  
//   constructor(){
//     super();
//     this.showFirstMessage = this.showFirstMessage.bind(this);
//     this.showSecondMessage = this.showSecondMessage.bind(this);
//     this.showThirdMessage = this.showThirdMessage.bind(this);
//   }

//   showFirstMessage() {
//     console.log('First Message', this);
//   }

//   showSecondMessage() {
//     console.log('Second Message', this);
//   }

//   showThirdMessage() {
//     console.log('Third Message', this);
//   }

//   render() {
//     return (
//       <main>
//         <button onClick={this.showFirstMessage}>Button 1</button>
//         <button onClick={this.showSecondMessage}>Button 2</button>
//         <button onClick={this.showThirdMessage}>Button 3</button>
//       </main> 
//     )
//   }
// }