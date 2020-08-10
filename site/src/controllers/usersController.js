const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const validationHelper = require("../validators/validatorHelpler");

module.exports = {
  // REGISTRO DE USUARIO
  register: (req, res) => {
    res.render("users/register");
  },
  store: (req, res) => {
    let errors = validationResult(req);
    let betterErrors = validationHelper(errors.mapped());
    betterErrors.create('imagen', 'No es un archivo de imagen válido', req.body.imagen);
    betterErrors.create("email", "Mail no valido", req.body.email);

    if (!errors.isEmpty()) {
      return res.render("users/register", {
        old: req.body,
        errors: betterErrors,
      });
    } 
    usuario = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      imagen: req.file ? req.file.filename : '',
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      categoriaUsuarioId: 2,
    };

    db.usuarios
      .create(usuario)
      .then((storedUsuario) => {
        return res.redirect("/users/login");
      })
      .catch((error) => console.log(error));
  },
  // LOGIN DE USUARIO
  login: (req, res) => {
    res.render("users/login");
  },
  processLogin: (req, res, next) => {
    // Si no existe el usuario
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/login", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
    if (req.body.checkboxlogin) {
      db.usuarios.findOne({
            where: { email: req.body.email },
          },
          {
            include: ["categoriaUsuario"],
          }
        )
        .then((usuario) => {
          if(usuario) 
          req.session.usuario = usuario;
          let data = req.session.usuario;
          res.cookie("cookieuser", data, {
            maxAge: 1000 * 60 * 60 * 24 * 90,
          });
          if (usuario.categoriaUsuarioId == 1) {
            return res.render("users/administ", {
              title: "Perfil administrador",
              usuario: usuario,
            });
          } else {
            res.render("users/profile", {
              title: "Perfil usuario",
              usuario: usuario,
            });
          }
        });
    } else {
      db.usuarios
        .findOne(
          {
            where: { email: req.body.email },
          },
          {
            include: ["categoriaUsuario"],
          }
        )
        .then((usuario) => {
          req.session.usuario = usuario;
          let datos = req.session.usuario;

          if (usuario.categoriaUsuarioId == 1) {
            return res.render("users/administ", {
              title: "Perfil administrador",
              usuario: datos,
            });
          } else {
            res.render("users/profile", {
              title: "Perfil usuario",
              usuario: datos,
            });
          }
        });
    }
  },
  profile: (req, res) => {
    res.render('users/profile');
  },
  update: (req, res, next) => {
    usuario = req.body;
    usuario.imagen = req.file ? req.file.filename : "";
    

    db.usuarios
      .update(usuario, {
        where: {
          id: req.session.usuario.id,
        },
      })
      .then((updatedusuario) => {
        res.redirect("/users/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  logout: (req, res, next) => {
    // Destruimos la sesión
    req.session.destroy();
    // // Destruimos la cookie de recordar
    res.cookie("cookieuser", null, { maxAge: -1 });
    // // Redirigimos a la home
    res.redirect("/");
    // console.log("no anda");
  },
};
