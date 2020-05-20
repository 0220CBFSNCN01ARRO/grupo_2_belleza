var express = require("express");
var router = express.Router();

/* GET productAdd page. */
router.get("/", function (req, res) {
  res.render("productAdd");
});

module.exports = router;
