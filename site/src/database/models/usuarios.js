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
  }, {});
  usuarios.associate = function(models) {
    // associations can be defined here
  };
  return usuarios;
};