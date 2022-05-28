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
const containerButtons = document.getElementsByClassName('buttons-container')[0];
const holidayButton = document.createElement('button');


// Exercício 1
function applyDaysOfDecember() {
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
applyDaysOfDecember();

// Exercício 2
function createHolidayButton(buttonName) {
  holidayButton.innerHTML = buttonName;
  holidayButton.setAttribute('id', 'btn-holiday');

  containerButtons.appendChild(holidayButton);
}
createHolidayButton('Feriados');

// Exercício 3
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

let buttonClicks1 = 0;

holidayButton.addEventListener('click', function() {
  buttonClicks1 += 1;
  if (buttonClicks1 % 2 !== 0) {
    changeHolidaysColorToGreen();
  }
  else {
    resetHolidaysColor();
  }
})

// Exercício 4
function createFridayButton(buttonName) {
  const fridayButton = document.createElement('button');
  fridayButton.innerHTML = buttonName;
  fridayButton.setAttribute('id', 'btn-friday');
  containerButtons.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

// Exercício 5
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
  newTask.innerText = taskName;
  tasksContainer.appendChild(newTask);
}
addNewTask('Cozinhar');

// Exercício 8
function addCaptionForTask(color) {
  const newCaption = document.createElement('div');
  newCaption.setAttribute('class', 'task');
  newCaption.style.backgroundColor = color;
  tasksContainer.appendChild(newCaption)
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