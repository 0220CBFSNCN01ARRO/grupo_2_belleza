const fs = require("fs");

module.exports = {
  root: function (req, res, next) {
    res.render("index", { title: "Home" });
  }
};
