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