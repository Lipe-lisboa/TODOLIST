
//Importa as nossas a biblioteca express
const express = require('express');

//Importa as nossas rotas 
const router = require('./router');

const app = express();

// nossa API vai poder trabalhar com dados em json
// poderemos receber dados do usuario em json
app.use(express.json());

// Dizendo  para o nosso app quais rotas usar 
app.use(router);


// exporta o nosso app para ser exportado pelo nosso servidor
// Não é apropriado colocar o nosso app no mesmo local do nosso servidor
module.exports = app;