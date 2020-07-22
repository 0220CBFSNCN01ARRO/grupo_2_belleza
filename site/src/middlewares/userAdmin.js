module.exports = (req, res, next) => {
  if (req.session.usuario && req.session.usuario.categoria == 1) {
    return next();
  }
  res.redirect('/');
};
