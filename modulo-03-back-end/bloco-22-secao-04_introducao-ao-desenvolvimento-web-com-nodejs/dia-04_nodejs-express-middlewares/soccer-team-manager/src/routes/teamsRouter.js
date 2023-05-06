const express = require('express');

const apiCredentials = require('../middlewares/apiCredentials');
const validateTeam = require('../middlewares/validateTeam');
const existingId = require('../middlewares/existingId');

const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

router.get('/', (req, res) => res.json(teams));

router.use(apiCredentials);

router.get('/teams/:id', existingId(teams), (req, res) => {
  const team = teams.find(t => t.id === Number(req.params.id));
  res.status(200).json(team);
});

router.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.sendStatus(401);
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/teams/:id', existingId(teams), validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  
  res.status(201).json(updated);
});

router.delete('/teams/:id', existingId(teams), (req, res) => {
  const team = teams.find(t => t.id === Number(req.params.id));
  const index = teams.indexOf(team);

  teams.splice(index, 1);

  res.sendStatus(204);
});

module.exports = router;