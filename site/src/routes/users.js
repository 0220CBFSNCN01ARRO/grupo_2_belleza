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
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

// Registro de usuario
router.get("/register", guestUser, userController.register);
router.post("/register", guestUser, validate.userCreate, userController.store);

// Login de usuario
router.get("/login", auth, userController.login);
router.post("/login", guestUser, validate.userLogin, userController.processLogin);
router.put("/login", upload.single("imagen"), userController.update);

// Logout
router.post("/logout", userLog, userController.logout);

module.exports = router;
