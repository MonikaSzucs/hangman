-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2018 at 02:15 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hangman2`
--

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `player_id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `score` varchar(250) NOT NULL,
  `word_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`player_id`, `name`, `score`, `word_id`) VALUES
(70, 'MonikaSzucs', '50', 0);

-- --------------------------------------------------------

--
-- Table structure for table `words_available`
--

CREATE TABLE `words_available` (
  `id` int(11) NOT NULL,
  `word` varchar(250) NOT NULL,
  `definiton` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `words_available`
--

INSERT INTO `words_available` (`id`, `word`, `definiton`) VALUES
(1, 'vermillion', 'a vivid red to reddish-orange color.'),
(2, 'uncanny', 'surpassing the ordinary or normal.'),
(3, 'tenacious', 'stubbornly unyielding.'),
(4, 'serene', 'not agitated.'),
(5, 'rhetorical', 'relating to using language effectively.'),
(6, 'nostalgic', 'unhappy about being away and longing for familiar things.'),
(7, 'lucid', 'transparently clear; easily understandable.'),
(8, 'jejune', 'lacking interest or significance or impact.'),
(9, 'fervent', 'characterized by intense emotion.'),
(10, 'alliteration', 'use of the same consonant at the beginning of each word.'),
(11, 'aggrandize', 'embellish; increase the scope, power or importance of.'),
(12, 'alias', 'a name that has been assumed temporarily.'),
(13, 'anachronistic', 'chronologically misplaced.'),
(14, 'approbation', 'official approval.'),
(15, 'aspersion', 'a disparaging remark.'),
(16, 'cajole', 'influence or urge by gentle urging, caressing, or flattering.'),
(17, 'clamor', 'utter or proclaim insistently or noisily.'),
(18, 'enervate', 'weaken mentally or morally.'),
(19, 'equivocal', 'open to two or more interpretations.'),
(20, 'impinge', 'infringe upon.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD UNIQUE KEY `player_id` (`player_id`);

--
-- Indexes for table `words_available`
--
ALTER TABLE `words_available`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `player_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
--
-- AUTO_INCREMENT for table `words_available`
--
ALTER TABLE `words_available`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
