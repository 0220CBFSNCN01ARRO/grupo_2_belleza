var express = require('express');
var router = express.Router();
const usersApiController = require('../../controllers/api/usersApiController');



// PRODUCTOS Y DETALLE
router.get("/", usersApiController.users);
router.get("/:usuarioId/", usersApiController.user);

module.exports = router;