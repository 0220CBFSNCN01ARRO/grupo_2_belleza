const fs = require("fs");
const path = require("path");
const db = require('../database/models');

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
    db.productos.findByPk(req.params.id)
    .then(producto => {
        if(producto) {
            res.render('productDetail', { producto:producto });
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
          return res.redirect(`/products/${storedProduct.id}`)
      })
      .catch(error => { console.log(error)});
  },

    //   nombre: req.body.nombre,
    //     descripcion: req.body.descripcion,
    //     precio: req.body.precio,
    //     imagen: req.body.imagen,
    //     stock: req.body.stock,
    //     categoriaProductoId: req.body.categoriaProductoId
    // });
    // res.redirect('/products/${storedProduct.id}')

  // EDITAR UN PRODUCTO EXISTENTE
  edit: (req, res) => {
  const producto = db.productos.findByPk(req.params.id);
  const categorias = db.categoriaProducto.findAll();

  Promise.all([producto, categorias])
  .then(function ([producto, categorias]){
    res.redirect(`/productDetail/${req.params.id}`)
  })
  },
  // ACCION DE EDITAR
  update: (req, res) => {

    producto = req.body;
    
    producto.imagen = req.params.imagen ? req.body.imagen : req.body.oldImagen;
    delete product.oldImagen;

    // product.keywords = product.keywords.split(' ');
    
    db.productos
        .update(producto, {
            where: {
                id: req.params.id
            }
        })
        .then(updatedProducto => {
            res.redirect(`/productDetail/${req.params.id}`)
        })    
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
