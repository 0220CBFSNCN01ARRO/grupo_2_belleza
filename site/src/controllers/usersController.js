const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

usersPath = path.join(__dirname, "../Data/Users.json");

// Leer usuarios en Json
function getUsers() {
  let userContent = fs.readFileSync(usersPath, "utf8");
  return userContent != "" ? JSON.parse(userContent) : [];
}
// Buscar usuario por id
function getUserById(id) {
  let usuarios = getUsers();
  return usuarios.find((user) => user.id == id);
}
// Buscar que el email exista
function getUserByEmail(email) {
  let usuarios = getUsers();
  return usuarios.find((user) => user.email == email);
}
// Creación de usuario
function generateId() {
  let usuarios = getUsers();
  if (usuarios.length) {
    return usuarios.length + 1;
  } else {
    return 1;
  }
}
// Guardar usuario en Json
function guardarUsuario(usuario) {
  let usuarios = getUsers();
  usuarios.push(usuario);
  fs.writeFileSync(usersPath, JSON.stringify(usuarios, null, " "));
}

module.exports = {
  register: (req, res) => {
    res.render("register");
  },
  store: (req, res, next) => {
    delete req.body.pass;
    req.body.pass = bcrypt.hashSync(req.body.pass, 10);
    let userData = {
      id: generateId(),
      ...req.body,
      //   avatar: req.files[0].filename,
    };
    guardarUsuario(userData);
    res.redirect("/");
  },
  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res, next) => {
    // Si existe el usuario
    let usuario = getUserByEmail(req.body.email);

    if (usuario) {
      // Si la contraseña existe y es correcta
      if (bcrypt.compareSync(req.body.pass, usuario.pass)) {
        // delete usuario.pass;
        let userSession = {
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
        };
        req.session.user = userSession;
        if (req.body.remember) {
          res.cookie("usuario", usuario, { maxAge: 1000 * 60 * 60 * 24 * 90 });
        }

        res.redirect(`/`);
      } else {
        res.render("register", {
          errors: {
            pass: "Error en la contraseña",
          },
        });
      }
    } else {
      res.render("register", {
        errors: {
          email: "No existe cuenta registrada con ese email",
        },
      });
    }
  },
  profile: (req, res) => {
    let usuario = getUserById(req.params.id);
    res.render("profile", { usuario });
  },
  logout: (req, res) => {
    req.session.user = null;
    // Destruimos la cookie de recordar
    res.clearCookie("usuario");

    // res.locals.usuario = null
    res.redirect("/");
  },
};
