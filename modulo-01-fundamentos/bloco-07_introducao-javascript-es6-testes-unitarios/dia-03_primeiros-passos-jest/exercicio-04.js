function encode(decodedPhrase) {
  let coded = '';
  for (let i = 0; i < decodedPhrase.length; i += 1) {
    let auxiliar = decodedPhrase[i];
    switch (auxiliar) {
    case 'a': auxiliar = 1; break;
    case 'e': auxiliar = 2; break;
    case 'i': auxiliar = 3; break;
    case 'o': auxiliar = 4; break;
    case 'u': auxiliar = 5; break;
    default:
    }
    coded += auxiliar;
  }
  return coded;
}

function decode(codedPhrase) {
  let decoded = '';
  for (let i = 0; i < codedPhrase.length; i += 1) {
    let auxiliar = codedPhrase[i];
    switch (auxiliar) {
    case '1': auxiliar = 'a'; break;
    case '2': auxiliar = 'e'; break;
    case '3': auxiliar = 'i'; break;
    case '4': auxiliar = 'o'; break;
    case '5': auxiliar = 'u'; break;
    default:
    }
    decoded += auxiliar;
  }
  return decoded;
}

module.exports = { encode, decode };
