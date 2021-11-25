//const path = require('path');
//const fs = require('fs');
const bcryptjs = require('bcryptjs');

const db = require('../database/models');

//const usuariosJSON = path.join(__dirname, '../Data/Users_appedal.json');
//const usuariosDb = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

const Users = db.Usuario;

const loggedOn = async function (req, res) {
	const user = await Users.findOne({
		where: {username: req.body.name},
	});

	if (user) {
		console.log('sirve');
		bcryptjs.compare(
			req.body.password,
			user.pass,
			function (err, response) {
				if (err) {
					res.render('login', {err: 'Ingrese Password'});
					console.log('1');
				} else if (response) {
					console.log('2');

					next();
				} else {
					res.render('login', {
						err: 'Password o Usuario no coinciden',
					});
					console.log('3');
				}
			}
		);
	} else {
		res.render('login', {err: 'Usuario no existe'});
	}
};
module.exports = loggedOn;
