CREATE DATABASE MT6;

use MT6;

CREATE TABLE employees(
id int PRIMARY KEY NOT NULL auto_increment,
name varchar(50),
age int,
city varchar(50),
department varchar(50)
);

INSERT INTO employees(name, age, city, department)
VALUES 
("Haider", 25, "Guj", "Computer science"),
("Ruhaan", 24, "Guj", "Data Analytics"),
("nouman", 25, "LHR", "Design"),
("Ahzam", 26, "KHI", "SUI");

SELECT * FROM employees;

UPDATE employees
SET city = "ISB"
WHERE id = 2;

DELETE FROM employees where name = "nouman";

ALTER TABLE employees
ADD nickName varchar(50) DEFAULT NULL;

ALTER TABLE employees
CHANGE COLUMN nickname designation varchar(50);

ALTER TABLE employees
DROP COLUMN salarys;

only work on CRUD operations on Table + employees data in table 





