const mysql = require('mysql')
const inquirer = require("inquirer");
const path = require("path");
const cTable = require('console.table'); 

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "employeeTracker_db"
});

//cms options prompts

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
                console.log("in Add Department");
                restart();
                break;
            
            case "Add Role":
                restart();
                break;

            case "Add Employee":
                restart();
                break;

            case "View Departments":
                //console.log('View Departments')
                const table = cTable.getTable([
                    {
                        id: 1,
                        name: 'Sales'
                    }, 
                    {
                        id: 2,
                        name: "Engineering"
                    },
                    {
                        id: 2,
                        name: 'Finance'
                    }
                ]);

                console.log(table);
                restart();
                break;

            case "View Roles":
                const table1 = cTable.getTable([
                    {
                        id: 1,
                        name: 'Salesperson'
                    }, 
                    {
                        id: 2,
                        name: "Accountant"
                    },
                    {
                        id: 2,
                        name: 'Lawyer'
                    }
                ]);
                console.log(table1);
                restart();
                break;

            case "View Employees":
                const table2 = cTable.getTable([
                    {
                        id: 1,
                        name: 'john'
                    }, 
                    {
                        id: 2,
                        name: "jane"
                    },
                    {
                        id: 2,
                        name: 'joe'
                    }
                ]);
                console.log(table2);
                restart();
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

