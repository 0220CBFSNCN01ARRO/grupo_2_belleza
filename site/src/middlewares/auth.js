const db = require("../database/models");

module.exports = (req, res, next) => {
<<<<<<< HEAD
  if (req.cookies.cookieuser) {
    return res.render("users/login", {
      title: "Perfil usuario",
      user: req.cookies.cookieuser,
    });
  } else if (req.session.usuario) {
    return res.render("users/login", {
      title: "Perfil usuario",
      user: req.session.usuario,
    });
  }
=======
 
  if(req.cookies.cookieuser){
    return res.render ('users/login', {title:"Perfil usuario","usuario":req.cookies.cookieuser})}
    else if(req.session.usuario){
        return res.render ('users/login', {title:"Perfil usuario","usuario":req.session.usuario})
    }
>>>>>>> 78406b307854ff149f3341caaaaf5d41cb2dac89
  next();
};
