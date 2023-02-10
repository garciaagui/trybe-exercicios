# ⚡ Atividades de Fixação & Exercícios | Bloco 30 - Dia 01 (Seção 12)

## ✅ Exercícios do dia

1. O que são os ODMs?

✍️ **Resposta**: ODM consiste basicamente em uma técnica para realizar o mapeamento de schemas em bases de dados orientadas a Documentos, fornecendo funções para realizar operações CRUD (_Create_, *Read*, *Update*, *Delete*) no banco de dados. Com a ajuda de um ODM, você não precisa escrever *queries*; você pode interagir diretamente com o banco de dados e realizar consultas na mesma linguagem do seu código em back-end.

A sigla ODM significa *Object Document Mapping*, ou, em português, *Mapeamento Documento-Objeto*. O mapeamento consiste na interligação de um Documento, que se encontra no banco de dados, a um Objeto (classe) do código da aplicação. Estes são comumente usados com bancos de dados não relacionais ou bancos de dados distribuídos que armazenam os dados em documentos, como o *MongoDB*.

2. Qual a diferença entre ODM e ORM?

✍️ **Resposta**: A diferença mais gritante entre os dois é o tipo de banco de dados para o qual esses mappings de dados são usados. Para bancos relacionais, como PostgreSQL, MySQL e etc., podemos usar um ORM (um exemplo é o Sequelize). Por outro lado, para bancos não relacionais, como MongoDB, Cassandra e etc., podemos usar um ODM (como Mongoose) para obter os mesmos resultados.

Mas a principal diferença é o tipo de mapeamento que é realizado. Por exemplo, o ORM tem como propósito garantir que as entidades e seus relacionamentos estejam mapeados de forma correta no armazenamento e manipulação dos dados, enquanto o ODM visa garantir que as restrições construídas no Schema estejam sendo aplicadas em uma coleção de documentos.

3. De acordo com a documentação do Mongoose, uma Interface, um Schema e uma Model servem para representar o quê? Dê exemplos

✍️ **Resposta**: Uma Interface é um contrato usado para definir a estrutura do documento no MongoDB. Por exemplo: se eu quero ter uma collection chamada User, primeiro eu monto uma estrutura (através de uma interface) e digo para o Mongoose que, lá no MongoDB, User vai ter esse tal formato.

Exemplo de interface para uso no Mongoose:

```
import mongoose from 'mongoose';

interface IUser {
  name: string;
  email: string;
  birthday: Date;
  magicCode: number
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};
```

Já o Schema corresponde às regras/validações que minha interface terá. Por exemplo: Se eu quero dizer que algum campo é obrigatório, ou quero passar um valor default, estes devem ser descritos em um Schema.

Exemplo de schema para uso no Mongoose:

```
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
name: { type: String, required: true, minlength: 4 },
email: { type: String, required: true },
birthday: Date,
magicCode: { type: Number, min: 1, max: 99999 },
status: { type: Boolean, default: 1 },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
});
```

A Model vai juntar os dois, a representação e as regras. Ela é a responsável por prover a interface de comunicação com o banco de dados; é na model que existe nosso métodos de pesquisa (find), criação (create), alteração (update) e assim por diante… Uma model abstrai o que é “igual” para todo o acesso ao banco e entrega essas funções para aplicação.

Exemplo de model para uso no Mongoose:

```
import mongoose from 'mongoose';

const User = mongoose.model<IUser>('User', userSchema);

export default User
```

4. Quais são os 4 pilares da programação orientada a objetos? Discorra sobre a definição de cada um deles e dê exemplos

✍️ **Resposta**:

Abstração: A abstração consiste em esconder os detalhes da implementação de um objeto para outras partes do código. Por exemplo, os métodos expostos pelo pacote do Mongoose para podermos manipular o banco de dados. Em algum momento, na hora de manipular a model do Mongoose, os métodos find e create foram chamados, mas eles não foram escritos e também não se sabe precisamente as suas partes internas.

Encapsulamento: O encapsulamento consiste na exibição e concessão de acesso para quem instancia uma classe. Por exemplo, as classes: criamos métodos e atributos privados que estão encapsulados.

Herança: A herança permite que classes mais específicas sejam criadas a partir de classes mais genéricas. Por exemplo, no mundo animal, se pensarmos em gatos e cachorros, ambos herdariam de uma classe “animal” ou “animal doméstico”, só que cada um tem suas caraterísticas e comportamentos.

Polimorfismo: O polimorfismo é a condição de uma mesma coisa ocorrer de várias formas diferentes. Precisamos da herança para acontecer o polimorfismo. Ainda pensando nos animais, gatos e cachorros emitem sons ou se locomovem, mas isso é feito de forma diferente, e o polimorfismo trata sobre isso.

<br/>

- Obs: Os exercícios a seguir baseiam-se na aplicação vista no conteúdo do dia - TRIX. [Aqui é possível acessar o PR](https://github.com/garciaagui/trybe-poo-trix/pull/1).

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
