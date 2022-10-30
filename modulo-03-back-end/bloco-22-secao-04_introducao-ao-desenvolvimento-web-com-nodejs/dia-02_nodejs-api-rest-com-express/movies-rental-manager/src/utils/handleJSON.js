const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '../movies.json');

async function readMovies() {
  try {
    const movies = JSON.parse(await readFile(filePath));
    return movies;
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

async function updateMoviesData(newData) {
  try {
    await writeFile(filePath, JSON.stringify(newData));
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

module.exports = {readMovies, updateMoviesData};