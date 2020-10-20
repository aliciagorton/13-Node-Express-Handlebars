
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured boolean NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);