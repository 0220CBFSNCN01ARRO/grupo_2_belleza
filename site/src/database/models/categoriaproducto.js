'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoriaProducto = sequelize.define('categoriaProducto', {
    categoria: DataTypes.STRING,
    parentCategoryId: DataTypes.INTEGER
  }, {});
  categoriaProducto.associate = function(models) {
    categoriaProducto.hasMany(models.productos,{
      as: "productos",
      foreignKey:"categoriaProductoId"
    });
  };
  return categoriaProducto;
};