'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define('pedidos', {
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER,
    cantidadProducto: DataTypes.INTEGER
  }, {timestamps: false});
  pedidos.associate = function(models) {
    pedidos.belongsTo(models.historial);
  };
  return pedidos;
};