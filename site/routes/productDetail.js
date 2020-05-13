var express = require("express");
var router = express.Router();

/* GET productDetail page. */
router.get("/", function (req, res){
  res.render("productDetail");
});

 

module.exports = router;