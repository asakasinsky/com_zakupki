# Дамп таблицы jos_zakupki_config
# ------------------------------------------------------------

DROP TABLE IF EXISTS `#__zakupki_config`;

CREATE TABLE `#__zakupki_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `param` varchar(128) NOT NULL,
  `value` text NOT NULL,
  `default` text NOT NULL,
  `label` varchar(255) NOT NULL,
  `type` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `param` (`param`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `#__zakupki_config` WRITE;
/*!40000 ALTER TABLE `#__zakupki_config` DISABLE KEYS */;

INSERT INTO `#__zakupki_config` (`id`, `param`, `value`, `default`, `label`, `type`)
VALUES
	(1,'maillist','','','По этим email отправится заявка','commas');

/*!40000 ALTER TABLE `#__zakupki_config` ENABLE KEYS */;
UNLOCK TABLES;

