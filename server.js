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