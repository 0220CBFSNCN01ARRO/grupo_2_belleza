module.exports = (req,res, next) => {
    if(req.session.usuarioLogueado) {
        res.redirect('/');
    } else {
        next()
    }
}