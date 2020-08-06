let express = require("express");
let router = express.Router();

const userController = require("../controllers/usersController.js");

const multer = require("multer");
const path = require("path");

// Middleware para validar usuarios
const userLog = require("../middlewares/userLog");
const guestUser = require("../middlewares/guestUser");
const auth = require("../middlewares/auth");

// Validacion con express-validator
const validate = require("../validators/usersValidators");

// MULTER
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/img/users"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        req.session.usuario.id +
        path.extname(file.originalname)
    );
  },
});
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 25000000,
  },
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb("Subir sólo una imagen");
    }
  },
});

// Registro de usuario
router.get("/register", guestUser, userController.register);
router.post("/register", guestUser, validate.userCreate, userController.store);

// Login de usuario
router.get("/login", auth, userController.login);
router.post("/login", validate.userLogin, userController.processLogin);
router.put("/login", upload.single("imagen"), userLog, userController.update);

// Logout
router.post("/logout", userController.logout);

module.exports = router;
