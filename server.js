//JOIN TABLES AT FOREIGN KEYS
//WRITE FUNCTIONS FOR ADDING ROLES, ADDING DEPARTMENTS, ADDING EMPLOYEES, UPDATING EMPLOYEE ROLES

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
        try {
          console.table(results);
          menu();
        } catch (err) {
          res.status(500).json(err);
        }
      });
    }
    if (response.admin === "Add Employee") {
      
    }
    if (response.admin === "Update Employee Role") {
      
    }
    if (response.admin === "View all Roles") {
      db.query('SELECT roles.job_title, roles.salary, departments.department_name FROM departments JOIN roles ON roles.department_id = departments.id', function (err, results) {
        try {
          console.table(results);
          menu();
        } catch (err) {
          res.status(500).json(err);
        }
      });
    }
    if (response.admin === "Add Role") {
      
    }
    if (response.admin === "View all Departments") {
      db.query('SELECT * FROM departments', function (err, results) {
        try {
          console.table(results);
          menu();
        } catch (err) {
          res.status(500).json(err);
        }
      });
    }
    if (response.admin === "Add Department") {
      
    }
    if (response.admin === "Quit") {
      db.end();
    }
  });
};

menu();

/* 
// Query database
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


        try {
          const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
          });
        } catch (err) {
          res.status(500).json(err);
        }

db.query('SELECT * FROM departments', function (err, results) {
        try {
          let departments = results.map(departments => {
            return { name : departments.name, value: departments.id };
          });
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
                choices: departments,
            }
          ])
          .then((response) => {
          db.query(`'INSERT INTO roles (job_title, salary, department_id) VALUES (${response.title}, ${response.salary}, ${response.department.value})'`, function (err, results) {
              console.log(results);
          });
        }) 
        } catch (err) {
          res.status(500).json(err);
        })
      }
      });

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

*/