INSERT INTO employees (first_name, last_name, job_titles, department, salary, manager)
VALUES
    ('Ken', 'Ilo', 'web developer', 'creation', '$90000', 'Rick Flair'),
    ('Cynthia', 'Garcia', 'sales lead', 'sales', '$20000', 'John Cena'),
    ('Kaylee', 'Stevens', 'junior engineer', 'engineering', '$75000', 'Randy Orton'),
    ('David', 'Spires', 'software engineer', 'engineering', '$90000', 'Randy Orton'),
    ('Adam', 'Roman', 'senior chef', 'kitchen', '$10000', 'Sasha Banks'),
    ('Ernesto', 'Valecillos', 'line cook', 'kitchen', '$8000', 'Sasha Banks'),
    ('Joseph', 'Sisk', 'sales lead', 'sales', '$20000', 'John Cena');

INSERT INTO roles (employee_roles) 
VALUES
('sales lead'), 
('web developer'),
('junior engineer'),
('software engineer'),
('senior chef'),
('line cook');


INSERT INTO departments (employee_departments)
VALUES
('creation'),
('sales'),
('engineering'),
('kitchen');
