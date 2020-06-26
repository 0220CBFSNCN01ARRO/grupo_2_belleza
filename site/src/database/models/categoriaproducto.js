'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoriaProducto = sequelize.define('categoriaProducto', {
    categoria: DataTypes.STRING,
    parentCategoryId: DataTypes.INTEGER
  }, {});
  categoriaProducto.associate = function(models) {
    // associations can be defined here
  };
  return categoriaProducto;
};