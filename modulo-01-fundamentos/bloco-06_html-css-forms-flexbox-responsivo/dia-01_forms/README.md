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
