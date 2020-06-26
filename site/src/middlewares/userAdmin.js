module.exports = (req, res, next) => {
  if (req.session.user && req.session.user.categoria == 1) {
    return next();
  }
  res.redirect('/');
};
