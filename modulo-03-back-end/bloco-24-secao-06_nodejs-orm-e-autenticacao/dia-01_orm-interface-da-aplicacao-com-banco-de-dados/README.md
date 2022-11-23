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
    await queryInterface.createTable('Books', {
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
    await queryInterface.dropTable('Books');
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

// ...

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

// ...

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

// ...

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

// ...

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


## ✅ Exercícios bônus
1. Crie um `seeder` usando o `Sequelize-CLI`, populando a sua base com pelo menos um livro.
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Fire and Blood',
        author: 'George R.R. Martin',
        pageQuantity: 736,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'The Silmarillion',
        author: 'J. R. R. Tolkien',
        pageQuantity: 416,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Watchmen',
        author: 'Alan Moore',
        pageQuantity: 448,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
```

2. Crie um método `getByAuthor` em `BooksService` para buscar uma lista de livros por author.
```
// src/services/books.service.js

// ...

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author } });

  return books;
};

// ...

module.exports = {
  getAll,
  getById,
  getByAuthor,
  createBook,
  updateBook,
  deleteBook,
};
```

3. Refatore o método `getAll` de forma que ser for enviado uma `query string author` ele seja capaz de pegar a lista usando o método `getByAuthor` de `BooksService`;
```
// src/controllers/books.controller.js

// ...

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books

    if (author) {
      books = await BookService.getByAuthor(author);
      console.log(books)
      if (!books.length) return res.status(404).json({ message: 'No books found ' });
      return res.status(200).json(books);
    }

    books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

// ...
```

4. Refatore os métodos `getAll` e `getByAuthor` para que a lista de livros seja ordenada pelo título em ordem alfabética;
```
// src/services/books.service.js

// ...

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

  return books;
};

// ...

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });

  return books;
};

// ...
```

5. Crie uma migration para adicionar a coluna publisher (editora) na tabela `Books`. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição;
```
// Nova migration - add-column-publisher

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', {
      allowNull: false,
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  }
};
```
```
// src/models/books.model.js

const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return Book;
};

module.exports = BookModel;
```
```
// src/services/books.service.js

// ...

const createBook = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const updateBook = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );

  return updatedBook;
};

// ...
```
```
// src/controllers/books.controller.js

// ...

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity, publisher);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateBook(id, title, author, pageQuantity, publisher);

    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book updated!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

// ...
```

6. Escreva testes unitários para o model;
```
// tests/unit/models/books.model.test.js

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/books.model');

describe('Testes de unidade do model de Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();
  const properties = ['title', 'author', 'pageQuantity', 'publisher', 'createdAt', 'updatedAt'];

  describe('Verifica se possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('Verifica se possui as devidas propriedades', () => {
    properties.forEach(checkPropertyExists(book));
  });
});
```

7. Escreva testes unitários para o service criado, isolando a camada de models.
```
// tests/unit/services/books.service.test.js

const { expect } = require('chai');
const { stub } = require('sinon');

const { Book } = require('../../../src/models');
const BookService = require('../../../src/services/books.service');

const testBook = {
  id: 1,
  title: "Watchmen",
  author: "Alan Moore",
  pageQuantity: 448,
  publisher: 'DC Comics',
  createdAt: "2022-11-22 01:00:00",
  updatedAt: "2022-11-22 01:00:00",
};

describe('Testes de unidade do service de Book', () => {
  describe('Listagem de livros - #getAll', () => {
    const findAllStub = stub(Book, 'findAll');
    let books;

    describe('Quando não existe nenhum livro cadastrado', () => {
      before(async () => {
        findAllStub.resolves([]);
        books = await BookService.getAll();
      });

      after(() => { findAllStub.reset(); });

      it('A função Book.findAll é chamada', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('A resposta é um array', () => {
        expect(books).to.be.an('array');
      });

      it('O array está vazio', () => {
        expect(books).to.be.empty;
      });
    });

    describe('Quando existem livros cadastrados', () => {
      before(async () => {
        findAllStub.resolves([testBook]);
        books = await BookService.getAll();
      });

      after(() => { findAllStub.restore(); });

      it('A função Book.findAll é chamada', async () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('A resposta é um array', async () => {
        expect(books).to.be.an('array');
      });

      it('O array contém o(s) livro(s) encontrado(s)', async () => {
        expect(books).to.be.deep.equal([testBook]);
      });
    });
  });

  describe('Listagem de livros por ID - #getById', () => {
    const findByPkStub = stub(Book, 'findByPk');
    let book;

    describe('Quando não existe livro vinculado ao ID passado', () => {
      before(async () => {
        findByPkStub.resolves(null);
        book = await BookService.getById(1000);
      });

      after(() => {
        findByPkStub.reset();
        book = null;
      });

      it('A função Book.findByPk é chamada', async () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });

      it('A resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.be.null
      });
    });

    describe('Quando existe livro vinculado ao ID passado', () => {
      before(async () => {
        findByPkStub.resolves(testBook);
        book = await BookService.getById(1);
      });

      after(() => {
        findByPkStub.reset();
        book = null;
      });

      it('A função Book.findByPk é chamada', async () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });

      it('A resposta é um objeto contendo os dados do livro encontrado', async () => {
        expect(book).to.deep.equal(testBook);
      });
    });
  });

  describe('Adição de livros - #createBook', () => {
    describe('Adição com dados válidos', () => {
      const createStub = stub(Book, 'create');
      const testBook = {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        pageQuantity: 689,
        publisher: "Doubleday"
      };
      let book;

      before(async () => {
        createStub.resolves({
          id: 2,
          ...testBook,
          updatedAt: "2022-01-28T15:45:28.398Z",
          createdAt: "2022-01-28T15:45:28.398Z"
        });

        book = await BookService.createBook(testBook);
      });

      after(() => {
        createStub.reset();
      });

      it('A função Book.create é chamada', async () => {
        expect(Book.create.calledOnce).to.be.equals(true);
      });

      it('A resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.include(testBook); // como o objeto retornado tem menos atributos do que os esperados usamos o matcher include
      });
    });
  });

  describe('Atualização de livros - #updateBook', () => {
    const updateStub = stub(Book, 'update');

    const testBook = {
      title: "The Va Cinci Dode",
      author: "Ban Drown",
      pageQuantity: 589,
      publisher: "Tripleday"
    };

    let updated;

    describe('Quando não existe o livro', () => {
      before(async () => {
        updateStub.resolves([false]);
        updated = await BookService.updateBook(1000, testBook)
      });

      after(() => { updateStub.reset(); });

      it('A função Book.update é chamada', async () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });


      it('Retorna 0', async () => {
        expect(updated).to.be.false;
      });
    });

    describe('Quando existe o livro', () => {
      before(async () => {
        updateStub.resolves([true]);
        updated = await BookService.updateBook(2, testBook)
      });

      after(() => {
        updateStub.reset();
      });

      it('A função Book.update é chamada', async () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });


      it('Retorna 1', async () => {
        expect(updated).to.be.true;
      });
    });
  });

  describe('Exclusão de livros - #deleteBook', () => {
    const removeStub = stub(Book, 'destroy');

    let removed;

    describe('Quando não existe o livro', () => {
      before(async () => {
        removeStub.resolves(false);
        removed = await BookService.deleteBook(1000)
      });

      after(() => {
        removeStub.reset();
      });

      it('A função Book.destroy é chamada', async () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });


      it('Retorna false', async () => {
        expect(removed).to.be.eq(false);
      });
    });

    describe('Quando existe o livro', () => {
      before(async () => {
        removeStub.resolves(true);
        removed = await BookService.deleteBook(2);
      });

      after(() => {
        removeStub.reset();
      });

      it('A função Book.destroy é chamada', async () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });

      it('Retorna true', async () => {
        expect(removed).to.be.eq(true);
      });
    });
  });
})
```