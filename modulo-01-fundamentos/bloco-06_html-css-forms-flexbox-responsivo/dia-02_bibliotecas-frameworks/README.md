# &#9889; Exercícios | Bloco 06 - Dia 02

## &#9989; Exercício do Dia - Adição de framework
- O exercício do dia solicita que adicionemos um framework para estilizar o formulário desenvolvido no primeiro dia do bloco.
- Para tal, utilizei o framework **Bootstrap**.

## &#9989; Exercícios Bônus
1. Adicione uma biblioteca JavaScript de **date picker** ao formulário que você construiu na última aula. Utilize essa biblioteca no campo "Data de início" do formulário. Você pode remover as validações de data que adicionou, uma vez que a biblioteca se encarregará de permitir somente datas válidas.
- Utilizei a biblioteca **Pikaday**.
```
<!-- form.html -->
<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script>

<!-- script.js -->
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
```

2. Adicione uma biblioteca JavaScript de **validações** ao formulário que você construiu na última aula. Utilize essa biblioteca para substituir as validações que você fez manualmente.
- Utilizei a biblioteca **Just-validate**.
```
<!-- form.html -->
<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>

<!-- script.js -->
const validation = new window.JustValidate('#form');
validation
  .addField('#user-name', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Insira um nome que tenha entre 10 a 40 caracteres.'
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Insira um nome que tenha entre 10 a 40 caracteres.'
    },
  ])
  .addField('#user-email', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Insira um e-mail que tenha entre 10 a 50 caracteres.'
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Insira um nome que tenha entre 10 a 50 caracteres.'
    },
  ])
```
- Observações
  - Para não conflitar com as funções pré-existentes, mantive o código acima comentado no script original. Para verificar sua funcionalidade, deve-se comentar as funções já criadas.
  - Basicamente, o código acima funcionará de forma semelhante à função criada `validateInputValues()`.