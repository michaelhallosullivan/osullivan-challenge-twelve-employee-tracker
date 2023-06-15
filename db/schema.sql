/*DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order (
  id INT,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);
*/

DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  --foreign key here
  role_id(provides job_title, department_name, salary)
  --foreign key here
  manager_id
  is_manager BOOLEAN NOT NULL
)

CREATE TABLE roles (
  role_id INT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL(6, 2),
  --foreign key here
  department_id(provides department_name)
)

CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
)