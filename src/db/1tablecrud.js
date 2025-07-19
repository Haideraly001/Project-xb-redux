CREATE DATABASE G7Technologies;

USE G7Technologies;

CREATE TABLE employees (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20),
Designation VARCHAR(25),
salary INT
);

ALTER TABLE employees
CHANGE Designation designation VARCHAR(25);

AlTER TABLE employees
MODIFY id INT NOT NULL AUTO_INCREMENT;

SELECT * FROM employees;

SHOW CREATE TABLE employees;

INSERT INTO employees ( name, designation, salary) 
VALUES ("Haider", "MERN STACK", 50000), ("TALAL","Sr. MERN STACK", 100000);

INSERT INTO employees (name, designation, salary)
VALUES ("Umar", "Mobile Dev", 50000);

SELECT * FROM employees;

CREATE TABLE personInfo(
id INT NOT NULL auto_increment PRIMARY KEY,
age INT,
employee_id INT NOT NULL,
FOREIGN KEY (employee_id ) REFERENCES employees(id)
);

INSERT INTO personINFO (age, employee_id) 
VALUES (25, 1), (24, 2), (23, 3);

SHOW CREATE TABLE personInfo;
SELECT * FROM personINFO where employee_id = 1;

UPDATE employees
SET salary  = 70000
WHERE id = 1;

SELECT * FROM employees;

ALTER TABLE personInfo
ADD city VARCHAR(50) DEFAULT null;

SELECT * FROM personInfo;
