/** @format */

const userService = require('../services/usuario_service');

const users = {
	login: (req, res) => {
		res.render('login');
	},

	usuarioDetail: (req, res) => {
		const usuario = userService.usuarioUnico(req.params.id);
		res.render('profile', {usuario: usuario});
	},

	//crear un item nuevo y guardarlos
	store: (req, res) => {
		userService.userCreate(req.body, req.file);
		res.redirect('/profile');
	},
	registro: (req, res) => {
		res.render('registro');
	},
	update: (req, res) => {
		//va por put y tiene Id, trae el formulario con los datos del producto
		const userUnico = userService.usuarioUnico(req.params.id);
		res.render('Registro', {userUnico: userUnico});
	},
	edit: (req, res) => {
		userService.edit(req.params.id, req.body, req.file);
		res.redirect('profile');
	},

	//borrar un item especifico
	delete: (req, res) => {},
};

module.exports = users;