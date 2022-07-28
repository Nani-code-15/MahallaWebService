-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Feb 10, 2022 at 08:18 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BaseArchDb`
--

-- --------------------------------------------------------

--
-- Table structure for table `FormData`
--

CREATE TABLE `FormData` (
  `Id` int(11) NOT NULL,
  `Header` varchar(255) NOT NULL,
  `LiNo` int(11) NOT NULL,
  `Value` text CHARACTER SET utf8mb4,
  `CrAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CrBy` varchar(16) NOT NULL,
  `UpAt` timestamp NULL DEFAULT NULL,
  `UpBy` varchar(16) DEFAULT NULL,
  `PageMasterId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PageMaster`
--

CREATE TABLE `PageMaster` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Note` varchar(255) DEFAULT NULL,
  `Url` varchar(255) NOT NULL,
  `Icon` varchar(100) NOT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `SortId` float DEFAULT NULL,
  `Parent` tinyint(1) NOT NULL,
  `Options` text NOT NULL,
  `CrAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CrBy` varchar(16) NOT NULL,
  `UpAt` timestamp NULL DEFAULT NULL,
  `UpBy` varchar(16) DEFAULT NULL,
  `ParentId` int(11) NOT NULL DEFAULT '0',
  `ServiceName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `RoleMaster`
--

CREATE TABLE `RoleMaster` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Note` varchar(255) DEFAULT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `CrAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CrBy` varchar(16) NOT NULL,
  `UpAt` timestamp NULL DEFAULT NULL,
  `UpBy` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `RoleMasterPermission`
--

CREATE TABLE `RoleMasterPermission` (
  `Id` int(11) NOT NULL,
  `doCreate` tinyint(1) NOT NULL,
  `doUpdate` tinyint(1) NOT NULL,
  `doDelete` tinyint(1) NOT NULL,
  `doRead` tinyint(1) NOT NULL,
  `CrAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CrBy` varchar(16) NOT NULL,
  `UpAt` timestamp NULL DEFAULT NULL,
  `UpBy` varchar(16) DEFAULT NULL,
  `PageMasterId` int(11) NOT NULL,
  `RoleMasterId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `TableButtonSchema`
--

CREATE TABLE `TableButtonSchema` (
  `Id` int(11) NOT NULL,
  `Icon` varchar(255) NOT NULL,
  `ToolTip` varchar(255) NOT NULL,
  `Action` varchar(255) NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `CrAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CrBy` varchar(16) NOT NULL,
  `UpAt` timestamp NULL DEFAULT NULL,
  `UpBy` varchar(16) DEFAULT NULL,
  `PageMasterId` int(11) NOT NULL,
  `Options` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `TableMainSchema`
--

CREATE TABLE `TableMainSchema` (
  `Id` int(11) NOT NULL,
  `Field` varchar(255) NOT NULL,
  `Header` varchar(255) NOT NULL,
  `Type` varchar(15) NOT NULL,
  `Width` varchar(15) NOT NULL,
  `SortBy` int(11) DEFAULT NULL,
  `CrAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CrBy` varchar(16) NOT NULL,
  `UpAt` timestamp NULL DEFAULT NULL,
  `UpBy` varchar(16) DEFAULT NULL,
  `PageMasterId` int(11) NOT NULL,
  `Options` text,
  `IsActive` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `UserMaster`
--

CREATE TABLE `UserMaster` (
  `Id` int(11) NOT NULL,
  `UserName` varchar(60) NOT NULL,
  `UserId` varchar(60) NOT NULL,
  `Password` varchar(60) NOT NULL,
  `Designation` varchar(100) NOT NULL,
  `RoleMasterId` int(11) DEFAULT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `CrAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CrBy` varchar(16) NOT NULL,
  `UpAt` timestamp NULL DEFAULT NULL,
  `UpBy` varchar(16) DEFAULT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `Email` varchar(32) NOT NULL,
  `IsDelete` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `FormData`
--
ALTER TABLE `FormData`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `PageMaster`
--
ALTER TABLE `PageMaster`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `RoleMaster`
--
ALTER TABLE `RoleMaster`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `RoleMasterPermission`
--
ALTER TABLE `RoleMasterPermission`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `TableButtonSchema`
--
ALTER TABLE `TableButtonSchema`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `TableMainSchema`
--
ALTER TABLE `TableMainSchema`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `UserMaster`
--
ALTER TABLE `UserMaster`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserEmail` (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `FormData`
--
ALTER TABLE `FormData`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PageMaster`
--
ALTER TABLE `PageMaster`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `RoleMaster`
--
ALTER TABLE `RoleMaster`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `RoleMasterPermission`
--
ALTER TABLE `RoleMasterPermission`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TableButtonSchema`
--
ALTER TABLE `TableButtonSchema`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TableMainSchema`
--
ALTER TABLE `TableMainSchema`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UserMaster`
--
ALTER TABLE `UserMaster`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
