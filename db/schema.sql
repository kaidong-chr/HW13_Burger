-- Drops the burger_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger_db" database --
CREATE DATABASE burgers_db;

-- Make it so all of the following code will affect burger_db --
USE burgers_db;
-- Creates the table "favorite_foods" within burger_db --
CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false
);