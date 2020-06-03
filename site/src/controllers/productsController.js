const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/Products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
  // ver todos los productos
  products: function (req, res) {
    res.render("products", { products });
  },

  // ver detalle de cada producto
  detail: function (req, res) {
    let producto = products.find(prod => prod.id == req.params.productId);
    res.render("productDetail", { producto });
  },

  // crear un producto nuevo
  create: function (req, res) {
    res.render("productAdd", { title: "Crear Producto" });
  },
  store: function (req, res) {
    res.render("products"); //Accion de crear y guardar prod nuevo//
  },

  // editar un producto existente
  edit: function (req, res) {
    res.render("edit", { title: "Editar Producto" });
  },
  update: function (req, res) {
    res.redirect("/products");
  },
  // carrito
  carrito: function (req, res) {
    res.render("productCart", { title: "Carrito de compras" });
  },
  // compra
  compra: function (req, res) {
    res.render("productCart", { title: "Compra" });
  },

  // borrar un producto
  delete: function (req, res) {
    // let final = products.filter(prcreateod=> prod.id != req.params.productId)
    // fs.writeFileSync(productsFilePath, JSON.stringify(final, null, ' '));
    res.redirect("/products");
  },
};

module.exports = controller;
