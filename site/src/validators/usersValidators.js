const db = require("../database/models");
const bcrypt = require("bcrypt");

const { check, body } = require("express-validator");

module.exports = {
  userLogin: [
    check("email")
      .notEmpty()
      .withMessage("Debes completar el email")
      .bail()
      .isEmail()
      .withMessage("El email no es válido")
      .bail()
      // Acá solamente para mostrarles cómo validar con Sequelize
      // En mi opinión esto debe ir en el controlador, no es responsabilidad
      // de Express Validator
      .custom((value) => {
        return db.usuarios
          .findOne({ where: { email: value } })
          .then((usuario) => {
            if (!usuario) {
              return Promise.reject("El email no se encuentra registrado");
            }
          });
      }),
    check("password").notEmpty().withMessage("Debes completar la contraseña"),
  ],
  userCreate: [
    check("nombre")
      .isLength({ min: 2, max: 50 })
      .withMessage("Nombre debe contener al menos 2 caracteres"),
    check("email")
      .notEmpty()
      .withMessage("Debes completar el email")
      .bail()
      .isEmail()
      .withMessage("El email no es válido"),
    check("password")
      .notEmpty()
      .isLength({ min: 8 })
      .withMessage("Debes completar el password")
      .bail(),
    body(
      "email",
      "Email en uso, favor introduzca otra dirección de correo"
    ).custom((value) => {
      return db.usuarios
        .findOne({ where: { email: value } })
        .then((usuario) => {
          if (usuario) {
            return Promise.reject();
          }
        });
    }),
  ],
};
