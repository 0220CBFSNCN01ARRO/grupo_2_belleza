'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoriaUsuario = sequelize.define('categoriaUsuario', {
    categoria: DataTypes.STRING
  }, {});
  categoriaUsuario.associate = function(models) {
    categoriaUsuario.hasMany(models.usuarios);
  };
  return categoriaUsuario;
};