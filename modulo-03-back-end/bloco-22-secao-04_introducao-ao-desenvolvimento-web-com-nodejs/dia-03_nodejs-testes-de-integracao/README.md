# ⚡ Atividades de Fixação & Exercícios | Bloco 22 - Dia 03 (Seção 04)

- Obs.: Os Exercícios do dia dão sequência à aplicação "Cacau Trybe", exemplo utilizado nas explicações do dia.

## ✅ Exercícios do dia
### Os próximos dois exercícios referem-se ao contrato `GET /chocolates/total`.
- Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados;
- Código HTTP: `200 - OK`;
- Body da requisição (exemplo):
```
{
  "totalChocolates": 4 // quantidade de chocolates na base de dados
}
```

1. Crie os testes de integração para o endpoint `GET /chocolates/total`.
- Crie um caso para o código retornado;
- Crie outro caso para o retorno esperado.
```
// Arquivo chocolates.test.js

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
```

2. Implemente o endpoint `GET /chocolates/total` na aplicação.
- Crie um novo endpoint retornando o total de chocolates na base de dados;
- Depois de implementar, verifique se os testes passam com sucesso.
```
// Arquivo app.js

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});
```

### Os próximos dois exercícios referem-se ao contrato `GET /chocolates/search`.
- Esse endpoint deve retornar os chocolates que contém uma determinada palavra em seu nome;
- Parâmetros de consulta (`query params`): name, tipo string;
- Em caso de sucesso (ex.: `/chocolates/search?name=Mo`), o código HTTP deverá ser `200` e o body da requisição pode seguir o modelo abaixo.

```
[
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
]
```
- Caso não haja chocolates com a string passada, o código HTTP deverá ser `404` e o retorno será uma array vazia.

3. (BÔNUS) Crie os testes de integração para o endpoint `GET /chocolates/search`.
- Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado;
- Crie um caso para quando não existirem chocolates com o nome informado;
- Verifique se os testes falham com sucesso.
```
// Arquivo chocolates.test.js

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
```

4. (BÔNUS) Implemente o endpoint `GET /chocolates/search` na aplicação.
- Crie um novo endpoint retornando os chocolates que tem a string name na base de dados;
- Depois de implementar, verifique se os testes passam com sucesso.
```
// Arquivo app.js

app.get('/chocolates/search', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  const filteredChocolates = chocolates
    .filter(({name}) => name.toLowerCase().includes(req.query.name.toLowerCase()));

  if(!filteredChocolates.length) return res.status(404).json([]);

  res.status(200).json(filteredChocolates);
});
```

### Os próximos dois exercícios referem-se ao contrato `PUT /chocolates/:id`.
- Esse endpoint deve atualizar um chocolate que existe na base de dados;
- Em caso de sucesso (ex.: `/chocolates/1`), o código HTTP deverá ser `200` e o body da requisição e resposta podem seguir os modelos abaixo.

```
// Body requisição

{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```
```
// Body resposta

{
  "chocolate": { 
    "id": 1,
    "name": "Mint Pretty Good",
    "brandId": 2
  }
}
```
- Caso não haja um chocolate com a `id` passada, uma mensagem de erro deve ser retornada (exemplo abaixo) com o código HTTP `404`.
```
{ 
  "message": "chocolate not found"
}
```

5. (BÔNUS) Crie os testes de integração para o endpoint `PUT /chocolates/:id`.
- Crie um caso verificando o código e o retorno esperado para quando o chocolate é atualizado;
- Crie um caso para quando não existe chocolate com o `id` informado;
- Verifique se os testes falham com sucesso.
```
// Arquivo chocolates.test.js

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
```

6. (BÔNUS) Implemente o endpoint `PUT /chocolates/:id` na aplicação
- Crie um novo endpoint que atualiza um chocolate na base de dados;
- Depois de implementar, verifique se os testes passam com sucesso.
```
// Arquivo cacauTrybe.js

const updateChocolateById = async (id, name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);

  chocolateToUpdate.name = name;
  chocolateToUpdate.brandId = brandId;

  await writeCacauTrybeFile(cacauTrybe);
  return chocolateToUpdate;
}
```
```
// Arquivo app.js

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;

  const chocolate = await cacauTrybe.getChocolateById(Number(id));

  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });

  const chocolateToUpdate = await cacauTrybe.updateChocolateById(Number(id), name, brandId);
  res.status(200).json({ chocolate: chocolateToUpdate });
});
```
