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