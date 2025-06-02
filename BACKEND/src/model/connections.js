//esse arquivo tem como objetivo fazer a coneção com o nosso banco de dados

// Importa o mysql
const mysql = require("mysql2/promise");

// preciso fazer isso para ter acesso as variaveis dotenvs
require("dotenv").config();

const connection = mysql.createPool({
    host: process.env.Mysqlhost,
    user: process.env.Mysqluser,
    password: process.env.Mysqlpassword,
    database: process.env.Mysqldatabase
})


// exporta o a conecção com o banco de dados para ser usado pelos nossos models
module.exports  = connection;