const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require("./config/connection");

const interFace = [
    "View all Employees",
    "View all Employees by Department",
    "View all Departments",
    "View all Employee Roles",
    "Add NEW Employee",
    "Add Department",
    "Add Role",
    "Update an Employee's Role",
    "Update an Employee's Department",
    "Remove Employee's Role",
    "Exit Employee Tracker"
];

let listDepartment;
let listEmployeeRoles;
let listEmployees;

connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;
    listDepartment = res.map(role => ({ name: dep.title, value: dep.id }));
});

connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    listEmployeeRoles = res.map(role => ({ name: role.title, value: role.id}));
});

connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    listEmployees = res.map(role => ({ name: `${emp.first_name}${emp.last_name}`,
    value: emp.id
    }));
});

start();

// this part of the code starts the CLI app
function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add employee to a department", 
                "View departments",
                "Delete a department", 
                "Add an employee role",
                "View employee roles", 
                "Delete an employee's role/s",
                "Add an employee", 
                "View an employee",
                "Update an employee's role/s", 
                "End"
            ]
        })
        .then(function (res){
            switch(res.action) {
                case "Add employee to a department":
                    addDepartment();
                    break;
                case "View departments":
                    viewDepartment();
                    break;
                case "Delete a department":
                    deleteDepartment();
                    break;
                case "Add an employee roll":
                    addRole();
                    break;
                case "View employee roles":
                    viewRole();
                    break;
                case "Delete an employee's role/s":
                    deleteRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "View an employee":
                    viewEmployee();
                    break;
                case "Update an employee's role/s":
                    updateRole();
                    break;
                case "End":
                    end();
                    break;
            }
        });
}

// Adding new departments
function addDepartment(data) {
    inquirer
    .prompt([
    {
        type: "input",
        message: "What department would you like to add?",
        name: "name"
    }
    ])
    .then(function (res){
        connection.query(
            "INSERT INTO departments SET ?",
            {
                name: res.name
            },
            function(error, res) {
                if(error) throw error;
            }
        );
    })
    .then(function() {
        console.log("--DEPARTMENT ADDED--");
    })
    .then(function() {
        start();
    });
}

// View a department
function viewDepartment() {
    console.log("Departments: \n");
    connection.query("SELECT * FROM departments", function (error, res) {
        console.log(res);
        start();
    });
}

// Add an employee role
function addRole() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What would you like to call this new role?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the offered salary for this role?",
            name: "salary"
        },
        {
            type: "list",
            message: "What department does this role belong to?",
            name: "id",
            choices: listDepartment
        }
    ])
    .then(function (res) {
        coneection.query("INSERT INTO roles SET ?",
        {
            title: res.name,
            salary: res.salary,
            department_id: res.id
        },
        function(error, res) {
            console.log(error);
            if(error) throw error;
        }
        );
    })
    .then(function(){
        start();
    });
}
