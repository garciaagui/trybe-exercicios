// Declaração das variáveis
const userNameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#user-email');
const questionInput = document.querySelector('#question');
const checkboxPermission = document.querySelector('#checkbox-permission');
const imageInput = document.querySelector('#images');
const submitBtn = document.querySelector('#submit-btn');

// Funções
function validateInputValues() {
  username = userNameInput.value.length;
  invalidUsername = username < 10 || username > 40;

  email = emailInput.value.length;
  invalidEmail = email < 10 || email > 50;

  answer = questionInput.value.length;
  invalidAnswer = answer > 500;

  if (invalidUsername || invalidEmail || invalidAnswer) {
    window.alert('Dados Inválidos');
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

window.addEventListener('load', () => {
  imageInput.disabled = true;
})

checkboxPermission.addEventListener('click', () => {
  if(checkboxPermission.checked == false) {
    imageInput.disabled = true;
  } else {
    imageInput.disabled = false;
  }
})

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  validateInputValues();
})
