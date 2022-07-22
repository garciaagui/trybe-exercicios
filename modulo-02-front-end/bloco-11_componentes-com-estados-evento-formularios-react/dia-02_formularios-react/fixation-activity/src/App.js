import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      userName: target.value,
    })
  }

  render() {
    return(
      <main>
        <h1>Formulário - Atividade de Fixação</h1>
        <form>
          <div>
            <label for="user-name">Nome do Usuário</label>
            <input type="text" name="user-name" value={this.state.userName} onChange={this.handleChange}/>
          </div>
          <div>
            <label for="user-email">E-mail do Usuário</label>
            <input name="user-email" type="email"/>
          </div>
          <select name="user-region">
            <option value="">-- Selecione a região do Brasil onde você mora --</option>
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro-Oeste">Centro-Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>
          <label>Fale um pouco sobre você :)
            <textarea></textarea>
          </label>
          <div>
            <label for="user-age">Você é maior de 18 anos?</label>
            <input name="user-age" type="checkbox"/>
          </div>
        </form>
      </main>
    );
  }
}

export default App;
