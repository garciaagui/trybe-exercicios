// Exercício 11 - Cálculo de Salário

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