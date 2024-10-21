CREATE DATABASE  IF NOT EXISTS `cardgame` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cardgame`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: cardgame
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carta`
--

DROP TABLE IF EXISTS `carta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carta` (
  `Id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  `Atk` int NOT NULL,
  `Vida` int NOT NULL,
  `Raridade` varchar(50) NOT NULL,
  `Imagem` varchar(255) DEFAULT NULL,
  `Preco` decimal(10,2) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carta`
--

LOCK TABLES `carta` WRITE;
/*!40000 ALTER TABLE `carta` DISABLE KEYS */;
INSERT INTO `carta` VALUES (1,'carta',1111,1111,'5','x',12345.00),(2,'Dragon Slayer',300,1500,'Rare','dragon_slayer.png',500.00),(3,'Mystic Elf',150,1200,'Common','mystic_elf.png',100.00),(4,'Warrior of Light',250,1600,'Uncommon','warrior_of_light.png',300.00),(5,'Dark Magician',350,1800,'Rare','dark_magician.png',700.00),(6,'Blue-Eyes White Dragon',500,2000,'Epic','blue_eyes_white_dragon.png',1000.00);
/*!40000 ALTER TABLE `carta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deck`
--

DROP TABLE IF EXISTS `deck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deck` (
  `Id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  `CartaImg` varchar(255) DEFAULT NULL,
  `ContaId` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deck`
--

LOCK TABLES `deck` WRITE;
/*!40000 ALTER TABLE `deck` DISABLE KEYS */;
INSERT INTO `deck` VALUES (1,'deck','carta',1),(2,'Starter Deck','starter_deck.png',1),(3,'Warrior Deck','warrior_deck.png',2),(4,'Mage Deck','mage_deck.png',3);
/*!40000 ALTER TABLE `deck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deck_carta`
--

DROP TABLE IF EXISTS `deck_carta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deck_carta` (
  `DeckId` int NOT NULL,
  `CartaId` int NOT NULL,
  PRIMARY KEY (`DeckId`,`CartaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deck_carta`
--

LOCK TABLES `deck_carta` WRITE;
/*!40000 ALTER TABLE `deck_carta` DISABLE KEYS */;
INSERT INTO `deck_carta` VALUES (1,1),(1,2),(2,3),(2,4),(3,5);
/*!40000 ALTER TABLE `deck_carta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jogador`
--

DROP TABLE IF EXISTS `jogador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogador` (
  `Id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  `PosX` int NOT NULL,
  `PosY` int NOT NULL,
  `Ouro` decimal(10,2) NOT NULL,
  `Vida` int NOT NULL,
  `MundoCena` varchar(255) DEFAULT NULL,
  `DeckEquipado` int DEFAULT NULL,
  `EfeitoEquipado` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogador`
--

LOCK TABLES `jogador` WRITE;
/*!40000 ALTER TABLE `jogador` DISABLE KEYS */;
INSERT INTO `jogador` VALUES (1,'Miguel',1,1,99999.00,999,'abc',1,1),(2,'Hero',10,20,1000.00,100,'Forest',1,1),(3,'Mage',15,25,800.00,120,'Mountain',2,2),(4,'Warrior',5,30,1200.00,90,'Castle',3,3);
/*!40000 ALTER TABLE `jogador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `Id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Senha` varchar(255) NOT NULL,
  `Diamante` int NOT NULL,
  `Ip` varchar(45) DEFAULT NULL,
  `Vitorias` int DEFAULT NULL,
  `Partidas` int DEFAULT NULL,
  `OuroMaximo` decimal(10,2) DEFAULT NULL,
  `nSaves` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'miguel','miguel@mig.com','123',999999999,'5',999999999,1,999.00,1),(2,'PlayerOne','playerone@example.com','password123',100,'192.168.1.1',20,50,5000.00,3),(3,'PlayerTwo','playertwo@example.com','securepass',200,'192.168.1.2',15,40,3000.00,2),(4,'PlayerThree','playerthree@example.com','1234pass',150,'192.168.1.3',10,25,4000.00,4),(5,'Pinhata','andrepinharibeiro@gmail.com','123456andre',0,'0',0,0,0.00,0),(6,'João Pedro','joaopedromoraesguedes@gmail.com','123456789',0,'0',0,0,0.00,0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioconta_carta`
--

DROP TABLE IF EXISTS `usuarioconta_carta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarioconta_carta` (
  `UsuarioContaId` int NOT NULL,
  `CartaId` int NOT NULL,
  PRIMARY KEY (`UsuarioContaId`,`CartaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioconta_carta`
--

LOCK TABLES `usuarioconta_carta` WRITE;
/*!40000 ALTER TABLE `usuarioconta_carta` DISABLE KEYS */;
INSERT INTO `usuarioconta_carta` VALUES (1,1),(1,2),(2,3),(2,4),(3,5);
/*!40000 ALTER TABLE `usuarioconta_carta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioconta_deck`
--

DROP TABLE IF EXISTS `usuarioconta_deck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarioconta_deck` (
  `UsuarioContaId` int NOT NULL,
  `DeckId` int NOT NULL,
  PRIMARY KEY (`UsuarioContaId`,`DeckId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioconta_deck`
--

LOCK TABLES `usuarioconta_deck` WRITE;
/*!40000 ALTER TABLE `usuarioconta_deck` DISABLE KEYS */;
INSERT INTO `usuarioconta_deck` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `usuarioconta_deck` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-20 23:30:50
