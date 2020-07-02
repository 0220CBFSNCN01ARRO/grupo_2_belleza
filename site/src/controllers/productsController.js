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
      .create(productos)
      .then((storedProduct) => {
        return res.redirect("/products/");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // EDITAR UN PRODUCTO EXISTENTE
  edit: (req, res) => {
    const producto = db.productos.findByPk(req.params.productId);
    const categoria = db.categoriaProducto.findAll();

    Promise.all([producto, categoria])
      .then((responses) => {
        if (responses[0]) {
          console.log(responses[0].dataValues);
          res.render("productEdit", {
            producto: responses[0],
            categoria: responses[1],
          });
        } else {
          res.render("error");
        }
      })
      .catch((error) => console.log(error));
  },
  // ACCION DE EDITAR
  update: (req, res) => {
    producto = req.body;

    producto.imagen = req.params.imagen ? req.body.imagen : req.body.oldImagen;
    delete product.oldImagen;

    db.productos
      .update(producto, {
        where: {
          id: req.params.productId,
        },
      })
      .then((updatedProducto) => {
        res.redirect(`/productDetail/${req.params.productId}`);
      });
  },
  // CARRITO DE COMPRAS
  carrito: function (req, res) {
    res.render("productCart", { title: "Carrito de compras" });
  },
  // compra
  compra: function (req, res) {
    res.render("productCart", { title: "Compra" });
  },

  // BORRAR UN PRODUCTO
  destroy: (req, res) => {
    db.productos
      .findByPk(req.params.productId)
      // Si el registro existe
      .then(async (producto) => {
        // Lo borramos
        await db.productos.destroy({ where: { id: req.params.productId } });

        // y además borramos la imagen asociada
        // const imagenPath = path.resolve(__dirname, '../../public/img/products', producto.imagen);
        // if (fs.existsSync(imagenPath)) {
        //     fs.unlinkSync(imagenPath);
        // }

        // luego volvemos al listado
        res.redirect("/products/");
      })
      .catch((error) => console.log(error));
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
};

module.exports = controller;
