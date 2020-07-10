module.exports = (req, res, next) => {
  // si el usuario esta logueado, lo enviamos al home
  if (req.session.usuario) {
    res.redirect("/");
    
    //sino, que siga
  } else {
    next();
  }
};
