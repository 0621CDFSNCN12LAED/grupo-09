const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');

const usuariosJSON = path.join(__dirname, '../Data/Users_appedal.json');
const usuariosDb = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

module.exports = function (req, res, next) {
	const reqUser = req.body;
	const user = usuariosDb.find((prod) => {
		return reqUser.name == prod.username;
	});

	console.log(user);
	console.log(reqUser);

	if (user) {
		console.log('sirve');
		if (reqUser.password) {
			if (bcryptjs.compare(reqUser.password, user.password) == true) {
				//res.render('home', {usuario: req.cookies.user});
				console.log('sirve password');
			} else {
				console.log('No coincide password');
			}
		} else {
			console.log('Ingrese passowrd');
		}
	} else {
		console.log('no hay usuario');
	}
	next();
};
