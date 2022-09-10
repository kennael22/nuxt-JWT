CREATE DATABASE testdb;
-- CREATE DATABASE testdb;
-- USE testdb;
-- create the databases

-- create the users for each database
-- CREATE USER 'projectoneuser'@'%' IDENTIFIED BY 'somepassword';
-- GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `testdb`.* TO 'testdn'@'%';
GRANT ALL ON testdb.* TO 'root'@'%' IDENTIFIED BY 'kevz';
USE testdb;
FLUSH PRIVILEGES;