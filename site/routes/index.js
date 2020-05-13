var express = require("express");
var router = express.Router();

/* GET productCart page. */
router.get("/", function (req, res) {
  res.render("index");
});

module.exports = router;
