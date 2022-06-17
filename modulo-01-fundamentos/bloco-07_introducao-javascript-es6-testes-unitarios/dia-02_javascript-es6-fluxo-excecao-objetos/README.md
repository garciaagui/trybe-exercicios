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
  if (!v1 || !v2) {
    throw new Error('Por favor, verifique se os campos Valor 1 e Valor 2 foram preenchidos.');
  }
  else if (isNaN(v1) || isNaN(v2)) {
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
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyInputsValues(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    const result = error.message;
    document.getElementById('result').innerHTML = `ERRO: ${result}`;
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
const customerInfo = (order) => {
  const entries = Object.entries(order);
  const deliveryPerson = entries[3][1].delivery.deliveryPerson;
  const customerName = entries[0][1];
  const customerPhoneNumber = entries[1][1];
  const customerAdressStreet = entries[2][1].street;
  const customerAdressNumber = entries[2][1].number;
  const customerAdressApartment = entries[2][1].apartment;
  return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhoneNumber}, R. ${customerAdressStreet}, Nº: ${customerAdressNumber}, AP: ${customerAdressApartment}.`;
}

console.log(customerInfo(order));
```

2. Complete a função `orderModifier()` para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
- Modifique o nome da **pessoa compradora**.
- Modifique o **valor total da compra** para R$ 50,00.
```
const orderModifier = (order) => {
  const oldOrder = order;
  const newOrder = Object.assign({}, oldOrder);
  const customerName = newOrder.name = 'Luiz Silva';
  const pizzas = Object.keys(newOrder.order.pizza);
  const pizza1 = pizzas[0];
  const pizza2 = pizzas[1];
  const drink = Object.values(newOrder.order.drinks.coke);
  const drink1 = drink[0];
  const totalPrice = newOrder.payment.total = 50;
  return `Olá ${customerName}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink1} é R$ ${totalPrice},00.`;
}

console.log(orderModifier(order));
```

## &#9989; Exercícios - Parte III
1. Crie uma função para adicionar o **turno da noite** na `lesson2`. Essa função deve possuir **três parâmetros**, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
```
const addShift = (object, key, value) => {
  object[key] = value;
  return object;
}

console.log(addShift(lesson2, 'turno', 'noite'));
```

2. Crie uma função para **listar** as `keys` de um objeto. Essa função deve receber **um objeto como parâmetro**.
```
const listObjectKeys = (object) => Object.keys(object);
console.log(listObjectKeys(lesson1));
console.log(listObjectKeys(lesson2));
console.log(listObjectKeys(lesson3));
```

3. Crie uma função para mostrar o **tamanho de um objeto**.
```
const getObjectLength = (object) => Object.keys(object).length;
console.log(getObjectLength(lesson1));
console.log(getObjectLength(lesson2));
console.log(getObjectLength(lesson3));
```

4. Crie uma função para **listar os valores** de um objeto. Essa função deve receber **um objeto como parâmetro**.
```
const listObjectValues = (object) => Object.values(object);
console.log(listObjectValues(lesson1));
console.log(listObjectValues(lesson2));
console.log(listObjectValues(lesson3));
```

5. Crie um objeto de nome **allLessons**, que deve **agrupar todas as aulas** através do `Object.assign`. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
```
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);
```

6. Usando o objeto criado no exercício 5, crie uma função que retorne o **número total de estudantes** em todas as aulas.
```
const getAllStudents = (object) => {
  const objectValues = Object.values(object);
  let totalStudents = 0;
  for (let i = 0; i < objectValues.length; i += 1) {
    totalStudents += objectValues[i].numeroEstudantes;
  }
  return `O número total de estudantes entre todas as classes é de ${totalStudents}.`;
}
console.log(getAllStudents(allLessons));
```

7. Crie uma função que obtenha o **valor da chave de acordo com a sua posição** no objeto. 
```
const getValueByNumber = (object, value) => {
  const keyValues = Object.values(object);
  return keyValues[value];
}
console.log(getValueByNumber(lesson1, 0));
```

8. Crie uma função que verifique **se o par (chave / valor) existe na função**. Essa função deve possuir **três parâmetros**, sendo eles: o objeto, o nome da chave e o valor da chave.
```
const verifyPair = (object, key, value) => {
  if (object[key] == value) return `Par Chave / Valor existe no Objeto!`;
  else return `Par Chave / Valor NÃO existe no Objeto!`;
}
console.log(verifyPair(lesson1, 'materia', 'Matemática'));
```

## &#9989; Exercícios - Bônus
1. Crie uma função para contar **quantos estudantes assistiram às aulas** de Matemática. Use o objeto criado no exercício 5 (Parte III).
```
const getNumberOfStudentsPerSubject = (object, subject) => {
  const objectValues = Object.values(object);
  let numberOfStudents = 0;
  for (let i = 0; i < objectValues.length; i += 1) {
    if (objectValues[i].materia === subject) {
      numberOfStudents += objectValues[i].numeroEstudantes;
    }
  }
  return `O número total de estudantes que assistiram às aulas de ${subject} é de ${numberOfStudents}.`;
}

console.log(getNumberOfStudentsPerSubject(allLessons, 'História'));
```

2. Crie uma função que deverá retornar um objeto que representa o **relatório do professor ou professora**, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5 (Parte III).
```
const generateTeacherReport = (object, teacher) => {
  const objectValues = Object.values(object);
  let numberOfStudents = 0;
  let subjectsTaught = [];
  for (let i = 0; i < objectValues.length; i += 1) {
    if (objectValues[i].professor === teacher) {
      numberOfStudents += objectValues[i].numeroEstudantes;
      subjectsTaught.push(objectValues[i].materia);
    }
  }
  const teacherReport = {
    professor: teacher,
    aulas: subjectsTaught,
    estudantes: numberOfStudents
  }
  return teacherReport;
}

console.log(generateTeacherReport(allLessons, 'Maria Clara'));
```