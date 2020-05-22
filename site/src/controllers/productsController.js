const fs = require('fs');
const path = require('path');

module.exports={
products: function (req, res, next){
    res.render('products', {title: 'Productos'});
},
detail: function (req, res, next) {
    res.render('productDetail', {title: 'Detalle de producto'});
},
create: function (req, res, next) {
    res.render('productAdd', {title: 'Crear Producto'});    
},
edit: function (req, res, next) {
    res.render('products', {title: 'Editar Producto'});
},
store: function (req, res, next) {
    res.render()    
},
delete: function (req, res, next) {
    // let final = products.filter(prod=> prod.id != req.params.productId)
    // fs.writeFileSync(productsFilePath, JSON.stringify(final, null, ' '));
    res.redirect('/products')
},
update: function (req, res, next) {
    res.redirect('/products')
}
}