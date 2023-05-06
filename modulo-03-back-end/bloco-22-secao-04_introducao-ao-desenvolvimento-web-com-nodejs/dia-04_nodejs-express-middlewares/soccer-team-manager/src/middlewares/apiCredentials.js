const fs = require('fs/promises');
const { join } = require('path');
const filePath = '.././authdata.json';

const fullPath = join(__dirname, filePath)

// como vamos ler arquivos assincronamente, precisamos do async
module.exports = async function apiCredentials(req, res, next) {

  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');

  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authdata = await fs.readFile(fullPath, { encoding: 'utf-8' });

  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    req.teams = authorized[token];
    next();
  } else {
    res.sendStatus(401);
  }
};