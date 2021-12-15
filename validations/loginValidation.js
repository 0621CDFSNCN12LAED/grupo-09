const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const Users = db.Usuario;

const loggedOn = async function (req, res, next) {
	const user = await Users.findOne({
		where: {username: req.body.name},
	});

	if (user) {
		const response = bcryptjs.compareSync(req.body.password, user.pass);
		if (response) {
			req.session.userId = user.id;
			res.locals.user = user;
			next();
		} else {
			res.render('login', {
				err: 'Password o Usuario no coinciden',
			});
		}
	} else {
		res.render('login', {err: 'Usuario no existe'});
	}
};
module.exports = loggedOn;
