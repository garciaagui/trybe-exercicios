// Atividade de Fixação 4.1 - Operadores AND (&&)

const currentHour = 0;
let message = ""

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