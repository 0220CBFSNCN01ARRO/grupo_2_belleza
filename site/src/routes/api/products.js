var express = require('express');
var router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');



// PRODUCTOS Y DETALLE
router.get("/", productsApiController.products);
// router.get("/detail/:productId/", productsApiController.detail);

module.exports = router;