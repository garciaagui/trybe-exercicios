import React from 'react'

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const appointments = ['Finalizar Projeto', 'Happy Hour', 'Lavar Louça', 'Limpar Quarto', 'Descansar'];

function App() {
  return (
    <section>
        <h1>Lista de Tarefas</h1>
        <ul>{appointments.map((appointment) => Task(appointment))}</ul>
        {/* {Task('Finalizar Projeto')} */}
    </section>
  )
}

export default App;