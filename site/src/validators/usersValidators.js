const db = require("../database/models");
const bcrypt = require("bcrypt");

const { check, body } = require("express-validator");

module.exports = {
  userLogin: [
    check("email")
      .notEmpty().withMessage("Debes completar el email").bail().isEmail().withMessage("El email no es válido").bail(),
    check('email',"El email no es válido")  
      .custom(async (value, {req}) => {
        let usuarios = await db.usuarios.findOne({ where: { email: value} })
            if (usuarios) {
                if(bcrypt.compareSync(req.body.password, usuarios.password)){
                    return true
                }
            }else {
              return Promise.reject() 
            }
    }),
    check("password").isLength({min:8}).withMessage("Debes completar la contraseña"),
  ],
  userCreate: [
    check("nombre")
      .isLength({ min: 2, max: 50 }).withMessage("Nombre debe contener al menos 2 caracteres"),
    check("email")
      .notEmpty().withMessage("Debes completar el email").bail().isEmail().withMessage("El email no es válido"),
    check("password")
      .notEmpty().isLength({ min: 8 }).withMessage("Debes completar el password").bail(),
    body("email", "Email en uso, favor introduzca otra dirección de correo").custom((value) => {
      return db.usuarios
        .findOne({ where: { email: value } })
        .then((usuario) => {
          if (usuario) {
            return Promise.reject();
          }
        });
    }),
    check('imagen').custom((value, { req }) => {
      if (req.fileValidationError) {
        throw new Error('La imagen debe ser de tipo JPG, JPEG, PNG, GIF');
      }
      return true;
  })
  ],
};
