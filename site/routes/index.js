var express = require("express");
var router = express.Router();
const mainController = require ('../controllers/mainController');

/* GET productCart page. */
router.get("/", mainController.root);
  res.render("index");

router.get("/register", mainController.register);

module.exports = router;
