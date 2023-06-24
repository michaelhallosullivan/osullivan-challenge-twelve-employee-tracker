INSERT INTO departments (id, department_name) 
VALUES (001, "Sales"),
       (002, "Engineering"),
       (003, "Finance"),
       (004, "Legal");

INSERT INTO roles (id, job_title, department_id, salary)
VALUES (001, "Sales Lead", 001, 100000),
       (002, "Salesperson", 001, 80000),
       (003, "Lead Engineer", 002, 150000),
       (004, "Software Engineer", 002, 120000),
       (005, "Account Manager", 003, 160000),
       (006, "Accountant", 003, 125000),
       (007, "Legal Team Lead", 004, 250000),
       (008, "Lawyer", 004, 190000);

INSERT INTO employees (id, first_name, last_name, role_id, manager, is_manager)
VALUES (001, "John", "Doe", 001, null, true),
    (002, "Mike", "Chan", 002, "John Doe", false),
    (003, "Ashley", "Rodriguez", 003, null, true),
    (004, "Kevin", "Tupik", 004, "Ashley Rodriguez", false),
    (005, "Kunal", "Singh", 005, null, true),
    (006, "Malia", "Brown", 006, "Kunal Singh", false),
    (007, "Sarah", "Lourd", 007, null, true),
    (008, "Tom", "Allen", 008, "Sarah Lourd", false);