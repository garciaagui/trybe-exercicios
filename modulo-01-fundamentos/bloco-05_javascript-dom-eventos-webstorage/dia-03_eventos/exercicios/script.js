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
    if (i === 5 || i === 12 || i === 18 || i === 26) {
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
function changeHolidaysColor() {
  const holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = 'green'
    holidays[i].style.color = 'white'
  }
}

holidayButton.addEventListener('click', changeHolidaysColor)