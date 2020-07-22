module.exports = (req, res, next) => {
  if (req.cookies.cookieuser) {
    return res.render("users/profile", {
      title: "Perfil usuario",
      usuario: req.cookies.cookieuser,
    });
  } else if (req.session.usuario) {
    return res.render("users/profile", {
      title: "Perfil usuario",
      usuario: req.session.usuario,
    });
  }
  next();
};
