CREATE DATABASE  IF NOT EXISTS `hj` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `hj`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: hj
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `descriptions`
--

DROP TABLE IF EXISTS `descriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descriptions` (
  `HotelId` int(11) NOT NULL,
  `Description` longtext,
  KEY `IX_Descriptions` (`HotelId`),
  CONSTRAINT `FK_Descriptions_Hotels` FOREIGN KEY (`HotelId`) REFERENCES `hotels` (`HotelId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `facilities`
--

DROP TABLE IF EXISTS `facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facilities` (
  `HotelId` int(11) NOT NULL,
  `FacilityType` varchar(50) DEFAULT NULL,
  `FacilityName` varchar(5000) DEFAULT NULL,
  KEY `IX_Facilities` (`HotelId`),
  CONSTRAINT `FK_Facilities_Hotels` FOREIGN KEY (`HotelId`) REFERENCES `hotels` (`HotelId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `HotelId` int(11) NOT NULL,
  `Image` varchar(200) DEFAULT NULL,
  KEY `IX_Images` (`HotelId`),
  CONSTRAINT `FK_Images_Hotels` FOREIGN KEY (`HotelId`) REFERENCES `hotels` (`HotelId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotels` (
  `HotelId` int(11) NOT NULL,
  `CityId` int(11) DEFAULT NULL,
  `HotelName` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `StarRating` int(11) DEFAULT NULL,
  `Latitude` double DEFAULT NULL,
  `Longitude` double DEFAULT NULL,
  `Address` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Location` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `PhoneNumber` double DEFAULT NULL,
  PRIMARY KEY (`HotelId`),
  KEY `IX_Hotels` (`HotelId`,`CityId`,`HotelName`),
  KEY `FK_Hotels_Cities` (`CityId`),
  CONSTRAINT `FK_Hotels_Cities` FOREIGN KEY (`CityId`) REFERENCES `cities` (`CityId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `CityId` int(11) NOT NULL,
  `CityName` varchar(50) DEFAULT NULL,
  `StateCode` varchar(10) DEFAULT NULL,
  `CountryCode` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`CityId`),
  KEY `IX_CityName` (`CityName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `CountryCode` varchar(2) DEFAULT NULL,
  `CountryName` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOAD DATA LOCAL INFILE 'C:\\Projects\\StaticData\\Countries.csv'
    INTO TABLE countries
    FIELDS
        TERMINATED BY ','
	ENCLOSED BY '"'
    LINES
        TERMINATED BY '\n'
	IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'C:\\Projects\\StaticData\\Cities.csv'
    INTO TABLE cities
    FIELDS
        TERMINATED BY ','
	ENCLOSED BY '"'
    LINES
        TERMINATED BY '\n'
	IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'C:\\Projects\\StaticData\\Hotels.csv'
    INTO TABLE hotels
    FIELDS
        TERMINATED BY ','
	ENCLOSED BY '"'
    LINES
        TERMINATED BY '\n'
	IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'C:\\Projects\\StaticData\\Descriptions.csv'
    INTO TABLE descriptions
    FIELDS
        TERMINATED BY ','
	ENCLOSED BY '"'
    LINES
        TERMINATED BY '\n'
	IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'C:\\Projects\\StaticData\\Facilities.csv'
    INTO TABLE facilities
    FIELDS
        TERMINATED BY ','
	ENCLOSED BY '"'
    LINES
        TERMINATED BY '\n'
	IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'C:\\Projects\\StaticData\\Images.csv'
    INTO TABLE images
    FIELDS
        TERMINATED BY ','
	ENCLOSED BY '"'
    LINES
        TERMINATED BY '\n'
	IGNORE 1 LINES;



/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-23  0:05:57

ALTER TABLE `hj`.`facilities`
ADD COLUMN `id` INT(11) NOT NULL AUTO_INCREMENT FIRST,
ADD COLUMN `createdAt` DATETIME NULL AFTER `FacilityName`,
ADD COLUMN `updatedAt` DATETIME NULL AFTER `createdAt`,
ADD PRIMARY KEY (`id`);

ALTER TABLE `hj`.`descriptions`
ADD COLUMN `id` INT(11) NOT NULL AUTO_INCREMENT FIRST,
ADD COLUMN `createdAt` DATETIME NULL AFTER `Description`,
ADD COLUMN `updatedAt` DATETIME NULL AFTER `createdAt`,
ADD PRIMARY KEY (`id`);

ALTER TABLE `hj`.`images`
ADD COLUMN `id` INT(11) NOT NULL AUTO_INCREMENT FIRST,
ADD COLUMN `createdAt` DATETIME NULL AFTER `Image`,
ADD COLUMN `updatedAt` DATETIME NULL AFTER `createdAt`,
ADD PRIMARY KEY (`id`);

ALTER TABLE `hj`.`hotels`
ADD COLUMN `createdAt` DATETIME NULL AFTER `PhoneNumber`,
ADD COLUMN `updatedAt` DATETIME NULL AFTER `createdAt`;

ALTER TABLE `hj`.`cities`
ADD COLUMN `createdAt` DATETIME NULL AFTER `CountryCode`,
ADD COLUMN `updatedAt` DATETIME NULL AFTER `createdAt`;

