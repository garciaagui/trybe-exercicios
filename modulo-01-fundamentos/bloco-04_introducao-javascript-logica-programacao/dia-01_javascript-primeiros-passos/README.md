# &#9889; Atividades de Fixação & Exercícios | Bloco 04 - Dia 01

#### Obs.: Para os commits 3 e 4, considerar "Atividade de Fixação" ao invés de "Exercício".

## &#9989; Atividade de Fixação 1 - Variáveis

1. Crie uma *constante* chamada *myName* e atribua a ela o seu nome (Exemplo: Carolina).
```
const myName = "Guilherme";
```

2. Crie uma *constante* chamada *birthCity* e atribua a ela a sua cidade natal.
```
const birthCity = "Porto Feliz";
```

3. Crie uma *variável* chamada *birthYear* e atribua a ela o ano em que você nasceu.
```
let birthYear = 1999;
```

4. Utilize o *console.log()* para imprimir as *constantes e variáveis* que você criou.
```
console.log(`Meu nome: ${myName};`);
console.log(`Minha cidade natal: ${birthCity};`);
console.log(`Meu ano de nascimento: ${birthYear}`);
```

5. Altere o valor atribuído à *variável birthYear* para "2030". Faça um *console.log(birthYear)* novamente para ver o que acontece!
```
birthYear = 2030;
console.log(`Meu ano de nascimento: ${birthYear}`);

// Resultado esperado: "Meu ano de nascimento: 2030"
```

6. Altere o valor atribuído à *constante birthCity*. Faça um *console.log(birthCity)* novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
```
birthCity = "São Paulo";
console.log(`Minha cidade natal: ${birthCity};`);

// Resultado esperado: "TypeError: Assignment to constant variable."
```
_Explicações..._
- A variável é classificada como constante, portanto, não é possível reatribuir seu valor.

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

// Resultado esperado: "Parabéns, você foi aprovado(a)!"
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

// Resultado esperado: "Parabéns, você foi aprovado(a)!"
```
_Explicações..._
- Estrutura já montada no passo 2.

4. Altere o valor da nota para verificar se as condições que você implementou funcionam;
```
const score = 50;

// Resultado esperado: "Você foi reprovado(a)."
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
- Inseri uma mensagem caso o horário esteja fora do intervalo definido.

4. Agora imprima a variável *message* fora das suas condições.
```
const currentHour = 3;

// Resultado esperado: "Horário inválido. Por gentileza, insira um horário entre 4h e 24h."
```

## &#9989; Atividade de Fixação 4.2 - Operador OR (||)

1. Crie uma variável chamada *weekDay* que recebe a string "quarta-feira".
```
let weekDay = "quarta-feira";
```

2. Implemente condicionais para que:
- Se nossa variável *weekDay* for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
```
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
```

- Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
```
else if {
    console.log("FINALMENTE, descanso merecido UwU")
}
```

_Visão geral da estrutura condicional criada..._
```
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")

} else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU")

} else {
    console.log("Dia da semana inválido.")
}
```

## &#9989; Atividade de Fixação 5 - Switch e Case

1. Crie uma *variável* para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
```
applicantStatus = 'aprovada';
```

2. Crie uma estrutura condicional com o *switch/case* que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.
```
switch (applicantStatus) {

    case 'aprovada':
        console.log("Parabéns! Você foi aprovado(a)!");
        break;

    case 'lista':
        console.log("Aguarde nosso retorno, você está na lista de espera.");
        break;

    case 'reprovada':
        console.log("Você foi reprovado(a) no processo seletivo, desejamos sorte para as próximas oportunidades.");
        break;
    
    default:
        console.log("Não se aplica - Status não identificado, insira um valor válido.");
}

// Resultado esperado: "Parabéns! Você foi aprovado(a)!"
```

## &#9989; Exercícios do Dia

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas *constantes*, *a* e *b*, definidas no começo com os valores que serão operados. 
```
const a = 20;
const b = 10;
```

Faça programas para:
- Adição (a + b);
```
const adicao = a + b;
console.log(`A soma entre ${a} e ${b} é igual a: ${adicao}.`);

// Resultado esperado: "A soma entre 20 e 10 é igual a: 30."
```

- Subtração (a - b);
```
const subtracao = a - b;
console.log(`A subtração de ${a} e ${b} é igual a: ${subtracao}.`);

// Resultado esperado: "A subtração de 20 e 10 é igual a: 10."
```

- Multiplicação (a * b);
```
const multiplicacao = a * b;
console.log(`A multiplicação entre ${a} e ${b} é igual a: ${multiplicacao}.`);

// Resultado esperado: "A multiplicação entre 20 e 10 é igual a: 200."
```

- Divisão (a / b);
```
const divisao = a / b;
console.log(`A divisão de ${a} por ${b} é igual a: ${divisao}.`);

// Resultado esperado: "A divisão de 20 por 10 é igual a: 2."
```

- Módulo (a % b).
```
const modulo = a % b;
console.log(`O módulo de ${a} por ${b} é igual a: ${modulo}.`);

// Resultado esperado: "O módulo de 20 por 10 é igual a: 0."
```

2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas *constantes* com os valores que serão comparados.
```
const x = 180;
const y = 75;

console.log(`Constante x = ${x}.`);
console.log(`Constante y = ${y}.`);

if (x > y) {
    console.log(`A constante x é maior que a constante y = ${x} > ${y}!`);
} else {
    console.log(`A constante y é maior que a constante x = ${y} > ${x}!`);
}

// Resultado Esperado: "A constante x é maior que a constante y = 180 > 75!"
```

3. Faça um programa que retorne o maior de três números. Defina no começo do programa três *constantes* com os valores que serão comparados.
```
const a = 125;
const b = 211;
const c = 79;

console.log (`Constante a = ${a}.`);
console.log (`Constante b = ${b}.`);
console.log (`Constante c = ${c}.`);


if (a > b && a > c) {
    console.log (`A constante com maior valor é a "a" = ${a}.`);

} else if (b > a && b > c) {
    console.log (`A constante com maior valor é a "b" = ${b}.`);

} else {
    console.log (`A constante com maior valor é a "c" = ${c}.`);
}

// Resultado esperado: "A constante com maior valor é a "b" = 211."
```

4. Faça um programa que, dado um valor definido numa *constante*, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
```
const x = -10.5;

if (x > 0) {
    console.log("positive");

} else if (x < 0) {
    console.log("negative");

} else {
    console.log("zero");
}

// Resultado esperado: "negative"
```

5. Faça um programa que defina três *constantes* com os valores dos três ângulos internos de um triângulo. Retorne "true" se os ângulos representarem os ângulos de um triângulo e "false", caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo.

```
const a = 90;
const b = 70;
const c = 60;
const soma = a + b + c;

console.log("Valores inseridos:");
console.log(`- Ângulo "a" = ${a} graus.`);
console.log(`- Ângulo "b" = ${b} graus.`);
console.log(`- Ângulo "c" = ${c} graus.`);

if (a < 0 || b < 0 || c < 0) {
    console.log("ERRO: Os valores dos ângulos precisam ser positivos, verifique os valores inseridos.");

}  else {
    
    if (soma === 180) {
        console.log (`True! Os ângulos inseridos representam os ângulos de um triângulo - a soma dos três é igual a ${soma} graus.`);
    
    } else {
        console.log (`False! Os ângulos inseridos NÃO representam os ângulos de um triângulo - a soma dos três é igual a ${soma} graus.`);
    }

}

// Resultado esperado: "False! Os ângulos inseridos NÃO representam os ângulos de um triângulo - a soma dos três é igual a 220 graus."
```

6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
- Exemplo: *bishop (bispo) -> diagonals (diagonais)*.
```
let chessPiece = "Torre"

chessPiece = chessPiece.toLowerCase()

switch (chessPiece) {
    
    case 'peão':
        console.log('O Peão só se movimenta para frente, sendo a única peça que não se move para trás. No primeiro lance de cada peão ele pode avançar 1 ou 2 casas. A partir do segundo lance de cada peão ele irá movimenta-se apenas 1 casa.');
        break;

    case 'torre':
        console.log('A Torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça.');
        break;

    case 'bispo':
        console.log('O Bispo se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo, podendo ir para frente e para trás, quantas casas quiser, mas não pode pular nenhuma outra peça.');
        break;
    
    case 'cavalo':
        console.log('O Cavalo tem um movimento especial que parece a letra L. Movimenta-se 2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda, ou 2 casas para a direita ou para a esquerda e em seguida 1 casa para frente ou para trás. O cavalo é a única peça do xadrez que pode pular outras peças.');
        break;
    
    case 'rainha':
        console.log('A Rainha, também conhecida como Dama, é a peça mais poderosa do xadrez, ela pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça.')
        break;

    case 'rei':
        console.log('O Rei movimenta-se apenas 1 casa em qualquer direção. O Rei nunca pode se movimentar para uma casa que esteja sob ataque ou capturar uma peça que esteja defendida por uma peça adversária. No diagrama o rei preto só pode ir para cima, pois indo para a esquerda ou em diagonal estará sob ataque da torre branca. Também há situações especiais nas quais o rei pode andar 2 casas.');
        break;
    
    default:
        console.log('Erro: peça inválida.')
}

// Resultado esperado: "A Torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça."
```

7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
- Porcentagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F
- O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
```
let score = 75;

if (score < 0 || score > 100) {
    console.log("ERRO: nota inválida! Insira um valor que esteja entre 0 e 100")

} else {

    if (score >= 90 && score <= 100) {
        score = "A";
        console.log ("Sua nota é A!");
    
    } else if (score >= 80 && score < 90) {
        score = "B";
        console.log ("Sua nota é B!");
    
    } else if (score >= 70 && score < 80) {
        score = "C";
        console.log ("Sua nota é C!");
    
    } else if (score >= 60 && score < 70) {
        score = "D";
        console.log ("Sua nota é D!");
    
    } else if (score >= 50 && score < 60) {
        score = "E";
        console.log ("Sua nota é E!");
    
    } else {
        score = "F";
        console.log ("Sua nota é F!");
    
    }
}

// Resultado esperado: "Sua nota é C!"
```

8. Escreva um programa que defina três números em *constantes* e retorne "true" se pelo menos uma das três for par. Caso contrário, ele retorna "false".
- Bonus: use somente um *if*.
```
const x = 2;
const y = 7;
const z = 4;

if (x%2 === 0 || y%2 === 0 || z%2 === 0) {
    console.log('True! Pelo menos UM dos valores inseridos é par!');
} else {
    console.log('False! NENHUM dos números inseridos é par!');
}

// Resultado esperado: "True! Pelo menos UM dos valores inseridos é par!"
```

9. Escreva um programa que defina três números em *constantes* e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
- Bonus: use somente um *if*.
```
const x = 1;
const y = 7;
const z = 4;

if (x%2 === 1 || y%2 === 1 || z%2 === 1) {
    console.log('True! Pelo menos UM dos valores inseridos é ímpar!');
} else {
    console.log('False! NENHUM dos números inseridos é ímpar!');
}

// Resultado: "True! Pelo menos UM dos valores inseridos é ímpar!"
```

10. Escreva um programa que se inicie com dois valores em duas *constantes* diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    - valorCustoTotal = valorCusto + impostoSobreOCusto;
    - lucro = valorVenda - valorCustoTotal (lucro de um produto).
```
const custoUnitario = 10;
const custoFinal = custoUnitario + (custoUnitario*0.2);
const venda = 20;
const lucro = venda - custoFinal;

if (custoUnitario < 0 || venda < 0) {
    console.log("Erro: valor(es) inválido(s). Os valores de custo unitário e de venda precisam ser positivos.");

} else {

    console.log(`- Considerando o imposto de 20% incidente sobre o custo unitário, o custo por produto é de ${custoFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};`);

    console.log(`- Esse produto é vendido pelo valor de ${venda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};`);

    console.log (`- O lucro por produto vendido é de ${lucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};`);
    
    console.log(`- Já o lucro da venda de mil produtos é de ${(lucro*1000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.`);
}

// Resultado esperado:
//- Considerando o imposto de 20% incidente sobre o custo unitário, o custo por produto é de R$ 12,00;
//- Esse produto é vendido pelo valor de R$ 20,00;
//- O lucro por produto vendido é de R$ 8,00;
//- Já o lucro da venda de mil produtos é de R$ 8.000,00.
```

11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
- A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
- **INSS (Instituto Nacional do Seguro Social)**
    - Salário bruto até R$ 1.556,94: alíquota de 8%;
    - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
    - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
    - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
- **IR (Imposto de Renda)**
    - Até R$ 1.903,98: isento de imposto de renda;
    - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
    - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
    - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
    - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
>**Exemplo**: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
>- O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
>- Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
>- Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
>   - R$ 2.670,00: salário com INSS já deduzido;
>   - 7.5%: alíquota de imposto de renda;
>   - R$ 142,80 parcela a se deduzir do imposto.
>- Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
>- O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
>
>**Resultado**: R$ 2.612,55.
```
let salarioBruto = 4500;
let valorINSS = 0;
let salarioBase = 0;
let valorIR = 0;

// Inicialização - Impressão do Salário Bruto
console.log(`- Salário Bruto: ${salarioBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);

// Bloqueio do programa caso o valor do Salário Bruto seja igual ou menor que zero.
if (salarioBruto <= 0) {
    console.log("ERRO: Salário Bruto igual ou menor que ZERO.");

} else {

    // Cálculo do INSS
    if (salarioBruto <= 1556.94) {
        valorINSS = salarioBruto*0.08;
        console.log(`- Alíquota do INSS: 8%;`)
        console.log(`- Valor do INSS: ${valorINSS.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
    
        } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
            valorINSS = salarioBruto*0.09;
            console.log(`- Alíquota do INSS: 9%;`)
            console.log(`- Valor do INSS: ${valorINSS.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
        
        } else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
            valorINSS = salarioBruto*0.11;
            console.log(`- Alíquota do INSS: 11%;`)
            console.log(`- Valor do INSS: ${valorINSS.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
        
        } else {
            valorINSS = 570.88;
            console.log(`- Salário Bruto acima de R$ 5.819,82 - Valor fixo de INSS: ${valorINSS.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
        
        }
    
    // Cálculo do Salário-base
    salarioBase = salarioBruto - valorINSS;
    console.log(`- Salário-base para cálculo do IR: ${salarioBase.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
    
    // Cálculo do Imposto de Renda
    if (salarioBase <= 1903.98) {
        valorIR = 0;
        console.log(`- Salário-base é igual ou menor a R$ 1.903,98 - Isento de IR.`);
        
        } else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
            valorIR = (salarioBase*0.075)-142.80;
            console.log(`- Alíquota do IR: 7,5%;`);
            console.log(`- Parcela a deduzir: R$ 142,80;`);
            console.log(`- Valor do IR: ${valorIR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
        
        } else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
            valorIR = (salarioBase*0.15)-354.80;
            console.log(`- Alíquota do IR: 15%;`);
            console.log(`- Parcela a deduzir: R$ 354,80;`);
            console.log(`- Valor do IR: ${valorIR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
        
        } else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
            valorIR = (salarioBase*0.225)-636.13;
            console.log(`- Alíquota do IR: 22,5%;`);
            console.log(`- Parcela a deduzir: R$ 636,13;`);
            console.log(`- Valor do IR: ${valorIR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`); 
        
        } else {
            valorIR = (salarioBase*0.27)-869.36;
            console.log(`- Alíquota do IR: 27%;`);
            console.log(`- Parcela a deduzir: R$ 869,36;`);
            console.log(`- Valor do IR: ${valorIR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.\n`);
        }
    
    // Conclusão - Impressão do Salário Líquido
    console.log(`- Salário Líquido: ${(salarioBase-valorIR).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.`);
}

// Resultado Esperado:
//- Salário Bruto: R$ 4.500,00.
//
//- Alíquota do INSS: 11%;
//- Valor do INSS: R$ 495,00.
//
//- Salário-base para cálculo do IR: R$ 4.005,00.
//
//- Alíquota do IR: 22,5%;
//- Parcela a deduzir: R$ 636,13;
//- Valor do IR: R$ 265,00.
//
//- Salário Líquido: R$ 3.740,01.
```