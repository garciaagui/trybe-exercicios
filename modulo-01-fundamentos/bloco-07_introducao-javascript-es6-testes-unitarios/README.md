# &#9889; Atividades de Fixação & Exercícios | Bloco 07 - Dia 01

## &#9989; Exercício 1 - Parte I
1. Faça as modificações necessárias na função abaixo para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
```
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
```
- Modifique a estrutura da função para que ela seja uma `arrow function`.
- Modifique as concatenações para `template literals`.
```
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
    return ifScope;
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    return elseScope;
  }
}

console.log(testingScope(true));
```