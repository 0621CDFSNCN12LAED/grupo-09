/** @format */
const {validationResult} = require('express-validator');
const userService = require('../services/usuario_service');

const users = {
	login: (req, res) => {
		res.render('login');
	},

	usuarioDetail: (req, res) => {
		res.render('profile');
	},
	registro: (req, res) => {
		res.render('registro');
	},

	//crear un item nuevo y guardarlos
	store: (req, res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()) {
			userService.userCreate(req.body, req.file);
			res.redirect('login');
		} else {
			res.render('registro', {
				errors: errors.array(),
				old: req.body,
			});
		}
	},

	update: (req, res) => {
		//va por put y tiene Id, trae el formulario con los datos del producto
		const userUnico = userService.usuarioUnico(req.params.id);
		res.render('Registro', {
			userUnico: userUnico,
		});
	},
	edit: (req, res) => {
		userService.edit(req.params.id, req.body, req.file);
		res.redirect('profile');
	},

	logout: (req, res) => {
		req.session.userId = null;
		res.redirect('home');
	},

	//borrar un item especifico
	delete: (req, res) => {},
};

module.exports = users;
