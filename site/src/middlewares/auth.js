const db = require("../database/models");

module.exports = async (req, res, next) => {
 
  if(req.cookies.cookieuser){
    return res.render ('users/login', {title:"Perfil usuario","user":req.cookies.cookieuser})}
    else if(req.session.usuario){
        return res.render ('users/login', {title:"Perfil usuario","user":req.session.usuario})
    }
  next();
};
