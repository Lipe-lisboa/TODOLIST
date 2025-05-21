const express = require('express');
const router = require('./router');

const app = express();

// nossa API vai poder trabalhar com dados em json
// poderemos receber dados do usuario em json
app.use(express.json());
app.use(router);

module.exports = app;