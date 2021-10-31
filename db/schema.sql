CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_titles VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary VARCHAR(30) NOT NULL,
    manager VARCHAR(30) NOT NULL
); 

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    employee_roles VARCHAR(30) NOT NULL
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    employee_departments VARCHAR(30) NOT NULL
);