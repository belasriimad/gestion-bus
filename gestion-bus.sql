-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 30 avr. 2018 à 11:50
-- Version du serveur :  10.1.28-MariaDB
-- Version de PHP :  5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gestion-bus`
--

-- --------------------------------------------------------

--
-- Structure de la table `cordone`
--

CREATE TABLE `cordone` (
  `emi` varchar(50) NOT NULL,
  `altut` varchar(15) NOT NULL,
  `longt` varchar(15) NOT NULL,
  `temptt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `vid` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cordone`
--

INSERT INTO `cordone` (`emi`, `altut`, `longt`, `temptt`, `vid`) VALUES
('864722036910143', '31.926', '5.3715', '2018-04-17 21:49:24', ''),
('864722036910144', '31.926', '5.3714', '2018-04-17 21:56:58', ''),
('864722036910145', '31.926', '5.3715', '2018-04-17 21:58:01', ''),
('864722036910146', '31.927', '5.3647', '2018-04-17 21:58:55', ''),
('864722036910147', '31.926', '5.3715', '2018-04-17 21:59:05', ''),
('864722036910148', '31.926', '5.3714', '2018-04-17 22:01:05', '');

-- --------------------------------------------------------

--
-- Structure de la table `infobus`
--

CREATE TABLE `infobus` (
  `emi` varchar(50) NOT NULL,
  `matricul` varchar(50) NOT NULL,
  `num_ligne` varchar(50) NOT NULL,
  `nom_ligne` varchar(250) NOT NULL,
  `nom_cheff` varchar(250) NOT NULL,
  `nbrcercul` int(11) NOT NULL,
  `maxplace` int(11) NOT NULL,
  `vd1` int(11) NOT NULL,
  `vd2` varchar(250) NOT NULL,
  `vd3` varchar(250) NOT NULL,
  `vd4` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `infobus`
--

INSERT INTO `infobus` (`emi`, `matricul`, `num_ligne`, `nom_ligne`, `nom_cheff`, `nbrcercul`, `maxplace`, `vd1`, `vd2`, `vd3`, `vd4`) VALUES
('864722036910143', '23377A89', '1', 'Ville nouvelle', 'Samadi', 23, 50, 22, '', '', ''),
('864722036910144', '23378A89', '2', 'Marché ', 'Amine', 33, 50, 33, '', '', ''),
('864722036910145', '23379A89', '3', 'Fes jedid', 'Harti', 33, 50, 40, '', '', ''),
('864722036910146', '23388A89', '4', 'Dar debibegh', 'Alaoui', 44, 50, 34, '', '', ''),
('864722036910147', '24377A89', '5', 'Bensouda', 'Kamal', 44, 30, 33, '', '', ''),
('864722036910148', '22889A89', '8', 'Sidi boujida', 'Aghmani', 44, 40, 22, '', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
