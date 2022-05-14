// Exercício 10 - Lucro de Venda

const custoUnitario = 10;
const custoFinal = custoUnitario + (custoUnitario*0.2);
const venda = 20;
const lucro = venda - custoFinal;

if (custoUnitario < 0 || venda < 0) {
    console.log("Erro: valor(es) inválido(s). Os valores de custo unitário e de venda precisam ser positivos.");

} else {

    console.log(`- Considerando o imposto, o custo por produto é de ${custoFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};`);

    console.log(`- Esse produto é vendido pelo valor de ${venda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};`);

    console.log (`- O lucro por produto vendido é de ${lucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};`);
    
    console.log(`- Já o lucro da venda de mil produtos é de ${(lucro*1000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.`);
}