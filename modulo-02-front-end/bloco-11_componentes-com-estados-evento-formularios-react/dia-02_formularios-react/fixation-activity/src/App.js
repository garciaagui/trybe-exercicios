import React, { Component } from 'react'
import './App.css'
import Select from './components/Select';
import Textarea from './components/Textarea';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      userEmail: '',
      userRegion: '',
      userInfo: '',
      userAge: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  render() {

    const { userName, userEmail, userRegion, userInfo, userAge } = this.state;
    
    return(
      <main>
        <h1>Formulário - Atividade de Fixação</h1>
        <form>
          <fieldset>
            <legend>Informações Pessoais</legend>

            <label className="flex-label" htmlFor="userName">
              Nome
              <input type="text" id="userName" name="userName" value={userName} onChange={this.handleChange}/>
            </label>

            <label className="flex-label" htmlFor="userEmail">
              E-mail
              <input type="email" id="userEmail" name="userEmail" value={userEmail} onChange={this.handleChange}/>
            </label>

            <Select stateValue={userRegion} handleFunction={this.handleChange} /> 
            <Textarea stateValue={userInfo} handleFunction={this.handleChange} />

            <label htmlFor="userAge">
              Clique no checkbox ao lado se você for maior de 18 anos:
              <input name="userAge" id="userAge" type="checkbox" value={userAge} onChange={this.handleChange}/>
            </label>

            <label className="flex-label" htmlFor="userDoc">
              Insira um documento de identificação
              <input type="file" id="userDoc" name="userDoc"/>
            </label>
          </fieldset>

        </form>
      </main>
    );
  }
}

export default App;

// PASSO 01
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       userName: '',
//     }
//   }

//   handleChange = ({ target }) => {
//     this.setState({
//       userName: target.value,
//     })
//   }

//   render() {
//     return(
//       <main>
//         <h1>Formulário - Atividade de Fixação</h1>
//         <form>
//           <div>
//             <label for="user-name">Nome do Usuário</label>
//             <input type="text" name="user-name" value={this.state.userName} onChange={this.handleChange}/>
//           </div>
//           <div>
//             <label for="user-email">E-mail do Usuário</label>
//             <input name="user-email" type="email"/>
//           </div>
//           <select name="user-region">
//             <option value="">-- Selecione a região do Brasil onde você mora --</option>
//             <option value="Norte">Norte</option>
//             <option value="Nordeste">Nordeste</option>
//             <option value="Centro-Oeste">Centro-Oeste</option>
//             <option value="Sudeste">Sudeste</option>
//             <option value="Sul">Sul</option>
//           </select>
//           <label>Fale um pouco sobre você :)
//             <textarea></textarea>
//           </label>
//           <div>
//             <label for="user-age">Você é maior de 18 anos?</label>
//             <input name="user-age" type="checkbox"/>
//           </div>
//         </form>
//       </main>
//     );
//   }
// }
