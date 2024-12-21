
CREATE DATABASE IF NOT EXISTS `db_starwars` 
USE `db_starwars`;

CREATE TABLE IF NOT EXISTS `peoples` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `height` varchar(50) DEFAULT NULL,
  `mass` varchar(50) DEFAULT NULL,
  `hair_color` varchar(50) DEFAULT NULL,
  `skin_color` varchar(50) DEFAULT NULL,
  `eye_color` varchar(50) DEFAULT NULL,
  `birth_year` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `homeworld` varchar(50) DEFAULT NULL,
  `created` date DEFAULT NULL,
  `edited` date DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  `films` json DEFAULT NULL,
  `species` json DEFAULT NULL,
  `vehicles` json DEFAULT NULL,
  `starships` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
