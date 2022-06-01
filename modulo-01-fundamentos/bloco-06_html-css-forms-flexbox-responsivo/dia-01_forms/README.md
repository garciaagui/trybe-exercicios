# &#9889; Atividades de Fixação & Exercícios | Bloco 06 - Dia 01

## &#9989; Atividade de Fixação 1 - input tag, types e attributes

1. Adicione os campos de entrada para **email** e **senha**.
```
<p>E-mail:</p>
<label for="input-email">
  <input type="email" name="user-email" id="input-email" placeholder="Insira seu e-mail" required>
</label>
<br>
<p>Senha:</p>
<label for="input-password">
  <input type="password" name="user-password" id="input-password" placeholder="Insira sua senha" required>
</label>
```

2. Adicione um **checkbox** com o texto "Lembre-me".
```
<label for="input-remind">
  Lembre-me
  <input type="checkbox" name="remind" id="check-remind">
</label>
```

3. Adicione um **botão** com o texto "Entrar".
```
<button type="submit" id="submit-button">Entrar</button>
```

4. Adicione os **placeholder** "Digite seu email" e "Digite sua senha" para os campos de **email** e **senha**.
```
<input type="email" name="user-email" id="input-email" placeholder="Digite seu email" required>

<input type="password" name="user-password" id="input-password" placeholder="Digite sua senha" required>
```
- Observação: já incluídos no passo 1, apenas modifiquei os conteúdos dos **placeholders**.

5. Adicione o atributo **required** para os campos de **email** e **senha**.
```
<input type="email" name="user-email" id="input-email" placeholder="Digite seu email" required>

<input type="password" name="user-password" id="input-password" placeholder="Digite sua senha" required>
```
- Observação: já incluídos no passo 1.

6. Adicione o atributo **autocomplete="off"** para o campo de **email**.
```
<input type="email" name="user-email" id="input-email" placeholder="Digite seu email" autocomplete="off" required>
```

7. Adicione o atributo **autofocus** para o campo de **email**.
```
<input type="email" name="user-email" id="input-email" placeholder="Digite seu email" autocomplete="off" autofocus required>
```

## &#9989; Atividade de Fixação 2 - prevent default
1. Adicione um evento **click** no elemento a que possui o **id href**. Na função do evento, implemente o método **.preventDefault()** para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
```
function prevent (event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', prevent);
```

2. Adicione um evento **click** no elemento checkbox que possui o **id input-checkbox**. Na função do evento, implemente o método **.preventDefault()** para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
```
INPUT_CHECKBOX.addEventListener('click', prevent);
```

3. Adicione um evento **keypress** no elemento input type="text" que possui o **id input-text**. Na função do evento, implemente o método **.preventDefault()** de forma que **somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha**.
```
INPUT_TEXT.addEventListener('keypress', (event) => {
  if (event.key !== 'a') {
    event.preventDefault();
  }
});
```

## &#9989; Exercício do Dia - Formulário de Sorteio de Viagem
1. O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
- Nome Completo:
```
<div id="container-name">
  <label for="user-name">Nome:</label>
  <input type="text" name="user-name" id="user-name" autocomplete='off' required>
</div>
```

- E-mail:
```
<div id="container-email">
  <label for="user-email">Email:</label>
  <input type="email" name="user-email" id="user-email" required>
</div>
```

- Destino Preferido:
```
<div id="container-destination">
  <p>Destino Preferido:</p>
    <input type="radio" name="destination" id="destination-1" value="city">
    <label for="destination-1">Cidade</label>

    <input type="radio" name="destination" id="destination-2" value="countryside">
    <label for="destination-2">Campo</label>

    <input type="radio" name="destination" id="destination-3" value="beach">
    <label for="destination-3">Praia</label>

    <input type="radio" name="destination" id="destination-4" value="mountains">
    <label for="destination-4">Montanhas</label>
</div>
```

- Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
```

<div id="container-question">
    <label for="question">Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
    </label>
    <textarea name="question" id="question" cols="30" rows="10" placeholder="Insira sua resposta aqui :)"></textarea>
</div>
```

- Qual a melhor data para realizar sua viagem?
```
<div id="container-travel-date">
  <label for="travel-date">Qual é a melhor data para a viagem?</label>
  <input type="date" name="travel-date" id="travel-date">
</div>
```

- Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
```
<div id="container-checkbox1">
  <label for="">
    Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
</label>
<input type="checkbox" name="" id="checkbox1">
</div>
```

- Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
```
<div id="container-checkbox2">
  <label for="">
    Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
  </label>
  <input type="checkbox" name="" id="checkbox2">
</div>
```

2. Crie um botão para enviar as informações preenchidas.
```
<div id="container-buttons">
  <button type="submit" id="submit-btn">Enviar</button>
</div>
```

3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
```
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
}
```

4. Crie um botão que limpe as informações contidas nos campos;
```
<div id="container-buttons">
  <button type="reset" id="reset-btn">Apagar</button>
</div>
```

5. (BÔNUS 1) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
```
const checkboxImage = document.querySelector('#checkbox2');
const imageInput = document.querySelector('#images');

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
```

6. (BÔNUS 2) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
```
const userNameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#user-email');
const questionInput = document.querySelector('#question');

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
```
- Observação: Reaproveitei a função criada no passo 3.