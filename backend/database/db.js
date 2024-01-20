const mysql = require("mysql2");

// require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd@1234",
  database: "techtrek24",
  connectionLimit: 10,
});

module.exports = { pool };