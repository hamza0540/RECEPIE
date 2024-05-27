var mysql = require('mysql2');

try {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "foodserver"
  });

  con.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database!");
  });
} catch (error) {
    console.error("Error creating or connecting to MySQL:", error.message);
}
module.exports = con;
