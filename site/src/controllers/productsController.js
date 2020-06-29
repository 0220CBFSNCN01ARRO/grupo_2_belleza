const fs = require("fs");
const path = require("path");
const db = require('../database/models');

// const productsFilePath = path.join(__dirname, "../data/Products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  // VER TODOS LOS PRODUCTOS
    products: (req, res) => {
    db.productos
            .findAll()
            .then(productos => {
                res.render('products', { productos });
            })
            .catch(error => console.log(error));
    },

  // VER DETALLE DE CADA PRODUCTO
    detail: (req, res) => {
    db.productos
        .findByPk(req.params.id, { include: ['categoriaproducto']})
        .then(productos => {
            if(productos) {
                res.render('productDetail', { productos });
            } else {
                res.render('error');
            }
        })
        .catch(error => console.log(error));
    },

  // CREAR UN PRODUCTO NUEVO
    create: (req, res) => {
    db.productos
    .findAll()
    .then(productos => {
        res.render('productAdd');
    })
    .catch(error => console.log(error));
    },
  //Accion de crear y guardar prod nuevo
    store: (req, res) => {
        producto = req.body;
        producto.imagen = req.file ? req.file.filename : '';
            
        db.productos
        .create(producto)
        .then(storedProduct => {
          //storedProduct.addTags(req.bokeywords.split(' '))
        return res.redirect(`/products/${storedProduct.id}`)
    })
    .catch(error => { console.log(error)});
    },

  // EDITAR UN PRODUCTO EXISTENTE
    edit: (req, res) => {
    const producto = db.productos.findByPk(req.params.id);
    const categorias = db.categoriaproducto.findAll();

    Promise
        .all([producto, categorias])
        .then(responses => {
            if(responses[0]) {
                console.log(responses[0].dataValues);
                res.render('productEdit', { producto: responses[0], categorias: responses[1] });
            } else {
                res.render('error');
            }
        })
        .catch(error => console.log(error));
    },
  // ACCION DE EDITAR
    update: (req, res) => {

    producto = req.body;
    
    producto.imagen = req.params.imagen ? req.body.imagen : req.body.oldImagen;
    delete product.oldImagen;

    
    db.productos
        .update(producto, {
            where: {
                id: req.params.id
            }
        })
        .then(updatedProducto => {
            res.redirect(`/productDetail/${req.params.id}`)
        })
        .catch(error => { console.log(error) })
    
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
        .findByPk(req.params.id)
        // Si el registro existe
        .then(async producto => {
            // Lo borramos
            await db.productos.destroy({ where: { id: req.params.id } });
            
            // y además borramos la imagen asociada
            const imagenPath = path.resolve(__dirname, '../../public/img/products', producto.imagen);
            if (fs.existsSync(imagenPath)) {
                fs.unlinkSync(imagenPath);
            }

            // luego volvemos al listado
            res.redirect(`/products/`)
        })
        .catch(error => console.log(error));
}
};

module.exports = controller;
