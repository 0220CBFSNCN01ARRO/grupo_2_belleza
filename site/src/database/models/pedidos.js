'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define('pedidos', {
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER,
    cantidadProducto: DataTypes.INTEGER
  }, {});
  pedidos.associate = function(models) {
    pedidos.belongsTo(models.historial);
    pedidos.belongsTo(models.productoUsuario);
  };
  return pedidos;
};