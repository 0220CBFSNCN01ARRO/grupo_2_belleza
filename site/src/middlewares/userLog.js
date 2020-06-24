module.exports = (req, res, next) => {
  if (req.session.user) {
    if (req.params.id){
      if(req.params.id == req.session.user.id){
          next()
      } else {
          res.redirect(`/profile/${req.session.user.id}`);
      };
  // si esta logueado pero no entra a info de ningun usuario en particular
  }else {
      next()
  };
// si NO esta logueado
}else {
  res.redirect('/');
};
}