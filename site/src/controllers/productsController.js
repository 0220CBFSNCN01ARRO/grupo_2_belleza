const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/Products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
  // VER TODOS LOS PRODUCTOS
  products: function (req, res) {
    res.render("products", { products });
  },

  // VER DETALLE DE CADA PRODUCTO
  detail: function (req, res) {
    let producto = products.find(prod => prod.id == req.params.productId);
    res.render("productDetail", { producto });
  },

  // CREAR UN PRODUCTO NUEVO
  create: function (req, res) {
    res.render("productAdd", { title: "Crear Producto" });
  },
  //Accion de crear y guardar prod nuevo
  store: function (req, res, next) {
    // elegir id
    let ids = products.map(prod => prod.id)
    let id = Math.max(...ids) + 1

    // crear producto con datos del formulario
    req.body.price = Number(req.body.price)
    req.body.cantidad = Number(req.body.cantidad)
    
    // actualizar datos del prod nuevo
    let productoNuevo = {
      id: id,
      ...req.body,
      image: '/img/products' + req.file.filename
    }

    // agregar producto nuevo al array
    let final = [...products, productoNuevo];

    // se guarda en json
    fs.writeFileSync(productsFilePath, JSON.stringify(final, null, ' '));

    //redirecciono
    res.render("products"); 
  },

  // EDITAR UN PRODUCTO EXISTENTE
  edit: function (req, res) {
    let producto = products.find(prod => prod.id == req.params.productId)
    res.render("productEdit", { producto });
  },
  // ACCION DE EDITAR
  update: function (req, res) {
    req.body.price = Number(req.body.price)

    let final = products.map(prod => {
      if(prod.id == req.params.productId) {
        return {
          id: prod.id,
          ...req.body,
          image: prod.image
        }
      } else {
        return prod
      }
    })

    // se guarda en el Json
    fs.writeFileSync(productsFilePath, JSON.stringify(final, null, ' '));
    // redirecciono a PRODUCTS
    res.redirect("/products");
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
  delete: function (req, res) {
    // let final = products.filter(prcreateod=> prod.id != req.params.productId)
    // fs.writeFileSync(productsFilePath, JSON.stringify(final, null, ' '));
    res.redirect("/products");
  },
};

module.exports = controller;
