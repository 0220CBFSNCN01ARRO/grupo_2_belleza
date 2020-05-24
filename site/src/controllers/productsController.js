const fs = require('fs');
const path = require('path');


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
};

module.exports = controller;