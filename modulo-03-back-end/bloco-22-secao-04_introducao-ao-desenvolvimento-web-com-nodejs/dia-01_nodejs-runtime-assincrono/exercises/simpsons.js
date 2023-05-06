const fs = require('fs').promises;
const path = require('path');


async function readAllCharactersInfo() {
  console.log('Função A:')
  try {
    const data = await fs.readFile(path.resolve(__dirname, 'simpsons.json'), 'utf-8');
    const characters = JSON.parse(data);

    characters.forEach(({id, name}) => {
      console.log(`${id} - ${name}`);
    });

  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
  console.log('\n')
}

async function readCharactersInfoById(id) {
  console.log('Função B:')
  const data = await fs.readFile(path.resolve(__dirname, 'simpsons.json'), 'utf-8');
  const characters = JSON.parse(data);

  return new Promise((resolve, reject) => {
    const foundCharacter = characters.find((char) => char.id == id)

    if (!foundCharacter) {
      reject(new Error("id não encontrado"));
    }
    
    resolve(foundCharacter)
    console.log(foundCharacter)
    console.log('\n')
  });
}

async function removeCertainCharacters() {
  console.log('Função C:')
  try {
    const originalData = await fs.readFile(path.resolve(__dirname, 'simpsons.json'), 'utf-8');
    const characters = JSON.parse(originalData);
    const newData = characters.filter(({id}) => id !== '6' && id !== '10');

    await fs.writeFile(path.resolve(__dirname, 'simpsons.json'), JSON.stringify(newData));
    console.log('Arquivo escrito com sucesso! IDs 6 e 10 removidos de simpsons.json.');

  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
  console.log('\n')
}

async function createNewCharactersJSON() {
  console.log('Função D:')
  try {
    const originalData = await fs.readFile(path.resolve(__dirname, 'simpsons.json'), 'utf-8');
    const characters = JSON.parse(originalData);
    const newData = characters.filter(({id}) => Number(id) >= 1 && Number(id) <= 4);

    await fs.writeFile(path.resolve(__dirname, 'simpsonFamily.json'), JSON.stringify(newData));
    console.log('Arquivo escrito com sucesso! IDs 1 ao 4 adicionados em simpsonFamily.json.');

  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
  console.log('\n')
}

async function addMuntzToFamilyJSON() {
  console.log('Função E:')
  try {
    const originalData = await fs.readFile(path.resolve(__dirname, 'simpsonFamily.json'), 'utf-8');
    const characters = JSON.parse(originalData);
    const muntzData = {
      id: '8',
      name: 'Nelson Muntz'
    }
    const newData = JSON.stringify([...characters, muntzData])

    await fs.writeFile(path.resolve(__dirname, 'simpsonFamily.json'), newData);
    console.log('Arquivo escrito com sucesso! Nelson Muntz adicionado em simpsonFamily.json.');

  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
  console.log('\n')
}

async function changeMuntzToMaggieInFamilyJSON() {
  console.log('Função F:')
  try {
    const originalData = await fs.readFile(path.resolve(__dirname, 'simpsonFamily.json'), 'utf-8');
    const characters = JSON.parse(originalData);
    const newData = characters.reduce((acc, curr) => {
      if (curr.name === 'Nelson Muntz') {
        curr.id = '5';
        curr.name = 'Maggie Simpson';
      }
      acc.push(curr)
      return acc;
    }, [])
    
    await fs.writeFile(path.resolve(__dirname, 'simpsonFamily.json'), JSON.stringify(newData));
    console.log('Arquivo escrito com sucesso! Nelson Muntz substituído por Maggie Simpson em simpsonFamily.json.');

  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

async function main() {
  await readAllCharactersInfo();
  await readCharactersInfoById(1);
  await removeCertainCharacters();
  await createNewCharactersJSON();
  await addMuntzToFamilyJSON();
  await changeMuntzToMaggieInFamilyJSON();
}

main();