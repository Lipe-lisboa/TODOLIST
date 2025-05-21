const app = require('./app');

const dotenv = require("dotenv");
dotenv.config();

const PORTA = process.env.PORTA || 3333;

app.listen(PORTA, () => console.log(`servidor ativo na porta: ${PORTA}`));


