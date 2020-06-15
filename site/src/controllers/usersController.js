const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");


//Get Login
showLogin: (req, res) => {
    res.render("index");
};

//Post Log in
login: (req, res) => {
    console.log(validationResult(req));
    let errors = validationResult(req);

    if (errors.isEmpty()) {
        let users = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, "../Data/Users.json"))
        );

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (bcrypt.compareSync(req.body.pass, users[i].pass)) {
                    usuarioaLoguearse = users[i];
                } else {
                    return res.render("register", {
                        errors: [{ msg: "Credenciales Invalidas" }],
                    });
                }
            }
        }

        req.session.usuarioLogueado = usuarioaLoguearse;

        res.redirect("/");

        //logeo de usuario
        //res.render("/");
    } else {
        return res.render("register", { errors: errors.errors });
    }
};

// Log out
logout: (req, res) => {
    console.log(req.session.usuarioLogueado);
    req.session.destroy();
    res.redirect("/");
}