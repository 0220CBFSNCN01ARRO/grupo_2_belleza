const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const authController = require("../controllers/usersController");

router.get("/register", guestMiddleware, authController.showRegister);
router.post(
    "/register",
    upload.single("avatar"),
    [
        check("nombre")
            .isLength()
            .withMessage("Este campo debe estar completo"),
        check("apellido")
            .isLength()
            .withMessage("Este campo debe estar completo"),
        check("email")
            .isEmail()
            .custom(function (value) {
                let usersJSON = fs.readFileSync(
                    path.resolve(__dirname, "../data/Users.json")
                );
                let users;
                if (usersJSON == "") {
                    users = [];
                } else {
                    users = JSON.parse(usersJSON);
                }
                for (let i = 0; i < users.length; i++) {
                    if (users[i].email == value) {
                        return false;
                    }
                }
                return true;
            })
            .withMessage("Email ya registrado"),
        check("age")
            .isInt({ min: 18 })
            .withMessage("Debe ser mayor de 18 años"),
        check("pass").isLength({ min: 4 }).withMessage("Password Incorrecta"),
        //check("pass2").equals(body.pass).withMessage("Debe repetir la contraseña"),
    ],
    authController.register
);



router.get("/login", usersController.showLogin);
router.post("/login", [
    check("email")
        .custom(function (value) {
            let usersJSON = fs.readFileSync(
                path.resolve(__dirname, "../data/Users.json")
            );
            let users;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == value) {
                    return true;
                }
            }
            return false;
        })
        .withMessage("Email no registrado"),

    usersController.login,
]);

//LOGOUT
router.get("/logout", usersController.logout);
