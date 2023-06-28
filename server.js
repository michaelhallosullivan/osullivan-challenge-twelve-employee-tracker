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
      addEmployee();
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
    let departments = [];
    let names = [];
    for (i=0; i<results.length; i++) {
      departments.push(results[i]);
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
      let item = departments.find(item => item.department_name === response.department);
      let department_id = item.id;
      let job_title = response.title;
      let salary = response.salary;
      db.query('INSERT INTO roles (job_title, department_id, salary) VALUES (?, ?, ?)', [job_title, department_id,salary], function (err, results) {
        if (err) throw (err);
        menu();
      });
    });
  });
};

function addDepartment() {
  inquirer.prompt([
    {   
        type: "input",
        name: "name",
        message: "What is the name of the department?"
    }
  ])
  .then((response) => {
    let department_name = response.name;
    db.query(`INSERT INTO departments (department_name) VALUES (?)`, [department_name], function (err, results) {
      if (err) {throw err};
      menu();
    });
  });
};

function addEmployee() {
  let roles = [];
  let role_titles = [];
  let managers = [];
  let manager_names = ["No"];
  function fetchManagers() {
    db.query('SELECT * FROM employees WHERE is_manager = 1', function (err, results) {
        for (i=0; i<results.length; i++) {
          managers.push(results[i]);
          manager_names.push(results[i].first_name + " " + results[i].last_name);
        };
      });
    };
  function fetchRoles() {
    db.query('SELECT roles.job_title, roles.id FROM roles', function (err, results) {
        for (i=0; i<results.length; i++) {
          roles.push(results[i]);
          role_titles.push(results[i].job_title);
        };
      });
    };
  fetchManagers();
  fetchRoles();
  inquirer.prompt([
      {   
          type: "input",
          name: "first_name",
          message: "What is the employee's first name?"
      },
      {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?",
      },
      {
          type: "list",
          name: "role",
          message: "Which role will the employee be taking on?",
          choices: role_titles
      },
      {
        type: "list",
        name: "manager",
        message: "Does this employee have a manager?",
        choices: manager_names
      }
    ])
  .then((response) => {
    let first_name = response.first_name;
    let last_name = response.last_name;
    let item = roles.find(item => item.job_title === response.role);
    let role_id = item.id;
    let manager = null;
    let is_manager = false;
    function checkManager() {
    if (response.manager === "No") {
      is_manager = true;
    }
    else {
      manager = response.manager;
    }
    };
    checkManager();
    db.query('INSERT INTO employees (first_name, last_name, role_id, manager, is_manager) VALUES (?, ?, ?, ?, ?)', [first_name, last_name, role_id, manager, is_manager], function (err, results) {
      if (err) throw (err);
      menu();
    });
});
};