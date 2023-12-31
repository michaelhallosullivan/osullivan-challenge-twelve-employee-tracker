SELECT *
FROM departments;

SELECT roles.job_title, roles.salary, departments.department_name 
FROM departments JOIN roles ON roles.department_id = departments.id;

SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.department_name, employees.manager
FROM employees 
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id;

SELECT *
FROM employees
WHERE is_manager = 1;

SELECT roles.job_title, roles.id, employees.first_name, employees.last_name, employees.id, employees.role_id
FROM employees
JOIN roles ON roles.id = employees.role_id;