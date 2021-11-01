/** @format */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

const uploader = require('../middlewares/userMulter');

//get un solo Usuario
router.get('/perfil/:id', userController.usuarioDetail);

//get pagina de creacion de Usuario
router.get('/registro', userController.registro);
//Post Usuario creado a base de datos
router.post('/', uploader.single('imagen'), userController.store);

//get pagina de editacion de Usuario
router.get('/edit/:id', userController.update);
//put ultima version de Usuario
router.put('/:id', userController.edit);

//Dlete un unico Usuario
router.delete('/:id', userController.delete);

//Get Login
router.get('/login', userController.login);

module.exports = router;
