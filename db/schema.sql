DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  is_manager BOOLEAN,
  manager_id INT,
  PRIMARY KEY(id)
  --foreign key here
  FOREIGN KEY (role_id)
  REFERENCES roles(id)
  --(how to link manager id?)
  FOREIGN KEY (manager_id)
  REFERENCES employees(id)
  ON DELETE CASCADE
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL(6, 2),
  department_id INT,
  PRIMARY KEY(id)
  --foreign key here
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE CASCADE
);

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
  PRIMARY KEY(id)
);