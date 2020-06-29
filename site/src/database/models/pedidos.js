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
    pedidos.belongsTo(models.productoUsuario);
  };
  return pedidos;
};