/* Atividade de Fixação 3 - Seletores */

// Cabeçalho
document.getElementById('header-container').style.backgroundColor = 'green';

// Tarefas Urgentes
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'lightsalmon';

// Títulos de Tarefas Urgentes
let urgentTitles = document.querySelectorAll('.emergency-tasks h3');

for (i = 0; i < urgentTitles.length; i += 1) {
  urgentTitles[i].style.backgroundColor = 'purple';
}

// Tarefas Não Urgentes
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

// Títulos de Tarefas Não Urgentes
let nonUrgentTitles = document.querySelectorAll('.no-emergency-tasks h3');

for (i = 0; i < nonUrgentTitles.length; i += 1) {
  nonUrgentTitles[i].style.backgroundColor = 'black';
}

// Rodapé
document.getElementById('footer-container').style.backgroundColor = 'darkslategray';