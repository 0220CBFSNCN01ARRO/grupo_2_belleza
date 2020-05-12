var express = require("express");
var router = express.Router();

/* GET productCart page. */
router.get("/productDetail", function (req, res, next) {
  res.render("productDetail");
});

module.exports = router;