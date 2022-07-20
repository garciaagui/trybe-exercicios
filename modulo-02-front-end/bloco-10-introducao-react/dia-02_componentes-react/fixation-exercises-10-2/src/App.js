import React from 'react';
import './App.css';
import Order from './Components/Order';

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

// Atividade Fixação 01
// function App() {
//   const imgSrc = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
//   const altText = 'Cute cat staring';
//   return (
//     <main>
//       <Image source={imgSrc} alternativeText={altText}/>
//     </main>
//   );
// }
