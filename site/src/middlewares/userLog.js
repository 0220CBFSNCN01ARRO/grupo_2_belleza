module.exports = (req, res, next) => {
  // si NO esta logueado
  if (!req.session.user) {
      return res.redirect('/users/login');

  // si esta logueado
  } else {
      next()
  }
}