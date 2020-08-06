const fs = require("fs");
const path = require("path");
const db = require("../../database/models");


const controller = {
  // VER TODOS LOS USUARIOS
  users: async (req, res) => {
    const usuarios = await db.usuarios.findAll()
        res.json({
            meta: {
                status: 200,
                totalUsuarios: usuarios.length,
                link: '/api/users'
            },
            data: usuarios.map(usuario => {
                return {
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                link: `/api/users/${usuario.id}`
                }
            })
        });
  },

//   VER DETALLE DE CADA USUARIO
  user: async (req, res) => {
    const usuario = await db.usuarios.findByPk(req.params.usuarioId)
   
    res.json({
        meta: {
            status: 200,
            link: '/api/users/' + req.params.usuarioId
        },
        data: {
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            direccion: usuario.direccion,
            imagen: usuario.imagen,
            link: `/api/users/${usuario.id}`
            }
    });
}
}
module.exports = controller;