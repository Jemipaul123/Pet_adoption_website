const Pool = require('pg').Pool;
const response = require("express");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

module.exports = pool;
