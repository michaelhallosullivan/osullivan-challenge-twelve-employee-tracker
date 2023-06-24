DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL(8, 2),
  department_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (department_id)
    REFERENCES departments(id)
  ON DELETE CASCADE
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager VARCHAR(30),
  is_manager BOOLEAN,
  PRIMARY KEY(id),
  FOREIGN KEY (role_id)
    REFERENCES roles(id)
  ON DELETE CASCADE
);
