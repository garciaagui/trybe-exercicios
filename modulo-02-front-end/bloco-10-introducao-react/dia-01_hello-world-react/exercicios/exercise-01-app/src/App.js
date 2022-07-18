import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['Finalizar Projeto', 'Happy Hour', 'Lavar Louça', 'Limpar Quarto', 'Descansar'];

function App() {
  return (
    <section>
        <h1>Lista de Tarefas</h1>
        <ul>{appointments.map((appointment) => Task(appointment))}</ul>
    </section>
  )
}

export default App;