const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  const filteredChocolates = chocolates
    .filter(({name}) => name.toLowerCase().includes(req.query.name.toLowerCase()));

  if(!filteredChocolates.length) return res.status(404).json([]);

  res.status(200).json(filteredChocolates);
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;

  const chocolate = await cacauTrybe.getChocolateById(Number(id));

  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });

  const chocolateToUpdate = await cacauTrybe.updateChocolateById(Number(id), name, brandId);
  res.status(200).json({ chocolate: chocolateToUpdate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

module.exports = app;