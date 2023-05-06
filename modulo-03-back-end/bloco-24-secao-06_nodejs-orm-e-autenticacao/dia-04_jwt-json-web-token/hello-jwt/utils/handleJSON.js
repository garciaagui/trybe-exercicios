const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '../models/data/users.json');

async function checkUser(username) {
  try {
    const allUsers = JSON.parse(await readFile(filePath));
    const user = allUsers.find((user) => user.username === username);
    return user;
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

async function signupUser(newData) {
  try {
    const users = JSON.parse(await readFile(filePath));
    users.push(newData);
    console.log(users);
    await writeFile(filePath, JSON.stringify(users));
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

module.exports = { checkUser, signupUser };