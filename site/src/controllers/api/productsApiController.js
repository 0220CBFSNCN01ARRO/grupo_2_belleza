const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = db.Sequelize;


const controller = {
  // VER TODOS LOS PRODUCTOS
  products: async (req, res) => {
    const productos = await db.productos.findAll()
    const categoriaProducto = await db.categoriaProducto.findAll({
        include: ["productos"]
    })
        res.json({
            meta: {
                status: 200,
                totalProductos: productos.length,
                totalCategorias: categoriaProducto.map(categoria => {
                    return {
                        nombre: categoria.categoria,
                        cantidadProductos: categoria.productos.length
                }
                }),
                link: '/api/products'
            },
            data: productos.map(producto => {
                return {
                id: producto.id,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                link: `/api/products/${producto.id}`
                }
            })
        });
  },

//   VER DETALLE DE CADA PRODUCTO
  detail: async (req, res) => {
    const producto = await db.productos.findByPk(req.params.productId, {
        include: ['categoriaProducto']
    })
   
    res.json({
        meta: {
            status: 200,
            link: '/api/products/' + req.params.productId
        },
        data: {
            id: producto.id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            categoria: producto.categoriaProducto,
            precio: producto.precio,
            stock: producto.stock,
            imagen: producto.imagen,
            link: `/api/products/${producto.id}`
            }
    });
}
}
module.exports = controller;
