/** @format */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

const uploader = require('../middlewares/userMulter');
const userValidation = require('../validations/userValidation');
const loginValidation = require('../validations/loginValidation');
const userAuth = require('../middlewares/userAuth');

//get un solo Usuario

//get pagina de creacion de Usuario
router.get('/registro', userController.registro);
//Post Usuario creado a base de datos
router.post(
	'/registro',
	uploader.single('imagen'),
	userValidation,
	userController.store
);

//Get Login
router.get('/login', userController.login);
//execute login
router.post('/login', loginValidation, userController.usuarioDetail);

//get profile
router.get('/profile', userAuth, userController.usuarioDetail);
//get pagina de editacion de Usuario
router.get('/edit/:id', userController.update);
//put ultima version de Usuario
router.put('/:id', userController.edit);

//Dlete un unico Usuario
router.delete('/:id', userController.delete);

module.exports = router;
