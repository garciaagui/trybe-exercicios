import React, { useContext } from "react";
import FormsContext from "../context/FormsContext";

function Forms() {

  const {
    name,
    setName,
    age,
    setAge,
    city,
    setCity,
    module,
    setModule } = useContext(FormsContext)

  return (
    <form>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor="inputName">
          <input
            type="text"
            name="inputName"
            id="inputName"
            placeholder="Nome Completo"
            value={name}
            onChange={({target}) => {setName(target.value)}}/>
        </label>

        <label htmlFor="inputAge">
          <input
            type="number"
            name="inputAge"
            id="inputAge"
            placeholder="Idade"
            value={age}
            onChange={({target}) => {setAge(target.value)}}/>
        </label>

        <label htmlFor="inputCity">
          <input
            type="text"
            name="inputCity"
            id="inputCity"
            placeholder="Cidade"
            value={city}
            onChange={({target}) => {setCity(target.value)}}/>
        </label>
      </fieldset>

      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="module-fundamentos">          
          <input
            type="radio"
            name="module"
            id="module-fundamentos"
            value="fundamentos"
            checked={module === "fundamentos"}
            onChange={({target}) => {setModule(target.value)}}/>  
          Fundamentos
        </label>

        <label htmlFor="module-frontend">
          <input
            type="radio"
            name="module"
            id="module-frontend"
            value="frontend"
            checked={module === "frontend"}
            onChange={({target}) => {setModule(target.value)}}/>  
          Front-end
        </label>

        <label htmlFor="module-backend">
          <input
            type="radio"
            name="module"
            id="module-backend"
            value="backend"
            checked={module === "backend"}
            onChange={({target}) => {setModule(target.value)}}/>
          Back-end
        </label>

        <label htmlFor="module-ciencia-computacao">
          <input
            type="radio"
            name="module"
            id="module-ciencia-computacao"
            value="ciencia-computacao"
            checked={module === "ciencia-computacao"}
            onChange={({target}) => {setModule(target.value)}}/>
          Ciência da Computação
        </label>
      </fieldset>

      <button type="submit">Enviar</button>

    </form>
  );
}

export default Forms;