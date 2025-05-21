const mysql = require("mysql2/promise");

require("dotenv").config();

const connection = mysql.createPool({
    host: process.env.Mysqlhost,
    user: process.env.Mysqluser,
    password: process.env.Mysqlpassword,
    database: process.env.Mysqldatabase
})

module.exports  = connection;