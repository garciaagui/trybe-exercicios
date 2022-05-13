// Atividade de Fixação 5 - Switch e Case

applicantStatus = 'aprovada';

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
        console.log("Status não identificado, insira um valor válido.");
}