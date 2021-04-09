const mysql = require("mysql2");
const dbConfig = require("../config/db_config.js");

const conn = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

module.exports = conn;
