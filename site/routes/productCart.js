var express = require("express");
var router = express.Router();

/* GET productCart page. */
router.get("/", function (req, res) {
  res.render("productCart");
});

module.exports = router;
