const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

usersPath = path.join(__dirname, "../Data/Users.json");

function guardarUsuario(usuario) {
  let usuarios = getUsers();
  usuarios.push(usuario);
  fs.writeFileSync(usersPath, JSON.stringify(usuarios, null, " "));
}

module.exports = {
  root: function (req, res, next) {
    res.render("index", { title: "Home" });
  },
  register: function (req, res, next) {
    console.log("registro");

    res.render("register", { title: "Registro" });
  },
  store: (req, res, next) => {
    delete req.body.repass;
    req.body.pass = bcrypt.hashSync(req.body.pass, 10);
    let userData = {
      id: generateId(),
      ...req.body,
      avatar: req.files[0].filename,
    };
    guardarUsuario(userData);
    res.redirect("/");
  },
};
