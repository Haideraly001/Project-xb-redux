20 july 2025
morning practice 

SELECT * FROM employees;

CREATE TABLE student(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name varchar(50),
city varchar(30),
age INT,
department varchar(30)
);

SHOW CREATE TABLE student;

ALTER TABLE student
MODIFY id INT  NOT NULL auto_increment;

INSERT INTO student(name,city,age, department) 
VALUES  ("Haider", "Guj", 25, "IT"),
    ("usama", "LHR", 28, "HR"),
    ("ruhaan", "ISB", 24, "Marketing"),
    ("moni", "FSD", 29, "IT"),
    ("nouman", "LHR", 26, "Design"),
    ("ahzam", "KHI", 35, "HR");
    
SELECT * FROM student;

SELECT * FROM student 
WHERE age > 25 OR department = "HR";

SELECT * FROM student
WHERE department IN ( "IT");

SELECT * FROM employees
WHERE salary BETWEEN 60000 AND 200000;



------------------ 
Night practice
CRUD practice again

USE g7technologies;

CREATE TABLE student(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(50),
city VARCHAR(50),
salary INT,
age INT, 
department VARCHAR(50)
);

SELECT * FROM student;

INSERT INTO student(name, city,salary, age, department) 
VALUES 
("haider","guj", 50000, 25,"IT"),
("Ruhaan", "lhr", 55000, 24, "SUI"),
("Ahzam", "khi", "60000", 26, "SUI"),
("Sajjad", "isl", "30000", 23, "ENG"),
("Haseeb", "guj", "15000", 22, "Desgin");

SET SQL_SAFE_UPDATES = 0;

UPDATE student
SET city = "GUJ"
WHERE name = "haider";

DELETE FROM student where name = "haider";


-------------------
Table CRUD operations

TRUNCATE TABLE student;