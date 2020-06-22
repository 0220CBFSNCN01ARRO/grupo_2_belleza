let express = require ('express');
let router = express.Router();
const bcrypt = require('bcrypt');

const userController = require ('../controllers/usersController.js')

router.get('/', userController.register);

router.post('/register', userController.store);

router.get('/login', userController.login);

router.post('/login', userController.processLogin);

module.exports = router;