import React, { useContext } from "react";
import FormsContext from "../context/FormsContext";

function SavedForms() {

  const { data } = useContext(FormsContext)

  return(
    <section>
      <h2>Formulários Salvos</h2>
      <ul>
        {data.length === 0 ? 'Nenhum formulário salvo' : data.map(({name, age, city, module}, index) => (
          <li key={index}>
            <span>{`Nome: ${name}`}</span><br/>
            <span>{`Idade: ${age}`}</span><br/>
            <span>{`Cidade: ${city}`}</span><br/>
            <span>{`Módulo: ${module}`}</span>
          </li>
        ))}
      </ul>
    </section>
  )

}

export default SavedForms;