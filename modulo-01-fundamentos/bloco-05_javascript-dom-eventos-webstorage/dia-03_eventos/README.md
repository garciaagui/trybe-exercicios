# &#9889; Atividades de Fixação & Exercícios | Bloco 05 - Dia 03

## &#9989; Atividade de Fixação - Conheça o addEventListener

1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
- Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

**RESPOSTA:** Somente a caixa mais elevada possui a *classe 'tech'*.

2. Crie uma função que adicione a *classe 'tech'* ao elemento **li** quando for clicado.
- Deve existir apenas um elemento com a *classe 'tech'*. Como você faz isso?
```
function changeClassName(addClassName) {
  const hadClassName = document.querySelector('.tech');
  hadClassName.classList.remove('tech');
  addClassName.target.classList.add('tech');
}
firstLi.addEventListener('click', changeClassName);
secondLi.addEventListener('click', changeClassName);
thirdLi.addEventListener('click', changeClassName);
```

3. Crie uma função que, ao **digitar na caixa de texto**, altere o texto do elemento com a *classe 'tech'*;
```
function changeContent() {
  const techClass = document.querySelector('.tech');
  techClass.innerText = input.value;
}
input.addEventListener('keyup', changeContent);
```

4. Crie uma função que, ao **clicar duas vezes em 'Meu top 3 do Spotrybefy'**, ele redirecione para alguma página;
- Que tal **redirecionar para seu portfólio**?
```
function redirectPage() {
  window.open('https://garciaagui.github.io/', '_blank');
}
myWebpage.addEventListener('dblclick', redirectPage);
```

5. Crie uma função que, ao **passar o mouse sobre 'Meu top 3 do Spotrybefy'**, altere a cor do mesmo;
```
function changeTitleColor (event) {
  event.target.style.color = 'rgb(0, 109, 251)';
}
myWebpage.addEventListener('mouseover', changeTitleColor);
```

## &#9989; Exercícios do Dia

1. O *array dezDaysList* contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que **crie dinamicamente cada dia do calendário** e os **adicione como filhos/filhas da tag ul com ID "days"**. Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
```
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
```
- Os dias devem estar contidos em uma **tag li**, e todos devem ter a *classe day*.
- Os dias 24, 25 e 31 são **feriados** e, além da classe day, devem conter também a *classe holiday*.
- Os dias 4, 11, 18 e 25 são **Sexta-feira**. Eles devem conter a classe day e a *classe friday*.
```
function createMonthDays() {
  for (let i = 0; i < dezDaysList.length; i += 1) { 
    const decDay = dezDaysList[i];
    const decDayListItem = document.createElement('li');
    decDayListItem.innerHTML = decDay;
    decDayListItem.classList.add('day');
    if (i === 25 || i === 26 || i === 32) {
      decDayListItem.classList.add('holiday');
    }
    if (i === 5 || i === 12 || i === 19 || i === 26) {
      decDayListItem.classList.add('friday');
    }
    calendar.appendChild(decDayListItem);
  };
};
createMonthDays();
```

2. Implemente uma função que receba como parâmetro a *string "Feriados"* e **crie dinamicamente um botão com o nome "Feriados"**.
- Adicione a este botão a *ID "btn-holiday"*.
- Adicione este botão como **filho/filha da tag div com classe "buttons-container"**.
```
const containerButtons = document.querySelector('.buttons-container');

function createHolidayButton(buttonName) {
  const holidayButton = document.createElement('button');
  holidayButton.innerHTML = buttonName;
  holidayButton.setAttribute('id', 'btn-holiday');
  containerButtons.appendChild(holidayButton);
}
createHolidayButton('Feriados');
```

3. Implemente uma função que adicione ao *botão "Feriados"* um **evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday"**.
- É interessante que este botão **possua também a lógica inversa**. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
```
const holidayButton = document.querySelector('#btn-holiday');

function changeHolidaysColor() {
  const holidays = document.getElementsByClassName('holiday');
  const newBgColor = 'green';
  const originalBgColor = 'rgb(238,238,238)';

  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === newBgColor) {
      holidays[i].style.backgroundColor = originalBgColor;
      holidays[i].style.color = '#777';
    } else {
      holidays[i].style.backgroundColor = newBgColor;
      holidays[i].style.color = 'white';
    }
  }
}

holidayButton.addEventListener('click', changeHolidaysColor);
```

4. Implemente uma função que receba como parâmetro a *string "Sexta-feira"* e **crie dinamicamente um botão com o nome "Sexta-feira"**.
- Adicione a este botão o *ID "btn-friday"*.
- Adicione este botão como **filho/filha da tag div com classe "buttons-container"**.
```
function createFridayButton(buttonName) {
  const fridayButton = document.createElement('button');
  fridayButton.innerHTML = buttonName;
  fridayButton.setAttribute('id', 'btn-friday');
  containerButtons.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');
```

5. Implemente uma função que adicione ao *botão "Sexta-feira"* um **evento de "click" que modifica o texto exibido nos dias que são Sexta-feira**.
- É interessante que este botão **possua também a lógica inversa**. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
```
const fridayButton = document.querySelector('#btn-friday');
const fridayArray = [4,11,18,25];

function changeFridaysColor(fridayArray) {
  const fridays = document.getElementsByClassName('friday');
  const newText = 'HABEMUS SEXTA!';

  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerHTML !== newText) {
      fridays[i].innerHTML = newText;
    } else {
      fridays[i].innerHTML = fridayArray[i];
    }
  }
}

fridayButton.addEventListener('click', function () {
  changeFridaysColor(fridayArray);
});
```

6. Implemente duas funções que criem um **efeito de "zoom"**. Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
```
const calendarDays = document.getElementsByClassName('day');

function zoomOverText(event) {
  event.target.style.transform = 'scale(1.5)';
}

function zoomOutText(event) {
  event.target.style.transform = 'scale(1)';
}

for (i = 0; i < calendarDays.length; i += 1) {
  calendarDays[i].addEventListener('mouseover', zoomOverText);
  calendarDays[i].addEventListener('mouseout', zoomOutText);
}
```

7. Implemente uma função que **adiciona uma tarefa personalizada ao calendário**. A função deve receber como *parâmetro a string com o nome da tarefa* (ex: "cozinhar") e **criar dinamicamente um elemento com a tag span contendo a tarefa**.
- O elemento criado deverá ser adicionado como **filho/filha da tag div que possui a classe "my-tasks"**.
```
const tasksContainer = document.querySelector('.my-tasks');

function addNewTask(taskName) {
  const newTask = document.createElement('span');
  newTask.innerText = taskName;
  tasksContainer.appendChild(newTask);
}
addNewTask('Cozinhar');
```

8. Implemente uma função que **adiciona uma legenda com cor para a tarefa criada** no exercício anterior. Esta função deverá receber como *parâmetro uma string ("cor")* e **criar dinamicamente um elemento de tag div com a classe task**.
- O parâmetro cor deverá ser utilizado como **cor de fundo da div criada**.
- O elemento criado deverá ser adicionado como **filho/filha da tag div que possui a classe "my-tasks"**.
```
function addCaptionForTask(color) {
  const newCaption = document.createElement('div');
  newCaption.setAttribute('class', 'task');
  newCaption.style.backgroundColor = color;
  tasksContainer.appendChild(newCaption);
}
addCaptionForTask('red');
```

9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag div referente a cor da sua tarefa, **atribua a este elemento a classe task selected**, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
- Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
```
const taskCaption = document.querySelector('.task');

function selectTask() {
  if (!taskCaption.classList.contains('task-selected')) {
    taskCaption.setAttribute('class','task-selected');
  } else {
    taskCaption.setAttribute('class','task');
  }
}

taskCaption.addEventListener('click', selectTask);
```

10. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, **atribua a este dia a cor da legenda da sua tarefa selecionada**.
- Ao clicar novamente no dia com a cor da legenda, a sua cor deverá **voltar à configuração inicial** rgb(119,119,119).
```
function flagDay(event){
  const selectedTask = document.querySelector('.task-selected') 
  let eventColor = event.target.style.color;
  if (!selectedTask || eventColor === selectedTask.style.backgroundColor) {
    event.target.style.color = 'rgb(119,119,119)';
  } else if (eventColor !== selectedTask.style.backgroundColor) {
    event.target.style.color = selectedTask.style.backgroundColor;
  }
}

for (let i = 0; i < calendarDays.length; i += 1) {
  calendarDays[i].addEventListener('click', flagDay);
}
```

11. BÔNUS - Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", **adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR"**.
- Se nenhum caractere for inserido no campo input, a função deve **retornar um alert com uma mensagem de erro** ao clicar em "ADICIONAR".
- Ao **pressionar a tecla "enter"** o evento também deverá ser disparado.
```
const commitmentContainer = document.querySelector('.input-container');
const commitmentInput = document.getElementById('task-input');
const commitmentAddBtn = document.getElementById('btn-add');

function addNewCommitment() {
  const newCommitment = document.createElement('span');
  newCommitment.innerText = commitmentInput.value;
  newCommitment.style.display = 'block';
  commitmentContainer.appendChild(newCommitment);
  commitmentInput.value = '';
}

commitmentAddBtn.addEventListener('click', function(){
  if (commitmentInput.value === '') {
    window.alert('Alerta! Nenhum caractere inserido.');
  } else {
    addNewCommitment();
  }
});

commitmentInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    if (commitmentInput.value === '') {
      window.alert('Alerta! Nenhum caractere inserido.');
    } else {
      addNewCommitment()
    }
  }
})
```