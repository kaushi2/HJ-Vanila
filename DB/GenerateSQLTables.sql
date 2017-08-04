CREATE TABLE [hotels] (
  [HotelId] INT NOT NULL,
  [CityId] INT NOT NULL,
  [HotelName] VARCHAR NULL,
  [StarRating] INT NULL,
  [Latitude] DECIMAL NULL,
  [Longitude] DECIMAL NULL,
  [Address] VARCHAR NULL,
  [Location] VARCHAR NULL,
  [PhoneNumber] INT NULL);

CREATE TABLE [descriptions] (
  [HotelId] INT NOT NULL,
  [Description] VARCHAR NULL);

CREATE TABLE [images] (
  [HotelId] INT NOT NULL,
  [Image] VARCHAR NULL);

CREATE TABLE [facilities] (
  [HotelId] INT NOT NULL,
  [FacilityType] VARCHAR NULL,
  [FacilityName] VARCHAR NULL);
  
CREATE TABLE [cities] (
  [CityId] INT NOT NULL,
  [CityName] VARCHAR NULL,
  [StateCode] VARCHAR NULL,
  [CountryCode] VARCHAR(2) NULL);
  
CREATE TABLE [countries] (
  [CountryCode] VARCHAR(2) NOT NULL,
  [CountryName] VARCHAR NULL);
