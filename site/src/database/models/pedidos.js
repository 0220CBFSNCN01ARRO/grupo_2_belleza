'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define('pedidos', {
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER,
    cantidadProducto: DataTypes.INTEGER
  }, {});
  pedidos.associate = function(models) {
    // associations can be defined here
  };
  return pedidos;
};