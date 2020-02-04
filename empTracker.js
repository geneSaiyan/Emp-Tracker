// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

// Create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "elonda2eugene",
    database: "empTracker_DB"
  });
  
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    connection.query('SELECT * FROM empTracker_DB.department', function(err, result){

        if(err){
            throw err;
        }

        //Return the results
        console.log(result);

    });
  });
