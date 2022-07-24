# &#9889; Atividades de Fixação & Exercícios | Bloco 11 - Dia 02

## &#9989; Atividades de Fixação
1. Crie um formulário com um campo `select`, dois `inputs` de tipo diferente, uma `textarea` e faça de **um deles um componente controlado**, ou seja, elementos do formulário controlados pelo Estado.
```
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
```

2. Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um `event handler` genérico para lidar com eles.
```
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
    return(
      <main>
        <h1>Formulário - Atividade de Fixação</h1>
        <form>
          <div>
            <label htmlFor="userName">
              Nome do Usuário
             <input type="text" id="userName" name="userName" value={this.state.userName} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label htmlFor="userEmail">
              E-mail do Usuário
              <input type="email" id="userEmail" name="userEmail" value={this.state.userEmail} onChange={this.handleChange}/>
            </label>
          </div>
          <select name="userRegion" id="userRegion" value={this.state.userRegion} onChange={this.handleChange}>
            <option value="">-- Selecione a região do Brasil onde você mora --</option>
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro-Oeste">Centro-Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>
          <label>Fale um pouco sobre você :)
            <textarea id="userInfo" name="userInfo" value={this.state.userInfo} onChange={this.handleChange}/>
          </label>
          <div>
            <label htmlFor="userAge">
              Você é maior de 18 anos?
              <input name="userAge" id="userAge" type="checkbox" value={this.state.userInfo} onChange={this.handleChange}/>
            </label>
          </div>
        </form>
      </main>
    );
  }
}
```

3. Acrescente no seu formulário um `input` do tipo `checkbox` e garanta que seu `event handler` esteja tratando este caso corretamente.
```
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
    return(
      <main>
        <h1>Formulário - Atividade de Fixação</h1>
        <form>
          <div>
            <label htmlFor="userName">
              Nome do Usuário
             <input type="text" id="userName" name="userName" value={this.state.userName} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label htmlFor="userEmail">
              E-mail do Usuário
              <input type="email" id="userEmail" name="userEmail" value={this.state.userEmail} onChange={this.handleChange}/>
            </label>
          </div>
          <select name="userRegion" id="userRegion" value={this.state.userRegion} onChange={this.handleChange}>
            <option value="">-- Selecione a região do Brasil onde você mora --</option>
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro-Oeste">Centro-Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>
          <label>Fale um pouco sobre você :)
            <textarea id="userInfo" name="userInfo" value={this.state.userInfo} onChange={this.handleChange}/>
          </label>
          <div>
            <label htmlFor="userAge">
              Você é maior de 18 anos?
              <input name="userAge" id="userAge" type="checkbox" value={this.state.userInfo} onChange={this.handleChange}/>
            </label>
          </div>
        </form>
      </main>
    );
  }
}
```

4. Acrescente no seu formulário um `input` do tipo `file` apropriadamente.
 ```
<form>
  <div>
    <label htmlFor="userName">
      Nome do Usuário
      <input type="text" id="userName" name="userName" value={this.state.userName} onChange={this.handleChange}/>
    </label>
  </div>
  <div>
    <label htmlFor="userEmail">
      E-mail do Usuário
      <input type="email" id="userEmail" name="userEmail" value={this.state.userEmail} onChange={this.handleChange}/>
    </label>
  </div>
  <select name="userRegion" id="userRegion" value={this.state.userRegion} onChange={this.handleChange}>
    <option value="">-- Selecione a região do Brasil onde você mora --</option>
    <option value="Norte">Norte</option>
    <option value="Nordeste">Nordeste</option>
    <option value="Centro-Oeste">Centro-Oeste</option>
    <option value="Sudeste">Sudeste</option>
    <option value="Sul">Sul</option>
  </select>
  <label>Fale um pouco sobre você :)
    <textarea id="userInfo" name="userInfo" value={this.state.userInfo} onChange={this.handleChange}/>
  </label>
  <div>
    <label htmlFor="userAge">
      Você é maior de 18 anos?
      <input name="userAge" id="userAge" type="checkbox" value={this.state.userInfo} onChange={this.handleChange}/>
    </label>
  </div>
  <div>
    <label htmlFor="userDoc">
      Insira um documento de identificação
      <input type="file" id="userDoc" name="userDoc"/>
    </label>
  </div>
</form>
```

5. Encapsule alguns dos seus campos num `fieldset`.
```
<form>
  <fieldset>
    <legend>Informações Pessoais</legend>

    <label className="flex-label" htmlFor="userName">
      Nome
      <input type="text" id="userName" name="userName" value={this.state.userName} onChange={this.handleChange}/>
    </label>

    <label className="flex-label" htmlFor="userEmail">
      E-mail
      <input type="email" id="userEmail" name="userEmail" value={this.state.userEmail} onChange={this.handleChange}/>
    </label>

    <select name="userRegion" id="userRegion" value={this.state.userRegion} onChange={this.handleChange}>
      <option value="">-- Selecione a região do Brasil onde você mora --</option>
      <option value="Norte">Norte</option>
      <option value="Nordeste">Nordeste</option>
      <option value="Centro-Oeste">Centro-Oeste</option>
      <option value="Sudeste">Sudeste</option>
      <option value="Sul">Sul</option>
    </select>

    <label className="flex-label">
      Fale um pouco sobre você :)
      <textarea id="userInfo" name="userInfo" value={this.state.userInfo} onChange={this.handleChange}/>
    </label>

    <label htmlFor="userAge">
      Clique no checkbox ao lado se você for maior de 18 anos:
      <input name="userAge" id="userAge" type="checkbox" value={this.state.userAge} onChange={this.handleChange}/>
    </label>

    <label className="flex-label" htmlFor="userDoc">
      Insira um documento de identificação
      <input type="file" id="userDoc" name="userDoc"/>
    </label>
  </fieldset>

</form>
```