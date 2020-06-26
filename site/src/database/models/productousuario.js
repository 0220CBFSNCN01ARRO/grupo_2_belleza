'use strict';
module.exports = (sequelize, DataTypes) => {
  const productoUsuario = sequelize.define('productoUsuario', {
    usuarioId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER
  }, {});
  productoUsuario.associate = function(models) {
    // associations can be defined here
  };
  return productoUsuario;
};