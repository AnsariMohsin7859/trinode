const { Pool } = require("pg");

let pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "12345",
  database: "postgres",
});

module.exports = pool;

