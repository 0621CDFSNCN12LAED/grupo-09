/** @format */

const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');
const product = require('../controllers/productControllers');

/* GET home page. */
router.get('/', mainController.home);
//Get Login
router.get('/login', mainController.login);
//Get registro
router.get('/registro', mainController.registro);
//get productCart
router.get('/productCart', mainController.cartaProducto);

module.exports = router;
