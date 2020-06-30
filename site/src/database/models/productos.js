'use strict';
module.exports = (sequelize, DataTypes) => {
  const productos = sequelize.define('productos', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DECIMAL,
    imagen: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    categoriaProductoId: DataTypes.INTEGER
  },
  {timestamps: false});
  productos.associate = function(models) {
    productos.belongsTo(models.categoriaProducto,{
      as:"categoriaProducto",
      foreignKey: "categoriaProductoId"
    });
    productos.belongsToMany(models.usuarios,{
      as:"usuarios",
      through: 'productoUsuario',
      foreignKey: "productoId",
      otherKey: "usuarioId",
      timestamps: false
    });
    };
    return productos;
};