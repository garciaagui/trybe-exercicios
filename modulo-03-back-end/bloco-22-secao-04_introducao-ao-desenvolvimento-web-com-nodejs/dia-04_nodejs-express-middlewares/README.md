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