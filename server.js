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