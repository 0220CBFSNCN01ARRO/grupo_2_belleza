var express = require("express");
var router = express.Router();

/* GET productDetail page. */
router.get("/productDetail", function (req, res, next) {
  res.render('productDetail', { title: 'Express' });
});

module.exports = router;