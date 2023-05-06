# ⚡ Atividades de Fixação & Exercícios | Bloco 22 - Dia 02 (Seção 04)

## ✅ Exercícios do dia
1. Qual é a função do código de status `400` e `422`?

R.: O código 400 (Bad Request) indica que o servidor não pode processar a requisição devido a algo entendido como um erro vindo do cliente. Já o código 422 (Unprocessable Entity) indica que o servidor entende o conteúdo e a sintaxe da requisição, mas não pode processar as instruções presentes na requisição devido a erros semânticos.

2. Qual é a função do código de status `401`?

R.: O código 401 (Unauthorized) indica que o cliente não possui as credencias de autenticação válidas para a requisição.

3. Crie um servidor Node.js utilizando o framework Express.
```
// Arquivo src/api/app.js

const express = require('express');

const app = express();

module.exports = app;
```
```
// Arquivo src/api/server.js

const app = require('./app');

const PORT = 3001;

app.listen(PORT, () => console.log('server running on port 3001'));
```

4. Crie uma função de leitura do `JSON` com o modulo `fs`.
```
// Arquivo src/utils/handleJSON.js

const { readFile } = require('fs').promises;
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

module.exports readMovies;
```

5. Crie um endpoint do tipo `GET` com a rota `/movies/:id`, que possa listar um filme do `JSON` por `id`.
```
// Arquivo src/api/app.js

// ...

const readMovies = require('../utils/handleJSON');

// ...

const OK = 200;

// ...

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readMovies();
    const selectedMovie = movies.find(({id}) => id === Number(req.params.id));

    res.status(OK).json({ selectedMovie });
  }
  catch (error){
    res.status(500).send({ message: error.message });
  }
});

// ...
```

6. Crie um endpoint do tipo `GET` com a rota `/movies`, que possa listar todos os filmes do `JSON`.
```
// Arquivo src/api/app.js

// ...

app.get('/movies', async (req, res) => {
  try {
    const movies = await readMovies();
    res.status(OK).json({ movies });
  }
  catch (error){
    res.status(500).send({ message: error.message });
  }
});

// ...
```

7. Crie um endpoint do tipo `POST` com a rota `/movies`, para cadastrar um novo filme no `JSON`.
```
// Arquivo src/utils/handleJSON.js

const { readFile, writeFile } = require('fs').promises;

// ...

async function updateMoviesData(newData) {
  try {
    await writeFile(filePath, JSON.stringify(newData));
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

module.exports = {readMovies, updateMoviesData};
```

```
// Arquivo src/api/app.js

// ...

app.use(express.json());

// ...

const CREATED = 201;

// ...

app.post('/movies', async (req, res) => {
  try {
    const movies = await readMovies();
    const lastId = movies[movies.length - 1].id
    const newMovie = { "id": lastId + 1, ...req.body };
  
    movies.push(newMovie);
    updateMoviesData(movies);
  
    res.status(CREATED).json({ newMovie });
  }
  catch (error){
    res.status(500).send({ message: error.message });
  }
});

// ...
```

8. Crie um endpoint do tipo `PUT` com a rota `/movies/:id`, que possa editar informações de um filme do `JSON`.
```
// Arquivo src/api/app.js

// ...

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;

    const movies = await readMovies();
    const updateMovie = movies.find((movie) => movie.id === Number(id));

    updateMovie.movie = movie;
    updateMovie.price = price;
  
    updateMoviesData(movies);
    res.status(OK).json({ updateMovie });
  }
  catch (error){
    res.status(500).send({ message: error.message });
  }
});

// ...
```

9. Crie um endpoint do tipo `DELETE` com a rota `/movies/:id` que possa deletar um filme do `JSON`.
```
// Arquivo src/api/app.js

// ...

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readMovies();
  
    const arrayPosition = movies.findIndex((movie) => movie.id === Number(id));
    movies.splice(arrayPosition, 1);
  
    updateMoviesData(movies);
    res.status(204).end();
  }
  catch (error){
    res.status(500).send({ message: error.message });
  }
});

// ...
```

10. (BÔNUS) Crie um endpoint do tipo `GET` com a rota `/movies/search`, que possa listar todos os filmes do `JSON`.
- A rota deve receber a informação por `query` e a chave deve-se chamar `q`. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.
```
// Arquivo src/api/app.js

// ...

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readMovies();
    if (q) {
      const filteredMovies = movies.filter(({movie}) => movie.includes(q));
      return res.status(OK).json(filteredMovies);
    }
    res.status(OK).end();
  }
  catch (error){
    res.status(500).send({ message: error.message });
  }
});

// ...
```