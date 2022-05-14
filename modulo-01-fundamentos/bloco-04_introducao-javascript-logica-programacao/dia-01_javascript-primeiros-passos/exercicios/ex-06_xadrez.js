// Exercício 6 - Peças de Xadrez

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