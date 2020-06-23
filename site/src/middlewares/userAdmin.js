const adminUsers = ['Tim', 'Ada', 'Vim', 'Greta'];

function isAdmin (req, res, next) {
	let adminUser = req.query.user;
	if ( adminUsers.includes(adminUser) ) {
		next();
		return;
	}
	res.send('No tienes los privilegios para ingresar');
}

module.exports = isAdmin;