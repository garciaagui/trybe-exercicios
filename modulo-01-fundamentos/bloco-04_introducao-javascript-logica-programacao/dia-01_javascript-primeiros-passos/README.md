# &#9889; Atividades de Fixação & Exercícios | Bloco 04 - Dia 01

### Obs.: Para os commits 3 e 4, considerar "Atividade de Fixação" ao invés de "Exercício".

## &#9989; Atividade de Fixação 1 - Variáveis

1. Crie uma constante chamada *myName* e atribua a ela o seu nome (Exemplo: Carolina).
```
const myName = "Guilherme";
```

2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
```
"Porto Feliz";
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
if (score >= 80) {
    console.log("Parabéns, você foi aprovado(a)!");
} else if (score >= 60 && score < 80) {
    console.log("Você está na nossa lista de espera.");
} else {
    console.log("Você foi reprovado(a).")
}
```

3. Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
```

```
4. Altere o valor da nota para verificar se as condições que você implementou funcionam;
```

```