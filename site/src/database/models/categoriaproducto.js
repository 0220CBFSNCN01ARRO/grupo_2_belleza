'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoriaProducto = sequelize.define('categoriaProducto', {
    categoria: DataTypes.STRING,
    parentCategoryId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  categoriaProducto.associate = (models) => {
    categoriaProducto.hasMany(models.productos);
  };
  return categoriaProducto;
};