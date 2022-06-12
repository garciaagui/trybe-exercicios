# &#9889; Atividades de Fixação & Exercícios | Bloco 07 - Dia 02

## &#9989; Exercícios - Parte I
1. Crie um **erro** personalizado que será chamado se a pessoa usuária **digitar apenas um número**.
```
<script>
  function verifyEmptyInputs(v1, v2) {
    if (v1 === '' || v2 === '') {
      throw new Error('Por favor, verifique se os campos Valor 1 e Valor 2 foram preenchidos.');
    }
  }

  function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    try {
      verifyEmptyInputs(value1, value2);
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    } catch (error) {
      const result = error.message;
      document.getElementById('result').innerHTML = `${result}`;
    }
  }
</script>
```

2. Agora adicione uma **outra exceção**, caso a pessoa usuária **digite um valor que não seja numérico**.
```
<script>
function verifyInputsValues(v1, v2) {
  if (v1 === '' || v2 === '') {
    throw new Error('Por favor, verifique se os campos Valor 1 e Valor 2 foram preenchidos.');
  }
  else if (isNaN(v1+v2)) {
    throw new Error('Por favor, verifique se os campos Valor 1 e Valor 2 foram preenchidos com NÚMEROS.');
  }
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verifyInputsValues(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    const result = error.message;
    document.getElementById('result').innerHTML = `${result}`;
  }
}
</script>
```
- **Observação**: Reutilizei a função anterior, renomeando-a e adicionando o `else if`.

3. Você se lembrou de **limpar os inputs após o clique do botão**? Teve que repetir código para isso? Que tal refatorar sua função utilizando o `finally`?
```
<script>
function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verifyInputsValues(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    const result = error.message;
    document.getElementById('result').innerHTML = `${result}`;
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
</script>
```

## &#9989; Exercícios - Parte II
1. Complete a função `customerInfo()` para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
```

```

2. Complete a função `orderModifier()` para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
- Modifique o nome da **pessoa compradora**.
- Modifique o **valor total da compra** para R$ 50,00.
```

```
