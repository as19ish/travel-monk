-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: project_fashion
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

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
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add product_type',7,'add_product_type'),(26,'Can change product_type',7,'change_product_type'),(27,'Can delete product_type',7,'delete_product_type'),(28,'Can view product_type',7,'view_product_type'),(29,'Can add product',8,'add_product'),(30,'Can change product',8,'change_product'),(31,'Can delete product',8,'delete_product'),(32,'Can view product',8,'view_product'),(33,'Can add order_ item_ details',9,'add_order_item_details'),(34,'Can change order_ item_ details',9,'change_order_item_details'),(35,'Can delete order_ item_ details',9,'delete_order_item_details'),(36,'Can view order_ item_ details',9,'view_order_item_details'),(37,'Can add order',10,'add_order'),(38,'Can change order',10,'change_order'),(39,'Can delete order',10,'delete_order'),(40,'Can view order',10,'view_order');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$180000$Z9B7OtWxysfH$TF6mO9YgMfGBXSjvsUzPN5u2XKX/rCSQ5iEQHzkH6XE=','2020-02-13 08:00:27.970213',1,'kamal','','','kamalims62@gmail.com',1,1,'2020-01-23 10:14:04.286103');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(10,'item','order'),(9,'item','order_item_details'),(8,'item','product'),(7,'item','product_type'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2020-01-23 10:08:18.098381'),(2,'auth','0001_initial','2020-01-23 10:08:18.285520'),(3,'admin','0001_initial','2020-01-23 10:08:18.840888'),(4,'admin','0002_logentry_remove_auto_add','2020-01-23 10:08:18.969924'),(5,'admin','0003_logentry_add_action_flag_choices','2020-01-23 10:08:18.989952'),(6,'contenttypes','0002_remove_content_type_name','2020-01-23 10:08:19.092732'),(7,'auth','0002_alter_permission_name_max_length','2020-01-23 10:08:19.113600'),(8,'auth','0003_alter_user_email_max_length','2020-01-23 10:08:19.139873'),(9,'auth','0004_alter_user_username_opts','2020-01-23 10:08:19.156194'),(10,'auth','0005_alter_user_last_login_null','2020-01-23 10:08:19.235853'),(11,'auth','0006_require_contenttypes_0002','2020-01-23 10:08:19.241010'),(12,'auth','0007_alter_validators_add_error_messages','2020-01-23 10:08:19.254867'),(13,'auth','0008_alter_user_username_max_length','2020-01-23 10:08:19.276577'),(14,'auth','0009_alter_user_last_name_max_length','2020-01-23 10:08:19.301470'),(15,'auth','0010_alter_group_name_max_length','2020-01-23 10:08:19.323588'),(16,'auth','0011_update_proxy_permissions','2020-01-23 10:08:19.340131'),(17,'sessions','0001_initial','2020-01-23 10:08:19.376835'),(18,'item','0001_initial','2020-01-23 16:51:39.516120');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('fm7ps2mheq30rev70x1dy0smo352phqg','Yzk1ODBkMjcyYWYwZDM2YzJmMGFhMjcyYTFkYzNjNWU1ZWUxZDBhOTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1OThiNTMxNzk3NDVmZmQwNzBkNzcyZDgyODM3M2M1ZDNmNmEyYWU0In0=','2020-02-25 15:35:13.113964'),('jezbotdvhu39gp8cqt77zfx5u6g06k31','Yzk1ODBkMjcyYWYwZDM2YzJmMGFhMjcyYTFkYzNjNWU1ZWUxZDBhOTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1OThiNTMxNzk3NDVmZmQwNzBkNzcyZDgyODM3M2M1ZDNmNmEyYWU0In0=','2020-02-06 11:56:31.496285'),('ueoj4suslaxvo7wrpz7sn8cbqiwf5arj','Yzk1ODBkMjcyYWYwZDM2YzJmMGFhMjcyYTFkYzNjNWU1ZWUxZDBhOTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1OThiNTMxNzk3NDVmZmQwNzBkNzcyZDgyODM3M2M1ZDNmNmEyYWU0In0=','2020-02-27 08:00:27.977476');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_order`
--

DROP TABLE IF EXISTS `item_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_customer_name` varchar(200) NOT NULL,
  `order_amount` int(11) NOT NULL,
  `order_address` varchar(1000) NOT NULL,
  `order_phone` varchar(1000) NOT NULL,
  `order_date` datetime(6) NOT NULL,
  `order_status` varchar(100) NOT NULL,
  `order_quantity` varchar(100) NOT NULL,
  `order_product_id_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_order_order_product_id_id_01e461bb_fk_item_product_id` (`order_product_id_id`),
  CONSTRAINT `item_order_order_product_id_id_01e461bb_fk_item_product_id` FOREIGN KEY (`order_product_id_id`) REFERENCES `item_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_order`
--

LOCK TABLES `item_order` WRITE;
/*!40000 ALTER TABLE `item_order` DISABLE KEYS */;
INSERT INTO `item_order` VALUES (2,'Kamal Rautela',70,'Kumour pithoragarh','08979383543','2020-01-29 16:34:53.152243','fail','1',2),(3,'Vinita',850,'xssxsxsxsx','96532','2020-01-31 14:19:41.397131','fail','1',41),(4,'Blank',950,'Blank','9456725682','2020-02-02 12:35:50.756009','fail','1',27),(5,'Pankaj Babu',699,'Altran , Tower 5 , candor Tech Space, it Sez\nSec -48 , Near subhash chowk','8802005421','2020-02-03 06:52:13.803977','fail','1',49),(6,'Puran Singh',1350,'Bestech park view spa sector 47 gurugram\nB/1801\n','8826722679','2020-02-03 09:29:35.198622','fail','1',25),(7,'Mahima',999,'Kumour pithoragarh','08979383543','2020-02-04 06:15:06.685275','fail','1',55),(8,'Kamal Rautela',280,'Kumour pithoragarh','08979383543','2020-02-05 12:02:44.257681','fail','1',2),(9,'Abbbb',1350,'Gghjgdfghh','589556744','2020-02-05 13:05:39.474746','fail','1',41),(10,'Negi',280,'Gurgaun','7217628468','2020-02-05 13:23:56.525994','fail','1',2),(11,'Usudududuu',480,'Duudududud','Hdhhdhdux','2020-02-05 13:25:52.746920','fail','1',20),(12,'zxc',280,'gfr sdjk  dfn  ggrre k','9897638854','2020-02-05 14:07:43.285454','fail','1',2),(13,'klk',280,'uyuyuyu','989898989898989898','2020-02-05 15:17:48.579820','fail','1',2),(14,'demo',280,'hghg','8787','2020-02-05 15:22:50.776035','fail','1',2),(15,'demo',280,'iuiui','8979383543','2020-02-05 15:45:31.191410','fail','1',2),(16,'demo',280,'er','8979383448','2020-02-05 15:46:16.182909','fail','1',2),(17,'Mahima singh ',100,'G B Pant institute of engineering and technology raman hostel','8171265337','2020-02-05 16:08:53.581830','fail','1',10),(18,'Demo',999,'Kumour pithoragarh','8979383543','2020-02-05 17:46:57.373875','fail','1',55),(19,'demo',1000,'Kumour pithoragarh','8979383543','2020-02-05 18:12:04.259131','fail','1',51),(20,'Mohit',699,'Cinema line','9045611521','2020-02-05 18:49:04.638765','fail','1',39),(21,'Ekta Bisht',99,'Tulsi Niwas G.I.C. Road Pithoragarh','8826987787','2020-02-08 16:14:37.019397','success','1',7),(22,'Kamal_Test',70,'Kumour pithoragarh','8979383543','2020-02-12 08:15:54.924759','fail','1',2),(23,'kamal',70,'Kumour pithoragarh','8979383543','2020-02-12 09:54:47.133600','fail','1',3),(24,'kamal',70,'piiii','7878787878','2020-02-12 09:59:54.597877','fail','1',2),(25,'Kamal Rautela',850,'Kumour pithoragarh','8979383543','2020-02-14 12:31:57.434816','fail','1',41),(26,'Kamal Rautela',800,'Kumour pithoragarh','8979383543','2020-02-17 10:38:54.535712','fail','1',28),(27,'PURAN',150,'Kumour pithoragarh','8979383543','2020-02-17 10:43:17.207275','fail','1',11),(28,'kamal singh rautela',70,'Kumour pithoragarh','8979383543','2020-03-03 02:54:20.835104','fail','1',2),(29,'kamal',800,'Kumour pithoragarh','8979383543','2020-03-04 06:15:37.255631','fail','1',28);
/*!40000 ALTER TABLE `item_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_order_item_details`
--

DROP TABLE IF EXISTS `item_order_item_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_order_item_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_size` varchar(10) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_type` varchar(100) NOT NULL,
  `product_gender` varchar(100) NOT NULL,
  `order_product_id_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_order_item_deta_order_product_id_id_3d099cea_fk_item_orde` (`order_product_id_id`),
  CONSTRAINT `item_order_item_deta_order_product_id_id_3d099cea_fk_item_orde` FOREIGN KEY (`order_product_id_id`) REFERENCES `item_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_order_item_details`
--

LOCK TABLES `item_order_item_details` WRITE;
/*!40000 ALTER TABLE `item_order_item_details` DISABLE KEYS */;
INSERT INTO `item_order_item_details` VALUES (2,'T-shirt','pics/IMG_20200127_125653.jpg','S',70,'T-shirt','FEMALE',2),(3,'Jeans','pics/IMG_20200131_160644.jpg','30 to 36',850,'Jeans','MALE',3),(4,'Top','pics/IMG_20200130_175837.jpg','M',950,'Top','FEMALE',4),(5,'Shirt','pics/IMG_20200131_160607_dz0KmNv.jpg','M',699,'Shirt','MALE',5),(6,'Top','pics/IMG_20200130_175811.jpg','M',1350,'Top','FEMALE',6),(7,'Shoes','pics/IMG_20200203_123803.jpg','41 to 45',999,'Shoes','MALE',7),(8,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',8),(9,'Jeans','pics/IMG_20200131_160644.jpg','30 to 36',1350,'Jeans','MALE',9),(10,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',10),(11,'Top','pics/IMG_20200130_173633.jpg','M',480,'Top','FEMALE',11),(12,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',12),(13,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',13),(14,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',14),(15,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',15),(16,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',16),(17,'T-shirt','pics/IMG_20200127_125712.jpg','S',350,'T-shirt','FEMALE',17),(18,'Shoes','pics/IMG_20200203_123803.jpg','41 to 45',999,'Shoes','MALE',18),(19,'Shoes','pics/IMG_20200203_123322.jpg','41 to 45',1750,'Shoes','MALE',19),(20,'Cotton jeans','pics/IMG_20200131_160821.jpg','30 to 36',999,'Cotton jeans','MALE',20),(21,'Top','pics/IMG_20200127_125843.jpg','M',399,'Top','FEMALE',21),(22,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',22),(23,'t-shirt','pics/IMG_20200127_123110.jpg','s',280,'T-shirt','FEMALE',23),(24,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',24),(25,'Jeans','pics/IMG_20200131_160644.jpg','30 to 36',1350,'Jeans','MALE',25),(26,'Cargo','pics/IMG_20200130_173517.jpg','30 to 36',1200,'Cargo','MALE',26),(27,'T-shirt','pics/IMG_20200127_125828.jpg','S',400,'T-shirt','FEMALE',27),(28,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,'T-shirt','FEMALE',28),(29,'Cargo','pics/IMG_20200130_173517.jpg','30 to 36',1200,'Cargo','MALE',29);
/*!40000 ALTER TABLE `item_order_item_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_product`
--

DROP TABLE IF EXISTS `item_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_size` varchar(10) NOT NULL,
  `product_price` int(11) NOT NULL,
  `discounted_price` int(11) NOT NULL,
  `products_in_stock` int(11) NOT NULL,
  `product_type` varchar(100) NOT NULL,
  `product_gender` varchar(100) NOT NULL,
  `product_description` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_product`
--

LOCK TABLES `item_product` WRITE;
/*!40000 ALTER TABLE `item_product` DISABLE KEYS */;
INSERT INTO `item_product` VALUES (2,'T-shirt','pics/IMG_20200127_125653.jpg','S',280,210,1,'T-shirt','FEMALE','Good quality'),(3,'t-shirt','pics/IMG_20200127_123110.jpg','s',280,210,1,'T-shirt','FEMALE','good quality'),(4,'T-shirt','pics/IMG_20200127_125750.jpg','S',280,180,1,'T-shirt','FEMALE','Good quality'),(5,'T-shirt','pics/IMG_20200127_125457.jpg','S',300,200,1,'T-shirt','FEMALE','Good quality'),(6,'T-shirt','pics/IMG_20200127_125406.jpg','S',300,200,1,'T-shirt','FEMALE','Good quality'),(7,'Top','pics/IMG_20200127_125843.jpg','M',399,300,0,'Top','FEMALE','Fancy top'),(8,'Top','pics/IMG_20200127_125858.jpg','M',399,300,1,'Top','FEMALE','Fancy top'),(9,'T-shirt','pics/IMG_20200127_125625.jpg','S',350,280,1,'T-shirt','FEMALE','Good quality'),(10,'T-shirt','pics/IMG_20200127_125712.jpg','S',350,250,1,'T-shirt','FEMALE','Good quality'),(11,'T-shirt','pics/IMG_20200127_125828.jpg','S',400,250,1,'T-shirt','FEMALE','Good quality'),(12,'T-shirt','pics/IMG_20200127_125556.jpg','S',350,250,1,'T-shirt','FEMALE','Good quality'),(13,'T-shirt','pics/IMG_20200127_125730.jpg','M',350,250,1,'T-shirt','FEMALE','Good quality'),(14,'T-shirt','pics/IMG_20200127_125810.jpg','S',280,210,1,'T-shirt','FEMALE','Good quality'),(15,'T-shirt','pics/IMG_20200127_125532.jpg','S',280,210,1,'T-shirt','FEMALE','Good quality'),(16,'T-shirt','pics/IMG_20200127_125435.jpg','M',280,210,1,'T-shirt','FEMALE','Good quality'),(17,'Top','pics/IMG_20200130_173619.jpg','M',480,200,1,'Top','FEMALE','Good quality'),(18,'Top','pics/IMG_20200130_173712.jpg','M',1250,600,1,'Top','FEMALE','Good quality'),(19,'Top','pics/IMG_20200130_173657.jpg','M',1250,600,0,'Top','FEMALE','Good quality'),(20,'Top','pics/IMG_20200130_173633.jpg','M',480,200,1,'Top','FEMALE','Good quality'),(21,'Top','pics/IMG_20200130_170207.jpg','M',1250,600,0,'Top','FEMALE','Good quality'),(22,'Top','pics/IMG_20200130_165943.jpg','M',1250,600,0,'Top','FEMALE','Good quality'),(23,'Top','pics/IMG_20200130_173647.jpg','M',850,500,1,'Top','FEMALE','Good quality'),(25,'Top','pics/IMG_20200130_175811.jpg','M',1350,700,1,'Top','FEMALE','Good quality'),(26,'Top','pics/IMG_20200130_175823.jpg','M',1350,700,0,'Top','FEMALE','Good quality'),(27,'Top','pics/IMG_20200130_175837.jpg','M',950,450,1,'Top','FEMALE','Good quality'),(28,'Cargo','pics/IMG_20200130_173517.jpg','30 to 36',1200,400,4,'Cargo','MALE','6 pocket cargo'),(34,'Cargo','pics/IMG_20200130_173553.jpg','30 to 36',1200,400,4,'Cargo','MALE','6 pocket cargo '),(35,'Cargo','pics/IMG_20200130_173533.jpg','30 to 36',1200,400,4,'Cargo','MALE','6 pocket cargo'),(36,'Cotton jeans','pics/IMG_20200131_160807.jpg','30 to 36',999,300,4,'Cotton jeans','MALE','Fine quality'),(37,'Cotton jeans','pics/IMG_20200131_160753.jpg','30 to 36',999,300,4,'Cotton jeans','MALE','Fine quality'),(38,'Cotton jeans','pics/IMG_20200131_160738.jpg','30 to 36',999,300,4,'Cotton jeans','MALE','Fine quality'),(39,'Cotton jeans','pics/IMG_20200131_160821.jpg','30 to 36',999,300,4,'Cotton jeans','MALE','Fine quality'),(40,'Cotton jeans','pics/IMG_20200130_173347.jpg','30 to 36',999,300,4,'Cotton jeans','MALE','Fine quality'),(41,'Jeans','pics/IMG_20200131_160644.jpg','30 to 36',1350,500,4,'Jeans','MALE','Best quality'),(42,'Jeans','pics/IMG_20200131_160659.jpg','30 to 36',1450,600,4,'Jeans','MALE','Gogger style'),(43,'Jeans','pics/IMG_20200131_160718.jpg','30 to 36',1250,450,4,'Jeans','MALE','Best quality'),(44,'Jeans','pics/IMG_20200130_173413.jpg','30 to 36',1250,500,4,'Jeans','MALE','Best quality'),(45,'Jeans','pics/IMG_20200130_173456.jpg','30 to 36',1350,500,4,'Jeans','MALE','Best quality'),(46,'Jeans','pics/IMG_20200130_173436.jpg','30 to 36',1650,700,4,'Jeans','MALE','Best quality'),(47,'Hoodies','pics/IMG_20200130_171317.jpg','L',1750,1000,1,'Hoodie','MALE','Good quality'),(48,'Hoodies','pics/IMG_20200130_173318.jpg','L',1250,600,1,'Hoodie','MALE','Best quality'),(49,'Shirt','pics/IMG_20200131_160607_dz0KmNv.jpg','M',699,350,0,'Shirt','MALE','Best quality'),(50,'Shirt','pics/IMG_20200131_160548.jpg','M',699,350,1,'Shirt','MALE','Best quality'),(51,'hello','pics/IMG_20200203_123322.jpg','41 to 45',1750,750,4,'Shoes','MALE','Good quality shoes limited size available'),(52,'hello','pics/IMG_20200203_123130.jpg','41 to 45',2850,1100,4,'Shoes','MALE','Good quality shoes limited size available'),(53,'hello','pics/IMG_20200203_123111.jpg','41 to 45',2850,950,4,'Shoes','MALE','Good quality shoes limited size available'),(54,'hello','pics/IMG_20200203_123251.jpg','41 to 45',1750,950,4,'Shoes','MALE','Good quality shoes limited size available'),(55,'hello','pics/IMG_20200203_123803.jpg','41 to 45',999,400,4,'Shoes','MALE','Good quality shoes limited size available'),(56,'hello','pics/IMG_20200203_123824.jpg','41 to 45',999,400,4,'Shoes','MALE','Good quality shoes limited size available'),(57,'hello','pics/IMG_20200203_123351.jpg','41 to 45',999,400,4,'Shoes','MALE','Good quality shoes limited size available'),(58,'hello','pics/IMG_20200203_123338.jpg','41 to 45',1850,1000,4,'Shoes','MALE','Good quality shoes limited size available'),(59,'T-shirt','pics/IMG_20200205_181627.jpg','M to L',599,349,0,'T-shirt','MALE','Good quality '),(60,'T-shirt','pics/IMG_20200205_181706.jpg','M to L',599,349,0,'T-shirt','MALE','Good quality'),(61,'T-shirt','pics/IMG_20200205_181722.jpg','M',599,349,0,'T-shirt','MALE','Good quality'),(62,'T-shirt','pics/IMG_20200205_181648.jpg','L',599,349,3,'T-shirt','MALE','Good quality'),(63,'T-shirt','pics/IMG_20200205_181742.jpg','L',599,349,1,'T-shirt','MALE','Good quality'),(65,'hello','pics/IMG_20200226_120746.jpg','41 to 45',1850,750,5,'Shoes','MALE','Good quality'),(66,'hello','pics/IMG_20200226_120657.jpg','41 to 45',1650,700,5,'Shoes','MALE','Good quality'),(67,'hello','pics/IMG_20200226_120728.jpg','41 to 45',1950,750,5,'Shoes','MALE','Good quality'),(68,'hello','pics/IMG_20200226_120714.jpg','41 to 45',1850,700,5,'Shoes','MALE','Good quality'),(69,'T-shirt','pics/IMG_20200225_181437.jpg','M,l,xl,xxl',999,500,4,'T-shirt','MALE','Good quality'),(70,'T-shirt','pics/IMG_20200225_181419.jpg','M,l,xl',999,500,3,'T-shirt','MALE','Good quality'),(71,'T-shirt','pics/IMG_20200225_181409.jpg','M,l,xl',999,500,3,'T-shirt','MALE','Good quality'),(72,'T-shirt','pics/IMG_20200225_181400.jpg','M,l,xl',850,450,3,'T-shirt','MALE','Good quality'),(73,'T-shirt','pics/IMG_20200225_181350.jpg','M,l,xl',850,450,3,'T-shirt','MALE','Good quality'),(74,'T-shirt','pics/IMG_20200225_181339.jpg','M,l,xl',850,450,3,'T-shirt','MALE','Good quality'),(75,'T-shirt','pics/IMG_20200225_181321.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(76,'T-shirt','pics/IMG_20200225_181004.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(77,'T-shirt','pics/IMG_20200225_181035.jpg','M,l,xl',850,450,3,'T-shirt','MALE','Good quality'),(78,'T-shirt','pics/IMG_20200225_181024.jpg','M,l,xl',850,450,3,'T-shirt','MALE','Good quality'),(79,'T-shirt','pics/IMG_20200225_181014.jpg','M,l,xl',850,450,3,'T-shirt','MALE','Good quality'),(80,'T-shirt','pics/IMG_20200225_180902.jpg','M,l,xl,xxl',850,450,4,'T-shirt','MALE','Good quality'),(81,'T-shirt','pics/IMG_20200225_180911.jpg','M,l,xl,xxl',850,450,4,'T-shirt','MALE','Good quality'),(82,'T-shirt','pics/IMG_20200225_180450.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(83,'T-shirt','pics/IMG_20200225_180515.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(84,'T-shirt','pics/IMG_20200225_180537.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(85,'T-shirt','pics/IMG_20200225_180526.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(86,'T-shirt','pics/IMG_20200225_181046.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(87,'T-shirt','pics/IMG_20200225_180931.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(88,'T-shirt','pics/IMG_20200225_180941.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(89,'T-shirt','pics/IMG_20200225_180619.jpg','M,l,xl',899,349,3,'T-shirt','MALE','Good quality'),(90,'T-shirt','pics/IMG_20200225_180608.jpg','M,l,xl',899,349,3,'T-shirt','MALE','Good quality'),(91,'T-shirt','pics/IMG_20200225_180026.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(92,'T-shirt','pics/IMG_20200225_180805.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(93,'T-shirt','pics/IMG_20200225_180738.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(94,'T-shirt','pics/IMG_20200225_180747.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(95,'T-shirt','pics/IMG_20200225_180634.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(96,'T-shirt','pics/IMG_20200225_180634_pwW6ok9.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(97,'T-shirt','pics/IMG_20200225_180644.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(98,'T-shirt','pics/IMG_20200225_180814.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(99,'T-shirt','pics/IMG_20200225_180619_GubOCtS.jpg','M,l,xl',899,399,3,'T-shirt','MALE','Good quality'),(100,'T-shirt','pics/IMG_20200225_180836.jpg','M,l,xl',899,599,3,'T-shirt','MALE','Good quality');
/*!40000 ALTER TABLE `item_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_product_type`
--

DROP TABLE IF EXISTS `item_product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_type_name` varchar(1000) NOT NULL,
  `product_type_gender` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_product_type`
--

LOCK TABLES `item_product_type` WRITE;
/*!40000 ALTER TABLE `item_product_type` DISABLE KEYS */;
INSERT INTO `item_product_type` VALUES (11,'Top','FEMALE'),(12,'T-shirt','FEMALE'),(14,'Cargo','MALE'),(16,'Cotton jeans','MALE'),(17,'Jeans','MALE'),(18,'Hoodie','MALE'),(19,'Shirt','MALE'),(20,'Shoes','MALE'),(22,'T-shirt','MALE');
/*!40000 ALTER TABLE `item_product_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-03  4:25:56
