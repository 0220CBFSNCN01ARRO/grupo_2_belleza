'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    direccion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    categoriaUsuarioId: DataTypes.INTEGER
  }, 
  {timestamps: false
  });
  usuarios.associate = (models) => {
    usuarios.belongsTo(models.categoriaUsuario, {
      as: 'categoria',
      foreignKey: 'categoriaUsuarioId'
    });
    usuarios.belongsToMany(models.productos,{
      as: 'productos',
      through: 'productoUsuario',
      foreignKey: 'usuarioId',
      otherKey: 'productoId',
      timestamps: false
    });
  };
  return usuarios;
}