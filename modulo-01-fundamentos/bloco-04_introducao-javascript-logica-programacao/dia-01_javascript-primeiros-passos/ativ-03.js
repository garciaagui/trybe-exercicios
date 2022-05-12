// Atividade de Fixação 3 - Condições If e Else

const score = 50;

if (score >= 80 && score <= 100) {
    console.log("Parabéns, você foi aprovado(a)!");

} else if (score >= 60 && score < 80) {
    console.log("Você está na nossa lista de espera.");

} else if (score >= 0 && score < 60) {
    console.log("Você foi reprovado(a).");

} else {
    console.log("Nota inválida! Por gentileza, insira um valor entre 0 e 100.");
}

