# &#9889; Atividades de Fixação & Exercícios | Bloco 05 - Dia 03

## &#9989; Atividade de Fixação - Conheça o addEventListener

1. Copie esse arquivo e edite apenas ele;
- Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
- Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
- Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
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

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
```
function changeContent() {
  const techClass = document.querySelector('.tech');
  techClass.innerHTML = input.value;
}
input.addEventListener('keyup', changeContent)
```

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
- Que tal redirecionar para seu portfólio?
```
function redirectPage() {
  window.open('https://garciaagui.github.io/', '_blank');
}
myWebpage.addEventListener('dblclick', redirectPage);
```

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
```
const title = document.getElementsByTagName('h1')[0];
function changeTitleColor (event) {
  event.target.style.color = 'rgb(0, 109, 251)';
}
title.addEventListener('mouseover', changeTitleColor);
```

## &#9989; Exercícios do Dia

1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag ul com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
```
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
```
- Os dias devem estar contidos em uma tag li, e todos devem ter a classe day.
- Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.
- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.
```
function applyDaysOfDecember() {
  const calendar = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const decDay = dezDaysList[i];
    const decDayListItem = document.createElement('li');
    decDayListItem.innerHTML = decDay;
    decDayListItem.classList.add('day');
    if (i === 25 || i === 26 || i === 32) {
      decDayListItem.classList.add('holiday');
    }
    if (i === 5 || i === 12 || i === 18 || i === 26) {
      decDayListItem.classList.add('friday');
    }
    calendar.appendChild(decDayListItem);
  };
};
```

2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
- Adicione a este botão a ID "btn-holiday".
- Adicione este botão como filho/filha da tag div com classe "buttons-container".
```
function createHolidayButton(buttonName) {
  const containerButtons = document.getElementsByClassName('buttons-container')[0];
  const holidayButton = document.createElement('button');
  holidayButton.innerHTML = buttonName;
  holidayButton.setAttribute('id', 'btn-holiday');

  containerButtons.appendChild(holidayButton);
}
createHolidayButton('Feriados');
```

3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
```
function changeHolidaysColorToGreen() {
  const holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = 'green'
    holidays[i].style.color = 'white'
  }
}

function resetHolidaysColor() {
  const holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = 'rgb(238,238,238)'
    holidays[i].style.color = '#777'
  }
}

let buttonClicks = 0;

holidayButton.addEventListener('click', function() {
  buttonClicks += 1;
  if (buttonClicks % 2 !== 0) {
    changeHolidaysColorToGreen();
  }
  else {
    resetHolidaysColor();
  }
})
```

4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
- Adicione a este botão o ID "btn-friday".
- Adicione este botão como filho/filha da tag div com classe "buttons-container".
```
function createFridayButton(buttonName) {
  const fridayButton = document.createElement('button');
  fridayButton.innerHTML = buttonName;
  fridayButton.setAttribute('id', 'btn-friday');
  containerButtons.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');
```

5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
```
const fridayButton = document.getElementById('btn-friday');

function changeFridaysColor() {
  const friday = document.getElementsByClassName('friday');
  for (let i = 0; i < friday.length; i += 1) {
    friday[i].style.backgroundColor = 'blue'
    friday[i].style.color = 'white'
  }
}

function resetFridaysColor() {
  const friday = document.getElementsByClassName('friday');
  for (let i = 0; i < friday.length; i += 1) {
    friday[i].style.backgroundColor = 'rgb(238,238,238)'
    friday[i].style.color = '#777'
  }
}

let buttonClicks2 = 0;

fridayButton.addEventListener('click', function() {
  buttonClicks2 += 1;
  if (buttonClicks2 % 2 !== 0) {
    changeFridaysColor();
  }
  else {
    resetFridaysColor();
  }
})
```

6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
```
const calendarDays = document.getElementsByClassName('day');

function zoomOverText(event) {
  event.target.style.transform = 'scale(1.5)';
}

function zoomOutText(event) {
  event.target.style.transform = 'scale(1)';
}

for (i = 0; i < calendarDays.length; i += 1) {
  calendarDays[i].addEventListener('mouseover', zoomOverText)
  calendarDays[i].addEventListener('mouseout', zoomOutText)
}
```

7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag span contendo a tarefa.
- O elemento criado deverá ser adicionado como filho/filha da tag div que possui a classe "my-tasks".
```
const tasksContainer = document.querySelector('.my-tasks');
const newTaskButton = document.getElementById('btn-new-task');
const inputNewTask = document.getElementById('input-new-add');

function addNewTask() {
  const newTask = document.createElement('span');
  newTask.innerText = inputNewTask.value;
  newTask.style.display = 'block'
  newTask.style.textAlign = 'center'
  tasksContainer.appendChild(newTask);
  inputNewTask.value = '';
}
newTaskButton.addEventListener('click', addNewTask);
```

8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag div com a classe task.
- O parâmetro cor deverá ser utilizado como cor de fundo da div criada.
- O elemento criado deverá ser adicionado como filho/filha da tag div que possui a classe "my-tasks".
```

```