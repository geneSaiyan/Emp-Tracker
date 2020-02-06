// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");
const chalk = require('chalk');
const trackerOptions = require('./assets/trackerOptions');
var queries = require('./assets/queries');

//Create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "elonda2eugene",
    database: "empTracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    startTracker();
});

// function which initiates the actions within the employee tracker
 startTracker = () => {
    inquirer
        .prompt({
            name: "trackerList",
            type: "list",
            message: "Please choose an action to get started:",
            choices: trackerOptions
        })
        .then(function (trackerChoice) {
            //Perform action based on user choice
           trackerAction(trackerChoice);
        });
}

// Using a function to store the if/else statement for the user choice
trackerAction = (choice) => {
    if(choice.trackerList === 'View all departments'){
        viewAllDepartments();
    }
    else if(choice.trackerList === 'View all roles'){
        viewAllRoles();
    }
    else if(choice.trackerList === 'View all employees'){
        viewAllEmployees();
    }
    else if(choice.trackerList === 'Add a department'){
       addDepartment();
    }
    else if(choice.trackerList === 'Add a role'){
        console.log('Add Role');
        startTracker()
    }
    else if(choice.trackerList === 'Add a employee'){
        console.log('Add emp');
        startTracker()
    }
    else if(choice.trackerList === 'Update an employee role'){
        console.log('Update Role');
        startTracker()
    }
    else if(choice.trackerList === `I'm done`){
        console.log(chalk.bgRed('Finish!'));
        connection.end();
    }
}

// Function to view all of the departments
viewAllDepartments = () => {
    connection.query(queries.selectAllDepts(), function(err, results) {
        if (err) throw err;
        console.log(chalk.blue(cTable.getTable('Departments View',results)));
        console.log('-----------------------------');
        startTracker();
    })
}

// Function to view all of the roles
viewAllRoles = () => {
    connection.query(queries.selectAllRoles(), function(err, results) {
        if (err) throw err;
        console.log(chalk.green(cTable.getTable('Roles View',results)));
        console.log('-----------------------------');
        startTracker();
    })
}

// Function to view all employees
viewAllEmployees = () => {
    connection.query(queries.selectAllEmployees(), function(err, results) {
        if (err) throw err;
        console.log(chalk.yellowBright(cTable.getTable('Employees View',results)));
        console.log('-----------------------------');
        startTracker();
    })
}

// Function to add a department
addDepartment = () => {
    inquirer
    .prompt([
      {
        name: "dept",
        type: "input",
        message: "What is the Department name you would like to add?"
      }
    ])
    .then(function(answer) {
      connection.query(
        queries.insertDepartment(answer.dept),
        function(err) {
          if (err) throw err;
          console.log(chalk.greenBright(`${answer.dept} added successfully!`));
          console.log('-----------------------------');
          startTracker();
        }
      );
    });
}