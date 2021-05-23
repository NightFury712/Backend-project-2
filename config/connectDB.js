const mysql = require('mysql');

let connection = (dbName) => {
  let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: dbName
  })
  return conn;
}

module.exports = {
  connection
}