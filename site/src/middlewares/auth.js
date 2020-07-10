const db = require("../database/models");

module.exports = async (req, res, next) => {
 
  if(req.cookies.cookieuser){
    res.render ('users/profile',{title:"Perfil usuario","user":req.cookies.cookieuser})}
    else if(req.session.usuario){
        res.render ('users/profile',{title:"Perfil usuario","user":req.session.usuario})
    }
  next();
};
