const express = require('express');

const appRouter = require('./routes/appRouter');

const app = express();

app.use(express.json());

app.use('/activities', appRouter);

module.exports = app;