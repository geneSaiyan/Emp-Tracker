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
connection.connect(function (err) {
    if (err) throw err;
    startTracker();
});

// Placing tracker options in an array variable
const trackerOptions = [
    'View all departments',
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add a employee',
    'Update an employee role',
    `I'm done`
];

// function which initiates the actions within the employee tracker
function startTracker() {
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
        console.log('Dept');
        startTracker()
    }
    else if(choice.trackerList === 'View all roles'){
        console.log('Role');
        startTracker()
    }
    else if(choice.trackerList === 'View all employees'){
        console.log('Emp');
        startTracker()
    }
    else if(choice.trackerList === 'Add a department'){
        console.log('Add Dept');
        startTracker()
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
        console.log('Finish!');
        connection.end();
    }
}