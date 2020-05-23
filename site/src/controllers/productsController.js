const fs = require("fs");
const path = require("path");

<<<<<<< HEAD
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
=======

const controller={
        // ver todos los productos
    products: function (req, res){
        res.render('products', {title: 'Productos'});
    },

        // ver detalle de cada producto
    detail: function (req, res) {
        console.log('anda productDetail');
        
        res.render('productDetail', {title: 'Detalle de producto'});
    },

        // crear un producto nuevo
    create: function (req, res) {
        res.render('productAdd', {title: 'Crear Producto'});    
    },
    store: function (req, res) {
        res.render('products')    //Accion de crear y guardar prod nuevo//
    },

        // editar un producto existente
    edit: function (req, res) {
        res.render('edit', {title: 'Editar Producto'});
    },
    update: function (req, res) {
        res.redirect('/products')
    },

        // borrar un producto
    delete: function (req, res) {
        // let final = products.filter(prcreateod=> prod.id != req.params.productId)
        // fs.writeFileSync(productsFilePath, JSON.stringify(final, null, ' '));
        res.redirect('/products')
    }
>>>>>>> d4e849ab43a891edc2834e143f70641301c37bb1
};

module.exports = controller;
