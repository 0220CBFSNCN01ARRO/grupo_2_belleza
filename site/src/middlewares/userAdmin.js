module.exports = (req, res, next) => {
  if (req.session.user && req.session.user.is_admin) {
    next();
  }
  res.redirect("/login");
};
