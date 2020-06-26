const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

module.exports = {
    dashboard: (req, res, next) => {

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
    }

}