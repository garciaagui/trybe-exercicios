CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE locations(
	location_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE species(
	specie_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(200) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE animals(
  animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specie_id INT NOT NULL,
  sex VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  location_id INT NOT NULL,
    FOREIGN KEY (specie_id) REFERENCES species(specie_id),
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
)ENGINE=InnoDB;

CREATE TABLE managers(
  manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE keepers(
  keeper_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES managers(manager_id)
)ENGINE=InnoDB;

CREATE TABLE keeper_animal(
  keeper_id INT NOT NULL,
  animal_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(keeper_id, animal_id),
    FOREIGN KEY (keeper_id) REFERENCES keepers(keeper_id),
    FOREIGN KEY (animal_id) REFERENCES animals(animal_id)
)ENGINE=InnoDB;