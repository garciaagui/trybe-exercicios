# ⚡ Atividades de Fixação & Exercícios | Bloco 24 - Dia 01 (Seção 06)

## ✅ Exercícios do dia
1. Crie uma migration para criar uma tabela `books` com as seguintes colunas:
- id: deve ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
- title: deve ser do tipo string e não pode ser nulo;
- author: deve ser do tipo string e não pode ser nulo;
- pageQuantity: deve ser do tipo integer e pode ser nulo;
- createdAt: deve ser do tipo date e não pode ser nulo;
- updatedAt: deve ser do tipo date e não pode ser nulo.

Obs: o método `down` da migration deve ser capaz de remover a tabela.
```
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
```

2. Crie o model `Book` utilizando a API do Sequelize. O model deve conter os seguintes campos:
- title: deve ser do tipo `DateType.STRING`;
- author: deve ser do tipo `DateType.STRING`;
- pageQuantity: deve ser do tipo `DateType.INTEGER`;
- createdAt: deve ser do tipo `DateType.DATE`;
- updatedAt: deve ser do tipo `DateType.DATE`.
```
// src/models/books.model.js

const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  return Book;
};

module.exports = BookModel;
```

3. Crie um service `BooksService` com o método `getAll` para retornar uma lista de livros por meio do model `Book`.
```
// src/services/books.service.js

const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

module.exports = {
  getAll,
};
```

4. Crie um controller `BooksController` com o método `getAll` sendo um middleware para retornar a lista de livros por meio do método `getAll` de `BookService`.
```
// src/controllers/books.controller.js

const BookService = require('../services/books.service');

const error500Message = 'Something went wrong...';

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
};
```

5. Vincule a rota `GET /books` para acessar seu controller.
```
// src/app.js

const express = require('express');

const Book = require('./controllers/books.controller');
const app = express();

app.use(express.json());

app.get('/books', Book.getAll);

module.exports = app;
```

6. No service `BooksService` crie um método `getById` que recebe um id como parâmetro e use o `model Book` para buscar esse livro. Retorne o objeto encontrado pelo model.
```
// src/services/books.service.js

//...

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

module.exports = {
  getAll,
  getById,
};
```

7. No controller `BooksController` crie o método `getById` sendo um middleware que recebe o id como parâmetro de rota e buscar o livro por meio do service. Se o livro não existir a resposta da requisição deve ter o status 404 e o json `{ "message": "Book not found" }`.
```
// src/controllers/books.controller.js

// ...

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
};
```

8. Vincule a rota `GET /books/:id` para acessar seu controller.
```
// src/app.js

// ...

app.get('/books/:id', Book.getById);

// ...
```

9. No service `BooksService` crie um método `create` que recebe um objeto com os atributos `title`, `author`, `pageQuantity` e salve um novo livro utilizando o `model Book`.
```
// src/services/books.service.js

//...

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

module.exports = {
  getAll,
  getById,
  createBook,
};
```

10. No controller `BooksController` crie o método create sendo um middleware que recebe os atributos `title`, `author`, `pageQuantity` do `body` da requisição e salve os dados por meio do service.
```
// src/controllers/books.controller.js

// ...

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
};
```

11. Vincule a rota `POST /books` para acessar seu controller.
```
// src/app.js

// ...

app.post('/books', Book.createBook);

// ...
```

12. No service `BooksService` crie um método update que recebe dois parâmetros: o id do livro a ser alterado e um objeto com os atributos `title`, `author`, `pageQuantity` e atualize o livro utilizando o `model Book`.
```
// src/services/books.service.js

//...

const updateBook = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return updatedBook;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
};
```

13. No controller `BooksController` crie o método update sendo um middleware que recebe o id como parâmetro de rota e os atributos `title`, `author`, `pageQuantity` do body da requisição e salve os dados por meio do service. A requisição deve retornar o status 200 e a mensagem `‘Book updated!’`. Se o livro não for encontrado retornar a mensagem `‘Book not found!’`.
```
// src/controllers/books.controller.js

// ...

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateBook(id, title, author, pageQuantity);

    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book updated!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
};
```

14. Vincule a rota `PUT /books/:id` para acessar seu controller.
```
// src/app.js

// ...

app.put('/books/:id', Book.updateBook);

// ...
```

15. No service `BooksService` crie um método remove que recebe o id do livro a ser removido e remova o mesmo utilizando o `model Book`.
```
// src/services/books.service.js

//...

const deleteBook = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  );

  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
```

16. No controller `BooksController` crie o método remove sendo um middleware que recebe o id como parâmetro de rota e remova o livro por meio do service.
```
// src/controllers/books.controller.js

// ...

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = BookService.deleteBook(id);

    if (deletedBook !== 1) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book deleted!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
```

17. Vincule a rota `DELETE /books/:id` para acessar seu controller.
```
// src/app.js

// ...

app.delete('/books/:id', Book.deleteBook);

// ...

```