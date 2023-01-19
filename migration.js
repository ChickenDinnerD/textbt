let mysql = require('mysql2');
let migration = require('mysql-migrations');
require('dotenv').config();

const connection = mysql.createPool({
  host     : process.env.HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

migration.init(connection, __dirname + '/migrations', function(err) {
  if (err) throw err;
  console.log("finished running migrations");
});
