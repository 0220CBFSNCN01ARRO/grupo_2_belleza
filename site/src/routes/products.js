var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/', productsController.products); 
router.get('/detail', productsController.detail);

router.get('/productAdd', productsController.create);//Vista del form para crear prod//
router.post('/create', productsController.store);//Acción de crear y guardar//

router.get('/:id/edit', productsController.edit);//Vista del form para editar prod//
router.put('/:id/edit', productsController.update);//Acción d mandar la modificacion (Modificar el formulario)//
router.delete('/:id/delete', productsController.delete);

module.exports = router;