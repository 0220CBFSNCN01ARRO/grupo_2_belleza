'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoriaUsuario = sequelize.define('categoriaUsuario', {
    categoria: DataTypes.STRING
  }, {
    timestamps: false
  });
  categoriaUsuario.associate = (models) => {
    categoriaUsuario.hasMany(models.usuarios, {
      as: 'usuarios',
    });
  };
  return categoriaUsuario;
};