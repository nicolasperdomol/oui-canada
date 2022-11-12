CREATE TABLE `users` (`id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password_hash` VARCHAR(72) NOT NULL,
  `profile_picture` LONGBLOB,
  `type` ENUM('ADMIN','REGULAR') NOT NULL,
  `date_added` DATETIME NOT NULL,
  PRIMARY KEY (`id`), UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`));