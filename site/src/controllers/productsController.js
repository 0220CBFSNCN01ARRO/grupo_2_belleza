const fs = require("fs");
const path = require("path");

var controller = {
  products: function (req, res, next) {
    res.render("products", { title: "Productos" });
  },
  detail: function (req, res, next) {
    res.render("detail", { title: "Detalle de producto" });
  },
  create: function (req, res, next) {
    res.render("productAdd", { title: "Crear Producto" });
  },
  edit: function (req, res, next) {
    res.render("products", { title: "Editar Producto" });
  },
  store: function (req, res, next) {
    res.render(); //Accion de crear y guardar prod nuevo//
  },
  delete: function (req, res, next) {
    // let final = products.filter(prod=> prod.id != req.params.productId)
    // fs.writeFileSync(productsFilePath, JSON.stringify(final, null, ' '));
    res.redirect("/products");
  },
  update: function (req, res, next) {
    res.redirect("/products");
  },
};

module.exports = controller;
