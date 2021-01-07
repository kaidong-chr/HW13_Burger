// Set up mysql connection.
const mysql = require("mysql");

// Heroku connection
let connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3001,
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for orm to use.
module.exports = connection;
