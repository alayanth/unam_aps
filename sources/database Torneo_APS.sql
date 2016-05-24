-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2016 a las 17:31:51
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `torneo_tca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arbitro`
--

CREATE TABLE `arbitro` (
  `idArbitro` int(2) NOT NULL,
  `nomArbitro` varchar(60) NOT NULL,
  `apar1` varchar(60) NOT NULL,
  `apar2` varchar(60) NOT NULL,
  `password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `idEquipo` int(2) NOT NULL,
  `nomEquipo` varchar(100) NOT NULL,
  `idUni` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flecha`
--

CREATE TABLE `flecha` (
  `idJuego` int(2) NOT NULL,
  `ronda` int(2) NOT NULL,
  `tirada` int(3) NOT NULL,
  `valor` int(2) NOT NULL,
  `idTirador` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juego`
--

CREATE TABLE `juego` (
  `idJuego` int(2) NOT NULL,
  `ronda` int(2) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `lugar` varchar(50) NOT NULL,
  `idArbitro` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegoequipo`
--

CREATE TABLE `juegoequipo` (
  `idJuegoEquipo` int(2) NOT NULL,
  `idJuego` int(2) NOT NULL,
  `idEquipo` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tirador`
--

CREATE TABLE `tirador` (
  `idTirador` int(3) NOT NULL,
  `nomTirador` varchar(60) NOT NULL,
  `ap1` varchar(60) NOT NULL,
  `ap2` varchar(60) DEFAULT NULL,
  `paca` int(2) NOT NULL,
  `idEquipo` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `universidad`
--

CREATE TABLE `universidad` (
  `idUni` int(2) NOT NULL,
  `nomUni` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `universidad`
--

INSERT INTO `universidad` (`idUni`, `nomUni`) VALUES
(1, 'Universidad Nacional Autónoma de México'),
(2, 'Instituto Politécnico Nacional'),
(3, 'Universidad Iberoamericana'),
(4, 'Instituto Tecnológico y de Estudios Superiores de Monterrey'),
(5, 'Universidad Autónoma Metropolitana'),
(6, 'Universidad La Salle'),
(7, 'Universidad del Valle de México'),
(8, 'Universidad Tecnológica de México'),
(9, 'Universidad Panamericana'),
(10, 'Instituto Tecnológico Autónomo de México'),
(11, 'Universidad del Valle de México');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arbitro`
--
ALTER TABLE `arbitro`
  ADD PRIMARY KEY (`idArbitro`);

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`idEquipo`),
  ADD KEY `idUni` (`idUni`);

--
-- Indices de la tabla `flecha`
--
ALTER TABLE `flecha`
  ADD PRIMARY KEY (`idJuego`,`ronda`,`tirada`),
  ADD KEY `idJuego` (`idJuego`,`ronda`),
  ADD KEY `idTirador` (`idTirador`);

--
-- Indices de la tabla `juego`
--
ALTER TABLE `juego`
  ADD PRIMARY KEY (`idJuego`,`ronda`),
  ADD KEY `idArbitro` (`idArbitro`);

--
-- Indices de la tabla `juegoequipo`
--
ALTER TABLE `juegoequipo`
  ADD PRIMARY KEY (`idJuegoEquipo`),
  ADD KEY `idJuego` (`idJuego`,`idEquipo`);

--
-- Indices de la tabla `tirador`
--
ALTER TABLE `tirador`
  ADD PRIMARY KEY (`idTirador`),
  ADD KEY `idEquipo` (`idEquipo`);

--
-- Indices de la tabla `universidad`
--
ALTER TABLE `universidad`
  ADD PRIMARY KEY (`idUni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `arbitro`
--
ALTER TABLE `arbitro`
  MODIFY `idArbitro` int(2) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `idEquipo` int(2) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `juegoequipo`
--
ALTER TABLE `juegoequipo`
  MODIFY `idJuegoEquipo` int(2) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tirador`
--
ALTER TABLE `tirador`
  MODIFY `idTirador` int(3) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `universidad`
--
ALTER TABLE `universidad`
  MODIFY `idUni` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
