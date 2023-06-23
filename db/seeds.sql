INSERT INTO employees (employee id, first_name, last_name, role_id, is_manager, manager_id)
    (001, "John", "Doe", 001, true, null),
    (002, "Mike", "Chan", 002, false, 001),
    (003, "Ashley", "Rodriguez", 003, true, null),
    (004, "Kevin", "Tupik", 004, false, 003),
    (005, "Kunal", "Singh", 005, true, null),
    (006, "Malia", "Brown", 006, false, 005),
    (007, "Sarah", "Lourd", 007, true, null),
    (008, "Tom", "Allen", 008, false, 007);



INSERT INTO roles (role_id, job_title, department_id, salary)
VALUES (001, "Sales Lead", 001, 100000),
       (002, "Salesperson", 001, 80000),
       (003, "Lead Engineer", 002, 150000),
       (004, "Software Engineer", 002, 120000),
       (005, "Account Manager", 003, 160000),
       (006, "Accountant", 003, 125000),
       (007, "Legal Team Lead", 004, 250000),
       (008, "Lawyer", 004, 190000);

INSERT INTO departments (department_id, department_name)
VALUES (001, "Sales"),
       (002, "Engineering"),
       (003, "Finance"),
       (004, "Legal");