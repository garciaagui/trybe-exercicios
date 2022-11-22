const express = require('express');

const Book = require('./controllers/books.controller');
const app = express();

app.use(express.json());

app.get('/books', Book.getAll);

app.post('/books', Book.createBook);

app.get('/books/:id', Book.getById);

app.put('/books/:id', Book.updateBook);

app.delete('/books/:id', Book.deleteBook);

module.exports = app;