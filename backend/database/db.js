const mysql = require("mysql2");

require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost:3006",
  user: "root",
  password: "password",
  database: "techtrek24",
  connectionLimit: 10,
});

module.exports = { pool };
