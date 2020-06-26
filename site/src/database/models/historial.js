'use strict';
module.exports = (sequelize, DataTypes) => {
  const historial = sequelize.define('historial', {
    pedidoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    nombreProducto: DataTypes.STRING,
    descripcionProducto: DataTypes.TEXT,
    precioProducto: DataTypes.DECIMAL,
    cantidadProducto: DataTypes.INTEGER
  }, {});
  historial.associate = function(models) {
    // associations can be defined here
  };
  return historial;
};