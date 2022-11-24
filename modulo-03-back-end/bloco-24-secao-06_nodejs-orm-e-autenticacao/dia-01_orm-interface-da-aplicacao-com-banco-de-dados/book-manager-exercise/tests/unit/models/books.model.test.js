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