// Exercício 7 - Notas

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