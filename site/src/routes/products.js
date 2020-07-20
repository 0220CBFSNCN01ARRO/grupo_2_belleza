const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// controllers require
const productsController = require("../controllers/productsController");

//  Multer
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/img/products")); //aca hay un problema con la ruta
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

// PRODUCTOS Y DETALLE
router.get("/", productsController.products);
router.get("/detail/:productId/", productsController.detail);

// CREAR UN PRODUCTO
router.get("/create/", productsController.create); //Vista del form para crear prod//
router.post("/create/", upload.single("imagen"), productsController.store); //Acción de crear y guardar//

// EDITAR UN PRODUCTOS
router.get("/edit/:productId", productsController.edit); //Vista del form para editar prod//
router.put("/edit/:productId", upload.single("imagen"), productsController.update); //Acción d mandar la modificacion (Modificar el formulario)//

// CARRITO
router.get("/carrito", productsController.carrito); //carrito
router.post("/carrito", productsController.compra); //Acción para comprar

// BORRAR UN PRODUCTO
router.delete("/delete/:productId/", productsController.destroy);

// BUSCAR UN PRODUCTO
router.get("/search", productsController.search);

module.exports = router;
