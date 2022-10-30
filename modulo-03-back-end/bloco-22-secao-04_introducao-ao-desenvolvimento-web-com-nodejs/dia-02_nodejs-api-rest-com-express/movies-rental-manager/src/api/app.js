const express = require('express');
const { readMovies, updateMoviesData } = require('../utils/handleJSON');

const app = express();

const OK = 200;
const CREATED = 201;


app.use(express.json());

app.get('/', (req, res) => res.status(OK).json({ message: 'Tudo OK' }));

app.get('/movies', async (req, res) => {
  try {
    const movies = await readMovies();
    res.status(OK).json({ movies });
  }
  catch (error){
    res.status(500).send({ message: error.message });
  }
});

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

module.exports = app;