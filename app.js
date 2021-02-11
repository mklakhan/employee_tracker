const mysql = require('mysql2')
const inquirer = require("inquirer");
const path = require("path");
const cTable = require('console.table'); 
const figlet = require('figlet')
const chalk = require('chalk')

const init = () => { 
    console.log(chalk.green(figlet.textSync('Employee Tracker', {
        // font: 'Cursive',
        horizontalLayout: 'full',
        verticalLayout: 'full',
        width: 70,
        whitespaceBreak: true
    })));
    console.log('\n');
}

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "employeeTracker_db"
});

//cms options prompts
init()
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
        {
            type: "input",
            message: "What is the name of your department?",
            name: "newDept",
            when: (answers) => {
                if (answers.options == 'Add Department') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "input",
            message: "What is the title of the role?",
            name: "newRoleTitle",
            when: (answers) => {
                if (answers.options == 'Add Role') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "input",
            message: "What is the salary of the role?",
            name: "newRoleSalary",
            when: (answers) => {
                if (answers.options == 'Add Role') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "list",
            message: "What is the Department of the role?",
            name: "newRoleDeptId",
            choices: (answers) => {
                 let anArr = ["Legal", "Finance", "Engineering"];
                return anArr;
            },
            when: (answers) => {
                if (answers.options == 'Add Role') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: "newEmpFirst",
            when: (answers) => {
                if (answers.options == 'Add Employee') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "newEmpLast",
            when: (answers) => {
                if (answers.options == 'Add Employee') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "list",
            message: "What is the role of the employee",
            name: "newRoleId",
            choices: (answers) => {
                 let anArr = ["Salesperson", "Lawyer", "Accountant"];
                return anArr;
            },
            when: (answers) => {
                if (answers.options == 'Add Employee') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "list",
            message: "Who is the Manager of the employee",
            name: "newEmpMgr",
            choices: (answers) => {
                 let anArr = ["Mary", "John", "Jane"];
                return anArr;
            },
            when: (answers) => {
                if (answers.options == 'Add Employee') {
                    return true;
                } else { return false; }
            }

        },
        {
            type: "list",
            message: "What is the new employee role",
            name: "updatedRoleId",
            choices: (answers) => {
                 let anArr = ["Salesperson", "Lawyer", "Accountant"];
                return anArr;
            },
            when: (answers) => {
                if (answers.options == 'Update Employee Role') {
                    return true;
                } else { return false; }
            }

        },
    
        //cms answers

    ])
    .then( (answers) => {
        switch (answers.options) {
            
            case "Add Department":
                connection.query(
                    `INSERT INTO department(name) VALUES ('${answers.newDept}')`,
                    function (err, results, fields) {
                        restart()
                    }
                )
                break;
            
            case "Add Role":
                restart();
                break;

            case "Add Employee":
                restart();
                break;

            case "View Departments":
                //console.log('View Departments')
                connection.query(
                    'SELECT * FROM department',
                    function (err, results, fields) {
                        let resultsTbl = cTable.getTable(results)
                        console.log(`\n${resultsTbl}`); 
                        restart()
                    }
                )
                break;

            case "View Roles":
                connection.query(
                    'SELECT * FROM role',
                    function (err, results, fields) {
                        let resultsTbl = cTable.getTable(results)
                        console.log(`\n${resultsTbl}`); 
                        restart()
                    }
                )
                break;

            case "View Employees":
                connection.query(
                    'SELECT * FROM employee',
                    function (err, results, fields) {
                        let resultsTbl = cTable.getTable(results)
                        console.log(`\n${resultsTbl}`); 
                        restart()
                    }
                )
                break;

            case "Update Employee Role":
                restart();
                break;

            default:
                break;
        }
    }) 
}

function restart() {
    employeeTrackerStart()
}
employeeTrackerStart()

