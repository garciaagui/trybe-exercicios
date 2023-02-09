# ⚡ Atividades de Fixação & Exercícios | Bloco 30 - Dia 01 (Seção 12)

## ✅ Exercícios do dia

- Obs: Os exercícios a seguir baseiam-se no aplicação vista no conteúdo do dia. [Aqui é possível acessar o PR](https://github.com/garciaagui/trybe-poo-trix/pull/1).

5. Agora incremente a aplicação TRIX e adicione mais um endpoint, que deve retornar todas as transferências.

- Criação dos testes (`transfer.test.ts`):

```
// ...

describe('Deveria retornar trasferências registradas no BD', function () {
  it('Deveria retornar todas as transferências', async function () {
    // Arrange

    const transfersInput = [
      {
        payByPerson: 'José',
        payToPerson: 'Fernanda',
        amount: 500,
        key: '329.310.890-36',
        id: '63320b77aa12f0db4f210afe',
      },
      {
        payByPerson: 'Maria',
        payToPerson: 'Juan',
        amount: 500,
        key: '478.966.190-32',
        id: '63320b77aa12f0db4f210b00',
      },
    ];

    const transfersOutput = transfersInput.map((transfer) => new Payment(
      transfer.payByPerson,
      transfer.payToPerson,
      transfer.amount,
      transfer.key,
      transfer.id,
    ));

    sinon.stub(Model, 'find').resolves(transfersOutput);

    // Act
    const service = new TransferService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(transfersOutput);
  });
});

// ...
```

- Criação da função `getAll` na camada Model (`PaymentODM.ts`):

```
/ ...

public async getAll(): Promise<IPayment[]> {
  return this.model.find({});
}

/ ...
```

- Criação da função `getAll` na camada Service (`TransferService.ts`):

```
// ...

public async getAll() {
  const paymentODM = new PaymentODM();
  const transfers = await paymentODM.getAll();
  const transfersArr = transfers.map((transfer) => this.createPaymentDomain(transfer));
  return transfersArr;
}

// ...
```

- Criação da função `getAll` na camada Controller (`TransferController.ts`):

```
/ ...

public async getAll() {
  try {
    const transfers = await this.service.getAll();
    return this.res.status(200).json(transfers);
  } catch (error) {
    this.next(error);
  }
}

/ ...
```

- Por fim, criação da rota (`Routes.ts`):

```
/ ...

routes.get(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).getAll(),
);

/ ...
```

5. Ainda na aplicação TRIX, crie um novo endpoint que deve retornar todas as transferências de uma determinada chave (key).

- Criação dos testes (`transfer.test.ts`):

```
// ...

it('Deveria retornar todas as transferências de uma determinada chave', async function () {
  // Arrange

  const transfersInput = [
    {
      payByPerson: 'José',
      payToPerson: 'Juan',
      amount: 1000,
      key: '478.966.190-32',
      id: '63320b77aa12f0db4f210afe',
    },
    {
      payByPerson: 'Joaquim',
      payToPerson: 'Juan',
      amount: 700,
      key: '478.966.190-32',
      id: '63320b77aa12f0db4f210b00',
    },
  ];

  const transfersOutput = transfersInput.map((transfer) => new Payment(
    transfer.payByPerson,
    transfer.payToPerson,
    transfer.amount,
    transfer.key,
    transfer.id,
  ));

  sinon.stub(Model, 'find').resolves(transfersOutput);

  // Act
  const service = new TransferService();
  const result = await service.getByKey('478.966.190-32');

  // Assert
  expect(result).to.be.deep.equal(transfersOutput);
});

it('Deveria retornar uma exceção quanda chave for inválida', async function () {
  // Arrange

  sinon.stub(Model, 'find').resolves([]);

  // Act
  try {
    const service = new TransferService();
    await service.getByKey('INVALID KEY');
  } catch (error) {
    // Assert
    expect((error as Error).message).to.be.equal('Invalid Key!');
  }
});

// ...
```

- Criação da função `getByKey` na camada Model (`PaymentODM.ts`):

```
/ ...

public async getByKey(key: string): Promise<IPayment[]> {
  return this.model.find({ key });
}

/ ...
```

- Criação da função `getByKey` na camada Service (`TransferService.ts`):

```
// ...

public async getByKey(key: string) {
  const paymentODM = new PaymentODM();
  const transfers = await paymentODM.getByKey(key);
  const transfersArr = transfers.map((transfer) => this.createPaymentDomain(transfer));
  return transfersArr;
}

// ...
```

- Criação da função `getByKey` na camada Controller (`TransferController.ts`):

```
/ ...

public async getByKey() {
  try {
    const transfers = await this.service.getByKey(this.req.params.key);
    return this.res.status(200).json(transfers);
  } catch (error) {
    this.next(error);
  }
}

/ ...
```

- Por fim, criação da rota (`Routes.ts`):

```
/ ...

routes.get(
  '/transfer/:key',
  (req, res, next) => new TransferController(req, res, next).getByKey(),
);

/ ...
```
