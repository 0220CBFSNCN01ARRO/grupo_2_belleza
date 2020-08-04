-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-08-2020 a las 22:19:08
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dhstyle`
--
CREATE DATABASE IF NOT EXISTS `dhstyle` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dhstyle`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaproducto`
--

CREATE TABLE `categoriaproducto` (
  `ID` smallint(6) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoriaproducto`
--

INSERT INTO `categoriaproducto` (`ID`, `categoria`) VALUES
(1, 'jabon'),
(2, 'shampoo'),
(3, 'acondicionador'),
(4, 'perfume'),
(5, 'talco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriausuario`
--

CREATE TABLE `categoriausuario` (
  `ID` smallint(6) NOT NULL,
  `categoria` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoriausuario`
--

INSERT INTO `categoriausuario` (`ID`, `categoria`) VALUES
(1, 'Admin'),
(2, 'Logueado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `ID` smallint(6) NOT NULL,
  `pedidoId` smallint(6) NOT NULL,
  `usuarioId` smallint(6) NOT NULL,
  `nombreProducto` varchar(30) NOT NULL,
  `descripcionProducto` mediumtext NOT NULL,
  `precioProducto` decimal(10,0) NOT NULL,
  `cantidadProducto` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`ID`, `pedidoId`, `usuarioId`, `nombreProducto`, `descripcionProducto`, `precioProducto`, `cantidadProducto`) VALUES
(1, 5, 5, 'Mycteria ibis', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '178', 47),
(2, 10, 2, 'Acridotheres tristis', 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.', '233', 20),
(3, 9, 13, 'Cebus nigrivittatus', 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', '645', 7),
(4, 6, 14, 'Sarkidornis melanotos', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '612', 9),
(5, 8, 3, 'Mabuya spilogaster', 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', '645', 15),
(6, 3, 12, 'Aonyx capensis', 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', '924', 25),
(7, 4, 7, 'Trichechus inunguis', 'Aliquam quis turpis eget elit sodales scelerisque.', '852', 38),
(8, 9, 4, 'Acrantophis madagascariensis', 'Morbi a ipsum.', '274', 36),
(9, 6, 14, 'Semnopithecus entellus', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.', '477', 24),
(10, 9, 3, 'Calyptorhynchus magnificus', 'Aenean auctor gravida sem.', '811', 29),
(11, 5, 17, 'Cebus nigrivittatus', 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '837', 42),
(12, 1, 12, 'Anathana ellioti', 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.', '448', 8),
(13, 7, 1, 'Eunectes sp.', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '93', 9),
(14, 7, 1, 'Epicrates cenchria maurus', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.', '693', 23),
(15, 8, 15, 'Agelaius phoeniceus', 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.', '575', 4),
(16, 1, 19, 'Larus sp.', 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', '578', 3),
(17, 9, 11, 'Columba livia', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', '521', 46),
(18, 1, 9, 'Ratufa indica', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', '861', 25),
(19, 6, 4, 'Cervus duvauceli', 'Pellentesque eget nunc.', '913', 41),
(20, 9, 19, 'Sylvilagus floridanus', 'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '895', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `ID` smallint(6) NOT NULL,
  `usuarioId` smallint(6) NOT NULL,
  `productoId` smallint(6) NOT NULL,
  `stockProductoId` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID` smallint(6) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `stock` smallint(6) NOT NULL,
  `categoriaProductoId` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID`, `nombre`, `descripcion`, `precio`, `imagen`, `stock`, `categoriaProductoId`) VALUES
(1, 'Perfume Masculino Tradicional', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\r\n\r\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.      ', '800', 'imagen-1596142147635.jpg', 3, 4),
(3, 'Perfume Femenino Pasión', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n\r\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\r\n\r\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.   ', '950', 'imagen-1596142177642.jpg', 6, 4),
(4, 'Perfume Femenino Floral', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.  ', '750', 'imagen-1596142211531.jpg', 2, 4),
(5, 'Perfume Masculino Océano ', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\r\n\r\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\r\n\r\nIn congue. Etiam justo. Etiam pretium iaculis justo.  ', '975', 'imagen-1596142253873.jpg', 5, 4),
(6, 'Perfume Femenino Magic', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\r\n\r\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.  ', '1125', 'imagen-1596142322242.jpg', 5, 4),
(7, 'Perfume Masculino Pasión', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. ', '750', 'imagen-1596142375600.jpg', 4, 4),
(8, 'Perfume Femenino Kiss', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. ', '700', 'imagen-1596142419722.jpg', 3, 4),
(9, 'Perfume Femenino Sombras', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. ', '1299', 'imagen-1596142456313.jpg', 3, 4),
(10, 'Shampoo Masculino Action', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\r\n\r\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\r\n\r\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. ', '410', 'imagen-1596142569931.jpg', 5, 2),
(11, 'Acondicionador Masculino', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. ', '410', 'imagen-1596142630294.jpg', 4, 3),
(12, 'Shampoo Natural', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\r\n\r\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. ', '600', 'imagen-1596142683936.png', 10, 2),
(13, 'Acondicionador Natural', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\r\n\r\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\r\n\r\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. ', '600', 'imagen-1596142713585.jpg', 10, 3),
(14, 'Shampoo Color', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\r\n\r\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. ', '500', 'imagen-1596142768162.jpg', 7, 2),
(15, 'Acondicionador Color', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. ', '500', 'imagen-1596142799930.jpg', 7, 3),
(16, 'Shampoo Color chico', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\r\n\r\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\r\n\r\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. ', '300', 'imagen-1596142885097.jpg', 5, 2),
(17, 'Jabon Liquido Chico', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\r\n\r\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.  ', '100', 'imagen-1596143188069.jpg', 9, 1),
(18, 'Jabon Liquido', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', '210', 'imagen-1596143219479.jpg', 9, 1),
(19, 'Jabones Florales', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', '325', 'imagen-1596143303780.jpg', 10, 1),
(20, 'Jabones Vainilla', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\r\n\r\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.    ', '230', 'imagen-1596467095362.jpg', 5, 1),
(21, 'Jabones Lavanda', 'asdad  ghfghsfgdfgfgsdff dsfgdsfgf\r\ngsdfdgfdafsfs', '235', 'imagen-1596467222895.jpg', 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productousuario`
--

CREATE TABLE `productousuario` (
  `ID` smallint(6) NOT NULL,
  `usuarioId` smallint(6) NOT NULL,
  `productoId` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` smallint(6) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `categoriaUsuarioId` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `nombre`, `apellido`, `email`, `password`, `direccion`, `imagen`, `categoriaUsuarioId`) VALUES
(1, 'Gonzalo', NULL, 'admin2@mail.com', '12345678', NULL, NULL, 1),
(25, 'Guille', 'Cipriani', 'admin1@mail.com', '12345678', NULL, NULL, 1),
(27, 'Rocio', NULL, 'admin3@mail.com', '12345678', NULL, NULL, 1),
(28, 'Pepito', NULL, 'nadie@sinmail.com', '$2b$10$MRe3.lsVbfAkZ3V4y9D7k.Sv30Idbvf/rJvUhOfeBl.AgyBEBMQpa', NULL, NULL, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoriaproducto`
--
ALTER TABLE `categoriaproducto`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `categoriausuario`
--
ALTER TABLE `categoriausuario`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `productoId` (`productoId`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `producto-categoria` (`categoriaProductoId`);

--
-- Indices de la tabla `productousuario`
--
ALTER TABLE `productousuario`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `productoId` (`productoId`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `categoriaUsuarioId` (`categoriaUsuarioId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoriaproducto`
--
ALTER TABLE `categoriaproducto`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categoriausuario`
--
ALTER TABLE `categoriausuario`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `productousuario`
--
ALTER TABLE `productousuario`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`productoId`) REFERENCES `productos` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `producto-categoria` FOREIGN KEY (`categoriaProductoId`) REFERENCES `categoriaproducto` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `productousuario`
--
ALTER TABLE `productousuario`
  ADD CONSTRAINT `productousuario_ibfk_2` FOREIGN KEY (`productoId`) REFERENCES `productos` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `productousuario_ibfk_3` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`categoriaUsuarioId`) REFERENCES `categoriausuario` (`ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
