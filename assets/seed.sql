INSERT INTO department (name) VALUE ('Sales');
INSERT INTO department (name) VALUE ('Finance');
INSERT INTO department (name) VALUE ('Engineering');
INSERT INTO department (name) VALUE ('Legal');

INSERT INTO role (title, salary, department_id) VALUE ('Sales Lead', 100000, 1000);
INSERT INTO role (title, salary, department_id) VALUE ('Salesperson', 80000, 1000);
INSERT INTO role (title, salary, department_id) VALUE ('Lead Engineer', 150000, 2000);
INSERT INTO role (title, salary, department_id) VALUE ('Software Engineer', 120000, 2000);
INSERT INTO role (title, salary, department_id) VALUE ('Accountant', 125000, 3000);
INSERT INTO role (title, salary, department_id) VALUE ('Legal Team Lead', 250000, 4000);
INSERT INTO role (title, salary, department_id) VALUE ('Lawyer', 190000, 4000);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('John', 'Legend', 123, 11111);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Michael', 'Jordan', 345, 22222);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Tom', 'Brady', 567, 33333);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Jennifer', 'Lopez', 890, 44444);