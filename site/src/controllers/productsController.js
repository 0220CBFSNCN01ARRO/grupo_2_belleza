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
        res.render("products/products", { productos: productos });
      })
      .catch((error) => console.log(error));
  },

  // VER DETALLE DE CADA PRODUCTO
  detail: (req, res) => {
    db.productos
      .findByPk(req.params.productId)
      .then((producto) => {
        if (producto) {
          res.render("products/productDetail", { producto: producto });
        } else {
          res.render("error");
        }
      })
      .catch((error) => console.log(error));
  },
  // PRODUCTOS ADMIN
  productsAdmin: (req, res) => {
    db.productos
      .findAll()
      .then((productos) => {
        res.render("products/productsAdmin", { productos: productos });
      })
      .catch((error) => console.log(error));
  },
// VER DETALLE DE CADA PRODUCTO ADMIN
detailAdmin: (req, res) => {
  db.productos
    .findByPk(req.params.productId)
    .then((producto) => {
      if (producto) {
        res.render("products/productDetailAdmin", { producto: producto });
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
        res.render("products/productAdd", { categoria });
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
    return res.render("products/productEdit", { producto, categoria });
  },
  // ACCION DE EDITAR
  update: (req, res) => {
    let producto = req.body;

    producto.imagen = req.file ? req.file.filename : req.body.oldImage;
    delete producto.oldImagen;

    db.productos
      .update(producto, {
        where: {
          id: req.params.productId,
        },
      })
      .then((updatedProducto) => {
        return res.redirect(`/products/detailAdmin/${req.params.productId}`);
      })
      .catch((error) => res.send(error));
  },

  // BORRAR UN PRODUCTO
  destroy: async (req, res) => {
    await db.productos.destroy({ 
      where: { id: req.params.productId } 
    });
    res.redirect("/products/productsAdmin");
  },

  // BUSCAR PRODUCTO
  search: async (req, res) => {
    let search = req.query.buscar;

    let productos = await db.productos.findAll({
        where: {
          nombre: { [Op.like]: "%" + search + "%" },
        },
        include: ["categoriaProducto"]
      })
      return res.render("products/search", { productos, search });
  },

  // CARRITO DE COMPRAS
  carrito: function (req, res) {
    res.render("products/productCart", { title: "Carrito de compras" });
  },
  // compra
  compra: function (req, res) {
    res.render("products/productCart", { title: "Compra" });
  },
};

module.exports = controller;
