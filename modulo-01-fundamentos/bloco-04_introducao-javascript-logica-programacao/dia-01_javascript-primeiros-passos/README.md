# &#9889; Atividades de Fixação & Exercícios | Bloco 04 - Dia 01

### Obs.: Para os commits 3 e 4, considerar "Atividade de Fixação" ao invés de "Exercício".

## &#9989; Atividade de Fixação 1 - Variáveis

1. Crie uma constante chamada *myName* e atribua a ela o seu nome (Exemplo: Carolina).
```
const myName = "Guilherme";
```

2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
```
const birthCity = "Porto Feliz";
```

3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
```
let birthYear = 1999;
```

4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
```
console.log(myName);
console.log(birthCity);
console.log(birthYear);
```

5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
```
birthYear = 2030;
console.log(birthYear);
```

6. Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
```
birthCity = "São Paulo"
console.log(birthCity);
```
_Explicações..._
- A variável é classificada como constante, portanto, seu valor não pode ser alterado.

## &#9989; Atividade de Fixação 2 - Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

1. Crie uma constante chamada *base* e uma variável chamada *height* e atribua os seus respectivos valores: 5 e 8.
```
const base = 5;
let height = 8;
```

2. Crie uma constante chamada *area* e atribua a ela o resultado da multiplicação da *base* pela *altura*. Dica: lembre-se de usar sempre o *console.log()* para imprimir as variáveis e checar os resultados das operações!
```
const area = base * height;
```

3. Crie uma constante chamada *perimeter* e atribua a ela a soma de todos os lados do retângulo.
```
const perimeter = base + height + base + height;
```

## &#9989; Atividade de Fixação 3 - Condições If e Else

1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
```
const score = 80;
```

2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
- Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
- Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
- Se a nota for menor que 60, imprima "Você foi reprovada(o)"
```
if (score >= 80 && score <= 100) {
    console.log("Parabéns, você foi aprovado(a)!");

} else if (score >= 60 && score < 80) {
    console.log("Você está na nossa lista de espera.");

} else if (score >= 0 && score < 60) {
    console.log("Você foi reprovado(a).");

} else {
    console.log("Nota inválida! Por gentileza, insira um valor entre 0 e 100.");
}

// Resultado esperado: Parabéns, você foi aprovado(a)!
```

3. Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
```
if (score >= 80 && score <= 100) {
    console.log("Parabéns, você foi aprovado(a)!");

} else if (score >= 60 && score < 80) {
    console.log("Você está na nossa lista de espera.");

} else if (score >= 0 && score < 60) {
    console.log("Você foi reprovado(a).");

} else {
    console.log("Nota inválida! Por gentileza, insira um valor entre 0 e 100.");
}

// Resultado esperado: Parabéns, você foi aprovado(a)!
```
_Explicações..._
- Estrutura já montada no passo 2.

4. Altere o valor da nota para verificar se as condições que você implementou funcionam;
```
const score = 50;

// Resultado esperado: Você foi reprovado(a).
```

## &#9989; Atividade de Fixação 4.1 - Operador AND (&&)

1. Crie uma constante chamada *currentHour* que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
```
const currentHour = 12;
```

2. Crie uma variável chamada *message* que, inicialmente, é uma string vazia.
```
let message = ""
```

3. Implemente condicionais para que:
- Se o horário for **maior ou igual a 22**, insira "Não deveríamos comer nada, é hora de dormir" na variável *message*.
```
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
    console.log(message);
}
```

- Se o horário for **maior ou igual a 18 e menor que 22**, insira "Rango da noite, vamos jantar :D" na variável *message*.
```
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
    console.log(message);
}
```

- Se o horário for **maior ou igual a 14 e menor que 18**, insira "Vamos fazer um bolo pro café da tarde?" na variável *message*.
```
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
}
```

- Se o horário estiver **entre 11 e 14**, insira "Hora do almoço!!!" na variável *message*.
```
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
    console.log(message);
}
```

- Se o horário estiver **entre 4 e 11**, insira "Hmmm, cheiro de café recém passado" na variável *message*.
```
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
    console.log(message);
}
```

_Visão geral da estrutura condicional criada..._
```
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
    console.log(message);

} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
    console.log(message);

} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);

} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
    console.log(message);

} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
    console.log(message);

} else {
    message = "Horário inválido. Por gentileza, insira um horário entre 4h e 24h.";
    console.log(message);
}
```
_Explicações..._
- Inseri uma mensagem caso o horário esteja fora das condições.

4. Agora imprima a variável *message* fora das suas condições.
```
const currentHour = 3;

// Resultado esperado: Horário inválido. Por gentileza, insira um horário entre 4h e 24h.
```

## &#9989; Atividade de Fixação 4.2 - Operador OR (||)

1. Crie uma variável chamada *weekDay* que recebe a string "quarta-feira".
```

```

2. Implemente condicionais para que:
- Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
```

```

- Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
```

```

_Visão geral da estrutura condicional criada..._
```

```