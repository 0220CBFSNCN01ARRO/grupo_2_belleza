let express = require ('express');
let router = express.Router();

const userController = require ('../controllers/usersController.js');

const multer = require('multer');
const path = require('path');

const userLog = require('../middlewares/userLog');
const guestUser = require('../middlewares/guestUser');
const userAdmin = require('../middlewares/userAdmin');

// MULTER
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/img/users'))
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage });

router.get('/', guestUser, userController.register);

router.post('/register', guestUser, userController.store);

router.get('/login', guestUser, userController.login);

router.post('/login', guestUser, userController.processLogin);

router.post('/logout', userLog, userController.logout);

module.exports = router;