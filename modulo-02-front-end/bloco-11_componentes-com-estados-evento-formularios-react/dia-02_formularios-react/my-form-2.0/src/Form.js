import React, { Component } from 'react'
import PersonalData from './components/PersonalData';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <main>
        <h1>Formulário</h1>
        <form>
          <PersonalData />
        </form>
      </main>
    );
  }
}

export default Form;
