module.exports = (req, res, next) => {
  // si NO esta logueado
  if (!req.session.usuario) {
      return res.render('users/login');
}
// si esta logueado
  next();
};
