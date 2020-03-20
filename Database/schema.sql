DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

/* Create table for departments */
CREATE TABLE departments (
    id INTEGER,
    AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR (30),
);

/* Create table for roles */
CREATE TABLE roles (
    id INT,
    AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(7,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments (id),
);

/* Create tables for employees */
CREATE TABLE employees (
    id INT,
    AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT, FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);
