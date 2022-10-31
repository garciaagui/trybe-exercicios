const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');
const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const status = 200;
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(status);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const status = 200;
      const output = {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      }

      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(status);
      expect(response.body.chocolate).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const status = 404;
      const output = { message: 'Chocolate not found' };

      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(status);
      expect(response.body).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const status = 200;
      const output = [
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(status);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade total de chocolates', async function () {
      const status = 200;
      const output = { "totalChocolates": 4 }

      const response = await chai
        .request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(status);
      expect(response.body).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates cujos nomes contenham o termo pesquisado', async function () {
      const status = 200;
      const output = [
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ];

      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(status);
      expect(response.body).to.deep.equal(output);
    });

    it('Retorna um array vazio quando nenhum chocolate contém em seu nome o termo pesquisado', async function () {
      const status = 404;

      const response = await chai
        .request(app)
        .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(status);
      expect(response.body).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    sinon.stub(fs.promises, 'writeFile').resolves();
    it('Atualiza as informações do chocolate de acordo com as informações do body', async function () {
      const status = 200;
      const request = {
        name: 'Mint Pretty Good',
        brandId: 2,
      };
      const output = {
        "chocolate": { 
          "id": 1,
          "name": "Mint Pretty Good",
          "brandId": 2
        }
      };

      const response = await chai
        .request(app)
        .put('/chocolates/1').send(request)
      
      expect(response.status).to.be.equal(status);
      expect(response.body).to.deep.equal(output);
    });
    
    it('Retorna status 404 com a mensagem "Chocolate not found" quando não há chocolate com o id passado', async function () {
      const status = 404;
      const request = {
        name: 'Mint Pretty Good',
        brandId: 2,
      };
      const output = { message: "Chocolate not found" };

      const response = await chai
        .request(app)
        .put('/chocolates/555').send(request);
      
      expect(response.status).to.be.equal(status);
      expect(response.body).to.deep.equal(output);
    });
  });
});
