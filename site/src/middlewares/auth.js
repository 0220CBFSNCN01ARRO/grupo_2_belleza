const db = require('../database/models');

module.exports = async (req, res, next) => {
 
  if (req.session.usuario) {

    res.locals.usuario = req.session.usuario;
    return next;

  } else if (req.cookies.usuario) {
    // Si esta la cookie con el usuario se lo pasamos a la sesión a la vista
    req.session.usuario = req.cookies.usuario;
    res.locals.usuario = req.cookies.usuario;
  }
  // if (usuarios) {
  //   userData = usuario.dataValues;
  //   delete userData.password;

  //   req.session.usuario = userData;
  //   res.locals.usuario = userData;               
// }
  next();
};
