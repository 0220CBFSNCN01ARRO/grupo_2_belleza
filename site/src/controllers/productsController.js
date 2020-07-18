const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = db.Sequelize;

const controller = {
  // VER TODOS LOS PRODUCTOS
  products: (req, res) => {
    db.productos
      .findAll()
      .then((productos) => {
        res.render("products", { productos: productos });
      })
      .catch((error) => console.log(error));
  },

  // VER DETALLE DE CADA PRODUCTO
  detail: (req, res) => {
    db.productos
      .findByPk(req.params.productId)
      .then((producto) => {
        if (producto) {
          res.render("productDetail", { producto: producto });
        } else {
          res.render("error");
        }
      })
      .catch((error) => console.log(error));
  },

  // CREAR UN PRODUCTO NUEVO
  create: (req, res) => {
    db.productos
      .findAll()
      .then((categoria) => {
        res.render("productAdd", { categoria });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  store: (req, res, next) => {
    productos = req.body;
    productos.imagen = req.file ? req.file.filename : "";

    db.productos
      .create(req.body)
      .then((storedProduct) => {
        return res.redirect("/products/");
      })
      .catch((error) => res.send(error));
  },
  // EDITAR UN PRODUCTO EXISTENTE
  edit: async (req, res) => {
    const categoria = await db.categoriaProducto.findAll();
    const producto = await db.productos.findByPk(req.params.productId, {
      include: ["categoriaProducto"],
    });
    return res.render("productEdit", { producto, categoria });
  },
  // ACCION DE EDITAR
  update: (req, res) => {
    let producto = req.body;

    producto.imagen = req.params.imagen ? req.body.imagen : req.body.oldImagen;
    delete producto.oldImagen;

    db.productos
      .update(producto, {
        where: {
          id: req.params.productId,
        },
      })
      .then((updatedProducto) => {
        return res.redirect(`/products/detail/${req.params.productId}`);
      })
      .catch((error) => res.send(error));
  },

  // BORRAR UN PRODUCTO
  destroy: async (req, res) => {
    await db.productos.destroy({ where: { id: req.params.productId } });
    res.redirect("/products/");
  },

  // BUSCAR PRODUCTO
  search: (req, res) => {
    let search = req.query.buscar;

    db.productos
      .findAll({
        where: {
          categoriaProductoId: { [Op.like]: "%" + search + "%" },
        },
      })
      .then((productos) => res.render("search", { productos, search }));
  },
  // CARRITO DE COMPRAS
  carrito: function (req, res) {
    res.render("productCart", { title: "Carrito de compras" });
  },
  // compra
  compra: function (req, res) {
    res.render("productCart", { title: "Compra" });
  },
};

module.exports = controller;
