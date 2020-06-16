function userMiddleware(req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next();
    } else {
        res.send("Esta pagina es solo para usuarios Logueados");
    }
}

module.exports = userMiddleware;
