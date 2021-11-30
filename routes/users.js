/** @format */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

const uploader = require('../middlewares/userMulter');
const userCookies = require('../middlewares/user-cookies');
const userValidation = require('../validations/userValidation');
const loginValidation = require('../validations/loginValidation');

//get un solo Usuario

//get pagina de creacion de Usuario
router.get('/registro', userController.registro);
//Post Usuario creado a base de datos
router.post(
	'/registro',
	//userCookies,
	uploader.single('imagen'),
	userValidation,
	userController.store,
	(req, res) => {
		res.cookie('user', JSON.stringify(req.body));
	}
);

//Get Login
router.get('/login', userController.login);

router.post('/login', loginValidation, (req, res) => {
	res.render('profile', {user: res.cookie.user});
});
router.get('/profile', (req, res) => {
	res.render('profile');
});
//get pagina de editacion de Usuario
router.get('/edit/:id', userController.update);
//put ultima version de Usuario
router.put('/:id', userController.edit);

//Dlete un unico Usuario
router.delete('/:id', userController.delete);

module.exports = router;
