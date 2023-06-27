const express = require('express');
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');

// Enable access to .env variables
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the company_db database.`)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function menu() {
inquirer
  .prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "admin",
        choices: ["View all Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View all Departments", "Add Department", "Quit"]
    }
  ])
  .then((response) => {
    if (response.admin === "View all Employees") {
      db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.department_name, employees.manager FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id', function (err, results) {
          console.table(results);
          menu();
      });
    }
    if (response.admin === "Add Employee") {
      
    }
    if (response.admin === "Update Employee Role") {
      
    }
    if (response.admin === "View all Roles") {
      db.query('SELECT roles.job_title, roles.salary, departments.department_name FROM departments JOIN roles ON roles.department_id = departments.id', function (err, results) {
          console.table(results);
          menu();
      });
    }
    if (response.admin === "Add Role") {
      addRole();
    }
    if (response.admin === "View all Departments") {
      db.query('SELECT * FROM departments', function (err, results) {
          console.table(results);
          menu();
      });
    }
    if (response.admin === "Add Department") {
      addDepartment();
    }
    if (response.admin === "Quit") {
      db.end();
    }
  });
};

menu();

function addRole() {
  db.query('SELECT * FROM departments', function (err, results) {
    let names = [];
    for (i=0; i<results.length; i++) {
      names.push(results[i].department_name);
    };
    inquirer.prompt([
      {   
          type: "input",
          name: "title",
          message: "What is the title of the role?"
      },
      {
          type: "input",
          name: "salary",
          message: "What is the salary for the role?",
      },
      {
          type: "list",
          name: "department",
          message: "In which department will the new role be?",
          choices: names
      }
    ])
    .then((response) => {
      for (i=0; i<results.length; i++) {
        if (response.department === results[i].department_name) {
          let id = results[i].id
          console.log(response.title);
          console.log(response.salary);
          console.log(id);
        };
      };
    });
  });
};

/*
function addRole() {
  db.query('SELECT department_name as name FROM departments', function (err, results) {
    let departments = [];
    for (i=0; i<results.length; i++) {
      departments.push(results[i].name);
    };
    inquirer.prompt([
      {   
          type: "input",
          name: "title",
          message: "What is the title of the role?"
      },
      {
          type: "input",
          name: "salary",
          message: "What is the salary for the role?",
      },
      {
          type: "list",
          name: "department",
          message: "In which department will the new role be?",
          choices: departments
      }
    ])
    .then((response) => {
      console.log(response.department);
    });
  });
};

db.query(`'INSERT INTO roles (job_title, department_id, salary) VALUES (${response.title}, ${id}, ${response.salary})'`, function (err, results) {
            console.table(results);
            menu();
          });
*/