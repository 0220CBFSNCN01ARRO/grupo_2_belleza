'use strict';
module.exports = (sequelize, DataTypes) => {
  const productoUsuario = sequelize.define('productoUsuario', {
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  productoUsuario.associate = (models) => {
    // productoUsuario.(models.usuario);

  };
  return productoUsuario;
};