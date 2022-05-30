function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const calendar = document.getElementById('days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const containerButtons = document.querySelector('.buttons-container');

// Exercício 1
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

// Exercício 2
function createHolidayButton(buttonName) {
  const holidayButton = document.createElement('button');
  holidayButton.innerHTML = buttonName;
  holidayButton.setAttribute('id', 'btn-holiday');
  containerButtons.appendChild(holidayButton);
}
createHolidayButton('Feriados');

// Exercício 3
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

// Exercício 4
function createFridayButton(buttonName) {
  const fridayButton = document.createElement('button');
  fridayButton.innerHTML = buttonName;
  fridayButton.setAttribute('id', 'btn-friday');
  containerButtons.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

// Exercício 5
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

// Exercício 6
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

// Exercício 7
const tasksContainer = document.querySelector('.my-tasks');

function addNewTask(taskName) {
  const newTask = document.createElement('span');
  newTask.innerHTML = taskName;
  tasksContainer.appendChild(newTask);
}
addNewTask('Cozinhar');

// Exercício 8
function addCaptionForTask(color) {
  const newCaption = document.createElement('div');
  newCaption.setAttribute('class', 'task');
  newCaption.style.backgroundColor = color;
  tasksContainer.appendChild(newCaption);
}
addCaptionForTask('red');

// Exercício 9
const taskCaption = document.querySelector('.task');

function selectTask() {
  taskCaption.classList.remove('task')
  taskCaption.classList.add('task-selected');
}

function deselectTask() {
  taskCaption.classList.remove('task-selected');
  taskCaption.classList.add('task');
}

let buttonClicks3 = 0;

taskCaption.addEventListener('click', function(){
  buttonClicks3 += 1;
  if (buttonClicks3 % 2 !== 0) {
    selectTask();
  } else {
    deselectTask();
  }
})

// Exercício 10
function flagDay(event) {
  if (buttonClicks3 % 2 !== 0) {
    const selectedTask = document.querySelector('.task-selected')
    event.style.backgroundColor = selectedTask.style.backgroundColor
    event.style.color = 'white';
  }
}

function unflagDay(event) {
  event.style.backgroundColor = 'rgb(238,238,238)';
  event.style.color = '#777';
}

let buttonClicks4 = 0;

for (let i = 0; i < calendarDays.length; i += 1) {
  calendarDays[i].addEventListener('click', function() {
    buttonClicks4 += 1;
    if (buttonClicks4 % 2 !== 0) {
      flagDay(calendarDays[i]);
    }
    else {
      unflagDay(calendarDays[i])
    }
  })
}

// Exercício 11 - BÔNUS
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