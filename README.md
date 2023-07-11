# osullivan-challenge-twelve-employee-tracker

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Description

Students are tasked with creating a content management system (CMS) in the form of a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL. Users will be prompted with options including view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

## Installation

Run npm install and the necessary modules will be installed from package.json. Log in to mysql and create the database using schema.sql. Then seed the database with starter employee information by using seeds.sql. After exiting mysql run npm start to run the server.js file in the CLI.

## Usage

This employee database can be used to view and interact with information stored in a fictional company's employee database.

Video Walkthrough - (https://drive.google.com/file/d/1SQwstMja4EYj_Od6piA4RqeBuk_aXkJA/view)

## Credits

Used Node.js (https://nodejs.org/en) and MYSQL (https://www.mysql.com/). Used node packages Inquirer (https://www.npmjs.com/package/inquirer), Express (https://www.npmjs.com/package/express),  mysql2 (https://www.npmjs.com/package/mysql2), and dotenv (https://www.npmjs.com/package/dotenv). Seed data provided by UC Berkeley. All code written by Michael O'Sullivan.

## License

MIT License

![Model](https://github.com/michaelhallosullivan/osullivan-challenge-twelve-employee-tracker/blob/main/examples/employees-example.jpg)