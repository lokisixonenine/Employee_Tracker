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
