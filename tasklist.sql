-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 29/06/2018 às 01:15
-- Versão do servidor: 10.2.15-MariaDB
-- Versão do PHP: 7.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u830666290_taskl`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `title` varchar(50) CHARACTER SET latin1 NOT NULL,
  `description` varchar(200) CHARACTER SET latin1 NOT NULL,
  `is_completed` enum('Y','N') CHARACTER SET latin1 NOT NULL DEFAULT 'N',
  `is_deleted` enum('Y','N') CHARACTER SET latin1 NOT NULL DEFAULT 'N',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `task`
--

INSERT INTO `task` (`id`, `title`, `description`, `is_completed`, `is_deleted`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'sdfg', 'sdfg', 'N', 'N', '2018-06-29 00:04:21', NULL, NULL),
(2, 'teste', 'teste', 'N', 'N', '2018-06-29 00:05:33', NULL, NULL),
(3, 'teste2', 'tetetert', 'N', 'N', '2018-06-29 00:06:46', NULL, NULL),
(4, 'dfg', 'dfg', 'N', 'N', '2018-06-29 00:07:55', NULL, NULL),
(5, 'teste', 'teste', 'N', 'N', '2018-06-29 00:09:00', NULL, NULL),
(6, 'teste', 'teste', 'N', 'N', '2018-06-29 00:09:49', NULL, NULL),
(7, 'cvbcvb', 'cvbcvb', 'N', 'N', '2018-06-29 00:10:01', NULL, NULL),
(8, 'teste', 'teste', 'N', 'N', '2018-06-29 00:15:53', NULL, NULL),
(9, 'cvb', 'cbvcbv', 'N', 'N', '2018-06-29 00:16:04', NULL, NULL),
(10, 'guio', 'guio\n', 'N', 'Y', '2018-06-29 00:41:45', NULL, '2018-06-29 01:09:41');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
