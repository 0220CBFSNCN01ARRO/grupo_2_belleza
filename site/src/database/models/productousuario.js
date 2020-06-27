'use strict';
module.exports = (sequelize, DataTypes) => {
  const productoUsuario = sequelize.define('productoUsuario', {
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER
  }, {});
  productoUsuario.associate = function(models) {
    // productoUsuario.(models.usuario);

  };
  return productoUsuario;
};