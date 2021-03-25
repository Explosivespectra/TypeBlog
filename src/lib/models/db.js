const mysql = require("mysql");
const dbConfig = require("../config/db_config.js");

const conn = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to database successfully");
});

module.exports = conn;
