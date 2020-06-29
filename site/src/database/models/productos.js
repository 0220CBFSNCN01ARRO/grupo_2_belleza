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
  {
    timestamps: false
  });
  productos.associate = (models) => {
    productos.belongsTo(models.categoriaProducto);
    productos.belongsToMany(models.usuarios,{
      through: 'productoUsuario',
      timestamps: false
    });
    };
    return productos;
};