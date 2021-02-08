const mysql = require('mysql')
const inquirer = require("inquirer");
const path = require("path");
 

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "employeeTracker_db"
});

function employeeTrackerStart() {
    inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do?",
            name: "options",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Role",
            ]
        },
    ])
    .then( (answers) => {
        switch (answers.options) {
            
            case "Add Department":
                break;
            
            case "Add Role":
                break;

            case "Add Employee":
                break;

            case "View Departments":
                break;

            case "View Roles":
                break;

            case "View Employees":
                break;

            case "Update Employee Role":
                break;

            default:
                break;
        }
    }) 
}

employeeTrackerStart()
