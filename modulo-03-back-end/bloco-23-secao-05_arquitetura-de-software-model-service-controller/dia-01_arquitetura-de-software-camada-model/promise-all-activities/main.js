const fs = require('fs').promises;
const { resolve } = require('path');

async function main() {
  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createsFilePromises = arr
    .map((str, index) => fs.writeFile(resolve(__dirname, `./file${index + 1}.txt`), str));

  await Promise.all(createsFilePromises);

  const readFilesPromises = arr
    .map((_, index) => fs.readFile(resolve(__dirname, `./file${index + 1}.txt`), 'utf-8'));

  const fileContents = await Promise.all(readFilesPromises);

  const newFileContent = fileContents.join(' ');

  await fs.writeFile(resolve(__dirname, './fileAll.txt'), newFileContent);
}

main();

// Para testar a função, exclua os arquivos 'files' e execute a função...