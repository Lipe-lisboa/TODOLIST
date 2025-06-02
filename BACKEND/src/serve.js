// servidor da API


// Importando o app
const app = require('./app');


// configurando as variaveis dotenv
require("dotenv").config();

// pegando a varivel que contem a porta que minha API esta. Caso de algum erro na
// minha variavel ele usa a porata 3333
const PORTA = process.env.PORTA || 3333;


// sobe o servidor 
app.listen(PORTA, () => console.log(`servidor ativo na porta: ${PORTA}`));


