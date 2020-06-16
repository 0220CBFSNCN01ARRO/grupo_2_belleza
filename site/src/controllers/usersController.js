const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

const controller = {
    //GET REGISTER
    showRegister: (req, res) => {
        res.render("register");
    },

    //POST REGISTER
    register: (req, res) => {
        //validation
        console.log(validationResult(req));
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            //registro de nuevo usuario

            if (req.body.pass != req.body.pass2) {
                return res.render("register");
            }

            req.body.pass = bcrypt.hashSync(req.body.pass, 10);

            delete req.body.pass2;

            const users = JSON.parse(
                fs.readFileSync(path.resolve(__dirname, "../data/Users.json"))
            );

        //     const user = {
        //         ...req.body,
        //         avatar: "/avatar/" + req.file.filename,
        //         // funcion para integrar el id en cada usr registrado:
        //         id:
        //             users.reduce((ac, u) => {
        //                 return Math.max(ac, u.id);
        //             }, 0) + 1,
        //     };

        //     users.push(user);

        //     fs.writeFileSync(
        //         path.resolve(__dirname, "../data/Users.json"),
        //         JSON.stringify(users, null, 3)
        //     );

        //     res.render("/", { user });
        // } else {
        //     return res.render("register", { errors: errors.errors });
        // }
    };

// //Get Login
// showLogin: (req, res) => {
//     res.render("index");
// },

// //Post Log in
// login: (req, res) => {
//     console.log(validationResult(req));
//     let errors = validationResult(req);

//     if (errors.isEmpty()) {
//         let users = JSON.parse(
//             fs.readFileSync(path.resolve(__dirname, "../Data/Users.json"))
//         );

//         for (let i = 0; i < users.length; i++) {
//             if (users[i].email == req.body.email) {
//                 if (bcrypt.compareSync(req.body.pass, users[i].pass)) {
//                     usuarioaLoguearse = users[i];
//                 } else {
//                     return res.render("register", {
//                         errors: [{ msg: "Credenciales Invalidas" }],
//                     });
//                 }
//             }
//         }

// usuarioaLoguearse = req.session.usuarioLogueado

//         res.redirect("/");

//         //logeo de usuario
//         //res.render("/");
//     } else {
//         return res.render("register", { errors: errors.errors });
//     }
// },

// // Log out
// logout: (req, res) => {
//     console.log(req.session.usuarioLogueado);
//     req.session.destroy();
//     res.redirect("/");
// }}