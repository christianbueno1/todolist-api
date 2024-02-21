-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: company
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `status` enum('OPEN','DONE') NOT NULL DEFAULT 'OPEN',
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6ea2c1c13f01b7a383ebbeaebb0` (`user_id`),
  CONSTRAINT `FK_6ea2c1c13f01b7a383ebbeaebb0` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (17,NULL,'OPEN','bathing','2024-02-20 15:42:14',15),(18,'2024-02-21 20:14:26.000000','DONE','read the bible','2024-02-20 15:43:11',16),(19,'2024-02-21 20:14:25.000000','DONE','working on project','2024-02-20 15:43:44',15),(20,'2024-02-21 05:42:00.000000','OPEN','working on project','2024-02-21 02:37:54',15),(21,'2024-02-21 20:14:24.000000','DONE','go to church','2024-02-21 03:14:00',15),(22,'2024-02-21 05:48:04.000000','OPEN','got to park','2024-02-21 04:26:52',15),(23,'2024-02-21 05:48:13.000000','OPEN','got to gym','2024-02-21 04:32:14',15),(24,'2024-02-21 20:14:23.000000','OPEN','go to bed','2024-02-21 05:14:48',15),(25,'2024-02-21 20:14:22.000000','OPEN','make the breakfast','2024-02-21 05:16:14',15),(26,NULL,'OPEN','got to gym','2024-02-21 20:37:40',16),(27,'2024-02-21 20:38:23.000000','DONE','got to beach','2024-02-21 20:38:14',16),(28,NULL,'OPEN','got to work','2024-02-21 20:40:02',17),(29,NULL,'OPEN','got to party','2024-02-21 20:40:11',17),(30,NULL,'OPEN','give an advice','2024-02-21 20:41:55',15);
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (15,'steverogers','$2b$10$p4RPxGktoGhZIGBLBfJ6Qe8tMexh6gwF.1xmVXB0x7j8VPSTtXoCy','steve@ibm.com'),(16,'tonystark','$2b$10$6IfQ1PaPBqYy//1T4dt6weNHgAyfXTav.0WlgWbFI9S14Dw9Xs3b.','tony@ibm.com'),(17,'brucewayne','$2b$10$Fv9re8YlssNKXTDxoE/1Le0S6tHmN2Dyp6aaLEqDkTbtyz2T7ZZpa','bruce@ibm.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-21 15:51:03
