var express = require("express");
var router = express.Router();
var adminController = require("../controllers/adminController");
const userAdmin = require("../middlewares/userAdmin");


/* GET productCart page. */
router.get("/", userAdmin,  adminController.dashboard);

module.exports = router;