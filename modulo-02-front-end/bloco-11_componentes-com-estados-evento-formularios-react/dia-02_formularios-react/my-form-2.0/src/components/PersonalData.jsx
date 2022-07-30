import React, { Component } from 'react'

class PersonalData extends Component {
  render() {
    const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor="userName">
          Nome
          <input type="text" name="userName" id="userName"/>
        </label>
        <label htmlFor="userEmail">
          Email
          <input type="text" name="userEmail" id="userEmail"/>
        </label>
        <label htmlFor="userCpf">
          CPF
          <input type="text" name="userCpf" id="userCpf"/>
        </label>
        <label htmlFor="userAdress">
          Endereço
          <input type="text" name="userAdress" id="userAdress"/>
        </label>
        <label htmlFor="userCity">
          Cidade
          <input type="text" name="userCity" id="userCity"/>
        </label>
        <label htmlFor="userState">
          Estado
          <select name="userState" id="userState">
            {states.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select> 
        </label>
        <section id="userResidence">
          <label htmlFor="userHomeResidence">
            Casa
            <input type="radio" name="userHomeResidence" id="userHomeResidence" />
          </label>
          <label htmlFor="userApartmentResidence">
            Apartamento
            <input type="radio" name="userApartmentResidence" id="userApartmentResidence" />
          </label>
        </section>

      </fieldset>
    );
  }
}

export default PersonalData;
