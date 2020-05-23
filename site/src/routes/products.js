const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// PRODUCTOS Y DETALLE
router.get("/", productsController.products);
router.get("/detail", productsController.detail);

// CREAR UN PRODUCTO
router.get("/create", productsController.create); //Vista del form para crear prod//
router.post("/create", productsController.store); //Acción de crear y guardar//

// EDITAR UN PRODUCTOS
router.get("/:id/edit", productsController.edit); //Vista del form para editar prod//
router.put("/:id/edit", productsController.update); //Acción d mandar la modificacion (Modificar el formulario)//

// BORRAR UN PRODUCTO
router.delete("/:id/delete", productsController.delete);

module.exports = router;
