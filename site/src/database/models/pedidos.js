'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define('pedidos', {
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER,
    cantidadProducto: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  pedidos.associate = (models) => {
    pedidos.belongsTo(models.historial);
  };
  return pedidos;
};