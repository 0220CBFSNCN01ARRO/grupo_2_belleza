'use strict';
module.exports = (sequelize, DataTypes) => {
  const historial = sequelize.define('historial', {
    pedidoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    nombreProducto: DataTypes.STRING,
    descripcionProducto: DataTypes.TEXT,
    precioProducto: DataTypes.DECIMAL,
    cantidadProducto: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  historial.associate = (models) => {
    historial.belongsTo(models.usuarios);
    historial.belongsTo(models.pedidos);
  };
  return historial;
};