-- Drops the burgers_db if it exists currently
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database
CREATE DATABASE burgers_db;

-- Make it so all of the create table code will affect burgers_db
USE burgers_db;
-- Creates the table "burgers" within burgers_db
CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false
);