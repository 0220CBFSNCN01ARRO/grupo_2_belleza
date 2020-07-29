-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-07-2020 a las 22:47:20
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
(1, 'probando probando', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\r\n\r\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.    ', '663', 'imagen-1595110304223.jpg', 10, 2),
(2, 'Anastomus oscitans', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '931', 'http://dummyimage.com/167x193.png/5fa2dd/ffffff', 9, 5),
(3, 'Macaca mulatta', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '791', 'http://dummyimage.com/123x156.png/cc0000/ffffff', 11, 2),
(4, 'Uraeginthus angolensis', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '602', 'http://dummyimage.com/182x103.png/ff4444/ffffff', 2, 4),
(5, 'Physignathus cocincinus', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.', '7', 'http://dummyimage.com/225x232.png/cc0000/ffffff', 6, 3),
(6, 'Nyctereutes procyonoides', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '353', 'http://dummyimage.com/175x212.png/5fa2dd/ffffff', 20, 3),
(7, 'Melophus lathami', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '452', 'http://dummyimage.com/124x178.png/ff4444/ffffff', 3, 5),
(8, 'Bison bison', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '769', 'http://dummyimage.com/174x220.png/5fa2dd/ffffff', 5, 3),
(9, 'Ephippiorhynchus mycteria', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '635', 'http://dummyimage.com/127x168.png/ff4444/ffffff', 14, 3),
(10, 'Casmerodius albus', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '275', 'http://dummyimage.com/244x156.png/cc0000/ffffff', 18, 4),
(11, 'Milvago chimachima', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '21', 'http://dummyimage.com/223x112.png/ff4444/ffffff', 10, 4),
(12, 'Butorides striatus', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '776', 'http://dummyimage.com/211x169.png/ff4444/ffffff', 4, 3),
(13, 'Dicrostonyx groenlandicus', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '4', 'http://dummyimage.com/107x233.png/dddddd/000000', 18, 5),
(14, 'Dusicyon thous', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '83', 'http://dummyimage.com/239x210.png/dddddd/000000', 1, 5),
(15, 'Bassariscus astutus', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '44', 'http://dummyimage.com/116x101.png/cc0000/ffffff', 6, 1),
(16, 'Deroptyus accipitrinus', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '93', 'http://dummyimage.com/205x245.png/dddddd/000000', 3, 3),
(17, 'Pitangus sulphuratus', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '187', 'http://dummyimage.com/201x234.png/dddddd/000000', 10, 2),
(18, 'Melursus ursinus', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '421', 'http://dummyimage.com/219x158.png/cc0000/ffffff', 11, 3),
(19, 'Bubulcus ibis', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '757', 'http://dummyimage.com/165x176.png/ff4444/ffffff', 9, 5),
(20, 'Varanus sp.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '382', 'http://dummyimage.com/109x100.png/ff4444/ffffff', 12, 5),
(21, 'jabon', 'asdad', '21', '', 5, 1),
(22, 'jabon', 'asdsad', '20', '', 4, 1),
(23, 'jabon', 'saaaaaaaaaaaaaaaaarasa', '12', 'imagen-1594417274227.jpg', 15, 1),
(24, 'prueba de nuevo', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '1', 'imagen-1594786357389.jpg', 3, 4),
(25, 'sopa', 'sarasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '150', '', 3, 2),
(26, 'perf', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '25', '', 6, 4),
(27, 'otra prueba', '123456', '125', '', 12, 2),
(28, 'prueba con imagen', 'sargdyrt', '1252', 'imagen-1595098969590.jpg', 12, 2),
(29, 'tg', '', '123', '', 25, 1),
(30, '', 'sadfgdffg', '120', '', 12, 2),
(31, 'Perfume de hombre', 'este perfume eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', '1325', 'imagen-1595993596150.jpg', 22, 4),
(32, 'prueba de nuevo', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '126', 'imagen-1595994105476.jpg', 36, 1),
(33, 'prueba de nuevo', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '126', 'imagen-1595994145599.jpg', 36, 1),
(34, 'prueba de nuevo', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '126', 'imagen-1595994201492.jpg', 36, 1),
(35, 'prueba de nuevo', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '1252', 'imagen-1595994289066.jpg', 14, 3),
(36, 'prueba de nuevo', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '1252', 'imagen-1595994359396.jpg', 14, 3),
(37, '0303456', 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', '36', 'imagen-1595994417275.jpg', 12, 2),
(38, '0303456', 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', '36', 'imagen-1595994527120.jpg', 12, 2),
(39, 'testeando', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '1258', 'imagen-1595994559151.jpg', 12, 2),
(40, 'testeando', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '1258', 'imagen-1595994629601.jpg', 12, 2);

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
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

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
