CREATE TABLE `hjdatabase`.`hotels` (
  `HotelId` INT NOT NULL,
  `CityId` INT NOT NULL,
  `HotelName` VARCHAR(45) NULL,
  `StarRating` INT NULL,
  `Latitude` DECIMAL NULL,
  `Longitude` DECIMAL NULL,
  `Address` VARCHAR(45) NULL,
  `Location` VARCHAR(45) NULL,
  `PhoneNumber` INT NULL,
  PRIMARY KEY (`HotelId`));

CREATE TABLE `hjdatabase`.`descriptions` (
  `HotelId` INT NOT NULL,
  `Description` LONGTEXT NULL,
  PRIMARY KEY (`HotelId`));

CREATE TABLE `hjdatabase`.`images` (
  `HotelId` INT NOT NULL,
  `Image` VARCHAR(100) NULL,
  PRIMARY KEY (`HotelId`));

CREATE TABLE `hjdatabase`.`facilities` (
  `HotelId` INT NOT NULL,
  `FacilityType` VARCHAR(45) NULL,
  `FacilityName` VARCHAR(45) NULL,
  PRIMARY KEY (`HotelId`));
  
CREATE TABLE `hjdatabase`.`cities` (
  `CityId` INT NOT NULL,
  `CityName` VARCHAR(45) NULL,
  `StateCode` VARCHAR(45) NULL,
  `CountryCode` VARCHAR(2) NULL,
  PRIMARY KEY (`CityId`));
  
CREATE TABLE `hjdatabase`.`countries` (
  `CountryCode` VARCHAR(2) NOT NULL,
  `CountryName` VARCHAR(45) NULL,
  PRIMARY KEY (`CountryCode`));
