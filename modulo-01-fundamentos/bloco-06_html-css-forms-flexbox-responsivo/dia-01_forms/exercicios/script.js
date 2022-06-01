// Declaração das variáveis
const userNameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#user-email');
const questionInput = document.querySelector('#question');
const checkboxImage = document.querySelector('#checkbox2');
const imageInput = document.querySelector('#images');
const submitBtn = document.querySelector('#submit-btn');


// Funções
window.addEventListener('load', () => {
  imageInput.disabled = true;
})

checkboxImage.addEventListener('click', () => {
  if(checkboxImage.checked == false) {
    imageInput.disabled = true;
  } else {
    imageInput.disabled = false;
  }
})

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  username = userNameInput.value;
  email = emailInput.value;
  question = questionInput.value;
  if (username.length < 10 || username.length > 40 || email.length < 10 || email.length > 50 || question.length > 500) {
    window.alert('Dados Inválidos');
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
})
