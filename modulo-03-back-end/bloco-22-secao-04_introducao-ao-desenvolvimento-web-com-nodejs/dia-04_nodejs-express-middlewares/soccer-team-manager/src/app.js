const express = require('express');
require('express-async-errors');
const  { resolve } = require('path');
const morgan = require('morgan');
const cors = require('cors');

const teamsRouter = require('./routes/teamsRouter');

const app = express();

app.use(express.json());
app.use('/static', express.static(resolve(__dirname, './images')));
app.use(cors());

// app.use((req, _res, next) => {
//   console.log('req.method:', req.method);
//   console.log('req.path:', req.path);
//   console.log('req.params:', req.params);
//   console.log('req.query:', req.query);
//   console.log('req.headers:', req.headers);
//   console.log('req.body:', req.body);
//   next();
// });

app.use(morgan('combined'));
app.use(express.static('./images'));
app.use('/teams', teamsRouter);

app.use((req, res) => res.sendStatus(404));

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  // passa o erro para o próximo middleware
  next(err);
});

app.use((_err, _req, res, _next) => {
  res.status(500).json({ message: 'Something is wrong' });
});

module.exports = app;