const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');

const usuariosJSON = path.join(__dirname, '../Data/Users_appedal.json');
const usuariosDb = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

const loggedOn = function (req) {
	const reqUser = req.body;
	const user = usuariosDb.find((u) => {
		return reqUser.name == u.username;
	});

	if (user) {
		console.log('sirve');
		bcryptjs.compare(
			reqUser.password,
			user.password,
			function (err, response) {
				if (err) {
					return false;
					//res.render('login', {err: 'Ingrese Password'});
				} else if (response) {
					return true;
					//next();
				} else {
					return false;
					//res.render('login', {
					//	err: 'Password o Usuario no coinciden',
					//});
				}
			}
		);
	} else {
		false;
	}
};

module.exports = loggedOn;
