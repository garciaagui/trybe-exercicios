# ⚡ Atividades de Fixação & Exercícios | Bloco 22 - Dia 04 (Seção 04)

## ✅ Atividades de Fixação | Middlewares
- Obs.: As atividades a seguir dão sequência à aplicação "Soccer Team Manager".
1. Crie um middleware `existingId` para garantir que o `id` passado como parâmetro na rota `GET /teams/:id` existe no objeto `teams`. Refatore essa rota para usar o middleware.
```
// Arquivo app.js

// ...

const existingId = (teamsData) => {
  return (req, res, next) => {
    const isThisIdValid = teamsData.some((team) => team.id === Number(req.params.id))
    if (isThisIdValid) next();
    else res.status(400).send({message: 'Id inválido'});
  }
}

// ...

app.get('/teams/:id', existingId(teams), (req, res) => {
  const team = teams.find(t => t.id === Number(req.params.id));
  res.status(200).json(team);
});

// ...
```

2. Reaproveite esse middleware e refatore as rotas `PUT /teams/:id` e `DELETE /teams/:id` para usarem ele também.
```
// Arquivo app.js

// ...

app.put('/teams/:id', existingId(teams), validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId(teams), (req, res) => {
  const team = teams.find(t => t.id === Number(req.params.id));
  const index = teams.indexOf(team);

  teams.splice(index, 1);

  res.sendStatus(204);
});

// ...
```

3. Mova o middleware `validateTeam` para o arquivo `src/middlewares/validateTeam.js`, mas continue usando o middleware nas rotas `POST /teams` e `PUT /teams/:id`.
```
// Arquivo validateTeam.js

const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  }
};

module.exports = validateTeam;

```
```
// Arquivo app.js

// ...

const validateTeam = require('./middlewares/validateTeam');

// ...

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId(teams), validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  
  res.status(201).json(updated);
});

// ...
```

## ✅ Exercícios do dia
### PARTE I
Uma startup de Ecoturismo te procurou para construir uma aplicação back-end que auxilie na criação e compartilhamento de locais ainda não registrados na natureza. O objetivo é valorizar e promover a capacidade turística do Brasil e os principais requisitos da API que essa startup solicitou são:

- Cadastrar novas atividades de ecoturismo com as seguintes informações:
- Nome da atividade;
- Preço;
- Descrição: contendo avaliação, dificuldade e data de criação da atividade.

Analisando os requisitos acima, a pessoa Tech Lead identificou as seguintes chaves para a requisição:
```
{
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}
```
Agora, faça os exercícios abaixo:

1. Crie um servidor Node.js utilizando o framework `Express` com a estrutura inicial do `app.js` e `server.js` e prepare o ambiente instalando a biblioteca `nodemon`.

R.: Feita as devidas instalações, os arquivos `app.js` e `server.js` ficaram da seguinte maneira:
```
// Arquivo app.js

const express = require('express');

const app = express();

module.exports = app;
```
```
// Arquivo server.js

const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));
```

2. Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo `JSON`.
```
// Arquivo app.js

// ...

app.use(express.json());

// ...
```

3. Crie um endpoint `POST` com a rota `/activities` para adicionar novas atividades. Ela deve:
- Retornar o status `201` e uma mensagem de sucesso quando a atividade tiver sido inserida (formato `json`);

R.: Embora não tenha sido solicitado no exercício, foi criado a estrutura inicial de rotas em um arquivo à parte - `activitiesRouter.js`, cujo diretório é `/routes`.
```
// Arquivo activitiesRouter.js

const express = require('express');
const router = express.Router();

const CREATED_CODE = 201;

router.post('/', (_req, res) => {
  res.status(CREATED_CODE).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = router;
```
```
// Arquivo app.js

// ...

app.use('/activities', activitiesRouter);

// ...
```

4. Crie um middleware de validação para a chave `name`. Ela deve:
- Ser obrigatória;
- Retornar o status `400` e uma mensagem em formato `json` caso ele não seja preenchido;
- Ter mais de 4 caracteres;
- Retornar o status `400` e uma mensagem em formato `json` caso ele não tenha mais de 4 caracteres.

Observação: Todos os middlewares estarão em `/src/middlewares`.
```
// Arquivo validateTeam.js

module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const { name } = req.body;

  if (!name || !name.length) {
    res.status(BAD_REQUEST_CODE).json({ message: "O campo name é obrigatório" });
  }
  else if (name <= 4) {
    res.status(BAD_REQUEST_CODE).json({ message: "O campo name deve ter mais de 4 caracteres" });
  }
  else {
    next();
  }
};
```
```
// Arquivo activitiesRouter.js

// ...

const validateName = require('../middlewares/validateName')

// ...

router.post('/', validateName, (_req, res) => {
  res.status(CREATED_CODE).json({ message: "Atividade cadastrada com sucesso!" });
});

// ...
```

5. Crie um middleware de validação para a chave `price`. Ela deve:
- Ser obrigatória;
- Retornar o status `400` e uma mensagem em formato `json` caso ele não seja preenchido;
- Ser um número maior ou igual a zero;
- Retornar o status `400` e uma mensagem em formato `json` caso o número não seja maior ou igual a zero.

```
// Arquivo validatePrice.js

module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const { price } = req.body;

  if (price === undefined) {
    res.status(BAD_REQUEST_CODE).json(
      { message: 'O campo price é obrigatório' },
    );
  } else if (Number.isNaN(price) || Number(price) < 0) {
    res.status(BAD_REQUEST_CODE).json(
      { message: 'O campo price deve ser um número maior ou igual a zero' },
    );
  } else {
    next();
  }
};
```
```
// Arquivo activitiesRouter.js

// ...

const validatePrice = require('../middlewares/validatePrice')

// ...

router.post('/', validateName, validatePrice, (_req, res) => {
  res.status(CREATED_CODE).json({ message: "Atividade cadastrada com sucesso!" });
});

// ...
```

6. Crie um middleware de validação para a chave `description` que possui as chaves `createdAt`, `rating` e `difficulty`. Ela deve:
- Ter todas as chaves obrigatórias;
- Retornar o status 400 para todas e uma mensagem em formato json caso suas chaves não sejam preenchidas.
```
// Arquivo validateDescription.js

const validateKeys = (descriptionValue, res, value) => {
  const BAD_REQUEST_CODE = 400;

  if (!descriptionValue) {
    return res.status(BAD_REQUEST_CODE).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;

  return validateKeys(description, res, 'description')
    || validateKeys(description.createdAt, res, 'createdAt')
    || validateKeys(description.rating, res, 'rating')
    || validateKeys(description.difficulty, res, 'difficulty')
    || next();
};
```
```
// Arquivo activitiesRouter.js

// ...

const validateDescription = require('../middlewares/validateDescription')

// ...

router.post('/',
  validateName,
  validatePrice,
  validateDescription, (_req, res) => {
    res.status(CREATED_CODE).json({ message: 'Atividade cadastrada com sucesso!' });
  });

// ...
```

7. Crie um middleware de validação para a chave `createdAt`. Ela deve:
- Ter uma data válida no formato `dd/mm/aaaa`;
- Retornar o status `400` e uma mensagem em formato `json` caso o valor não esteja no formato correto.
```
// Arquivo validateCreatedAt.js

module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const DATE_REGEX = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  const { createdAt } = req.body.description;

  if (!createdAt.match(DATE_REGEX)) {
    res.status(BAD_REQUEST_CODE).json({
      message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'',
    });
  } else {
    next();
  }
};
```
```
// Arquivo activitiesRouter.js

// ...

const validateCreatedAt = require('../middlewares/validateCreatedAt')

// ...

router.post('/',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt, (_req, res) => {
    res.status(CREATED_CODE).json({ message: 'Atividade cadastrada com sucesso!' });
  });

// ...
```

8. Crie um middleware de validação para a chave `rating`. Ela deve:
- Ter um número inteiro entre 1 e 5;
- Retornar o status `400` e uma mensagem em formato `json` caso o valor não seja um número interio entre 1 e 5.
```
// Arquivo validateRating.js

module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;
  const { rating } = req.body.description;

  if (!Number.isInteger(rating) || Number(rating) < 1 || Number(rating) > 5) {
    res.status(BAD_REQUEST_CODE).json({
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    });
  } else {
    next();
  }
};
```
```
// Arquivo activitiesRouter.js

// ...

const validateRating = require('../middlewares/validateRating')

// ...

router.post('/',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating, (_req, res) => {
    res.status(CREATED_CODE).json({ message: 'Atividade cadastrada com sucesso!' });
  });

// ...
```

9. Crie um middleware de validação para a chave `difficulty`. Ela deve:
- Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
- Retornar o status `400` e uma mensagem em formato `json` caso o valor não seja exatamente uma das opções.
```
// Arquivo validateDifficulty.js

module.exports = (req, res, next) => {
  const BAD_REQUEST_CODE = 400;

  const { difficulty } = req.body.description;

  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.some((e) => e === difficulty)) {
    res.status(BAD_REQUEST_CODE).json({
      message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'',
    });
  } else {
    next();
  }
};
```
```
// Arquivo activitiesRouter.js

// ...

const validateDifficulty = require('../middlewares/validateDifficulty')

// ...

router.post('/',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty, (_req, res) => {
    res.status(CREATED_CODE).json({ message: 'Atividade cadastrada com sucesso!' });
  });

// ...
```

### PARTE II
Parabéns! Seu cliente ficou muito satisfeito com o trabalho e solicitou mais alguns requisitos para você implementar. Veja abaixo:
- Cadastrar pessoas usuárias das atividades de ecoturismo com as seguintes informações:
  - Email;
  - Senha;
  - Primeiro nome;
  - Telefone.
- Permitir que somente pessoas cadastradas realizem o cadastro de novas atividades de ecoturismo.

Agora, faça os exercícios abaixo:

10. Crie um endpoint `POST` com a rota `/signup` para cadastrar pessoas usuárias. Ela deve:
- Ter os campos `email`, `password`, `firstName` e `phone` obrigatoriamente;
- Caso os campos não sejam preenchidos, retornar o status `401 - Unauthorized` e uma mensagem (formato `json`);
- Gerar um token aleatório válido;
- Retornar o status `200` e uma mensagem contendo o token (formato `json`).

R.: Primeiramente, foi criada uma rota específica para signup (`signupRouter.js`), garantindo uma estrutura organizada de rotas. Após isso, foram criadas as validações para os campos necessários. Por fim, foi criada e implementada a função que gera um token aleatório, utilizando o módulo crypto do Node.

- Criação e implementação das validações:
```
// Arquivo validateUserEmail.js

module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { email } = req.body;
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

  if (!email || !email.length) {
    res.status(UNAUTHORIZED_CODE).json({
      message: 'O campo email é obrigatório',
    });
  } else if (!email.match(EMAIL_REGEX)) {
    res.status(UNAUTHORIZED_CODE).json({
      message: 'O campo email deve ter o formato correto de endereços de email',
    });
  } else {
    next();
  }
};
```

```
// Arquivo validateUserFirstName.js

module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { firstName } = req.body;

  if (!firstName || !firstName.length) {
    res.status(UNAUTHORIZED_CODE).json({ message: 'O campo firstName é obrigatório' });
  } else {
    next();
  }
};
```

```
// Arquivo validateUserPassword.js

module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { password } = req.body;

  if (!password || !password.length) {
    res.status(UNAUTHORIZED_CODE).json({ message: 'O campo password é obrigatório' });
  } else {
    next();
  }
};
```

```
// Arquivo validateUserPhone.js

module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { phone } = req.body;
  const PHONE_REGEX = /\(\d{2,}\) \d{4,}-\d{4}/g;

  if (!phone || !phone.length) {
    res.status(UNAUTHORIZED_CODE).json({ message: 'O campo phone é obrigatório' });
  } else if (!phone.match(PHONE_REGEX)) {
    res.status(UNAUTHORIZED_CODE).json({
      message: 'O campo phone deve ser composto por números e deve ter o formato \'(XX) XXXX-XXX\'',
    });
  } else {
    next();
  }
};
```

```
// Arquivo signupRouter.js

const express = require('express');
const validateUserEmail = require('../middlewares/validateUserEmail');
const validateUserFirstName = require('../middlewares/validateUserFirstName');
const validateUserPassword = require('../middlewares/validateUserPassword');
const validateUserPhone = require('../middlewares/validateUserPhone');

const router = express.Router();

const CREATED_CODE = 201;

router.post('/',
  validateUserEmail,
  validateUserFirstName,
  validateUserPassword,
  validateUserPhone, (_req, res) => {
    res.status(CREATED_CODE).json({ message: 'Usuário cadastrado com sucesso!' });
  });

module.exports = router;
```
```
// Arquivo app.js

// ...

const signupRouter = require('./routes/signupRouter');

// ...
```

- Criação e implementação da função que gera um token aleatório:
```
// Arquivo utils/generateToken.js

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
```

```
// Arquivo signupRouter.js

// ...
const generateToken = require('../utils/generateToken');

// ...

router.post('/',
  validateUserEmail,
  validateUserFirstName,
  validateUserPassword,
  validateUserPhone, (_req, res) => {
    token = generateToken();
    res.status(OK).json({
      message: 'Usuário cadastrado com sucesso!',
      token
    });
  });

// ...
```

11. Crie um middleware de autenticação ao endpoint `POST` com a rota `/activities`. Ela deve:
- Ser validada por meio do token que foi gerado ao realizar o signup;
- Ser encontrada pelo header `Authorization`;
- Ter exatamente 16 caracteres;
- Caso o token seja inválido ou inexistente, retornar o status `401 - Unauthorized` e uma mensagem (formato `json`).

R.: Primeiramente, foi criada um middleware (`auth.js`) para validação do token. Após isso, esse middleware foi inserido no endpoint `POST` da rota `/activities`.

```
// Arquivo auth.js

module.exports = (req, res, next) => {
  const UNAUTHORIZED_CODE = 401;
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(UNAUTHORIZED_CODE).json({ message: 'Token inválido!' });
  }
  next();
};
```
```
// Arquivo activitiesRouter.js

// ...

const auth = require('../middlewares/auth')

// ...

router.post('/',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty, (_req, res) => {
    res.status(CREATED_CODE).json({ message: 'Atividade cadastrada com sucesso!' });
  });

// ...
```