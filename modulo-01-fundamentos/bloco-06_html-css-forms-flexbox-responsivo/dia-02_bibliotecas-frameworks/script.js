// Declaração das variáveis
const userNameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#user-email');
const questionInput = document.querySelector('#question');
const checkboxPermission = document.querySelector('#checkbox-permission');
const imageInput = document.querySelector('#images');
const submitBtn = document.querySelector('#submit-btn');

const validation = new window.JustValidate('#form');

// Funções
function validateInputValues() {
  username = userNameInput.value;
  invalidUsername = username < 10 || username > 40;

  email = emailInput.value;
  invalidEmail = email < 10 || email > 50;

  answer = questionInput.value;
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

// Bônus 1 - Date Picker

const picker = new Pikaday({ 
  field: document.querySelector('#travel-date'),
  format: 'D/M/YYYY',
  toString(date, format) {
    const day = ('0'+date.getDate()).slice(-2);
    const month = ('0'+(date.getMonth()+1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

// Bônus 2 - Just Validate

validation
  .addField('#user-name', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Invalid'
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Invalid'
    },
  ])
  // .addField('#user-email', [
  //   {
  //     rule: 'required',
  //     errorMessage: 'Email is required',
  //   },
  //   {
  //     rule: 'email',
  //     errorMessage: 'Email is invalid!',
  //   },
  // ]);