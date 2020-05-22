var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/products', productsController.products); 
router.get('/products/detail/:id/:category', productsController.detail);

router.get('/products/create', productsController.create);//Vista del form para crear prod//
router.post('/products/create', productsController.store);//Acción de crear y guardar//

router.get('/products/:id/edit', productsController.edit);//Vista del form para editar prod//
router.put('/products/:id/edit', productsController.update);//Acción d mandar la modificacion (Modificar el formulario)//
router.delete('/products/:id/delete', productsController.delete);

module.exports = router;