/** @format */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

const uploader = require('../middlewares/userMulter');
const userCookies = require('../middlewares/user-cookies');
const userValidation = require('../validations/userValidation');
const loginValidation = require('../middlewares/loginValidation');

//get un solo Usuario
router.get('/perfil/:id', userController.usuarioDetail);

//get pagina de creacion de Usuario
router.get('/registro', userController.registro);
//Post Usuario creado a base de datos
router.post(
	'/registro',
	userCookies,
	uploader.single('imagen'),
	userValidation,
	userController.store,
	(req, res) => {
		res.cookie('user', JSON.stringify(req.body));
	}
);

//get pagina de editacion de Usuario
router.get('/edit/:id', userController.update);
//put ultima version de Usuario
router.put('/:id', userController.edit);

//Dlete un unico Usuario
router.delete('/:id', userController.delete);

//Get Login
router.get('/login', userController.login);

router.post('/login', (req, res) => {
	if (loginValidation(req) == true) {
		res.render('login', {err: 'Usuario y Password no coinciden'});
	} else {
		req.session;
		res.render('home');
	}
});

module.exports = router;
