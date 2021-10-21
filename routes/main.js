/** @format */

const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');
const product = require('../controllers/productControllers');

/* GET home page. */
router.get('/', mainController.home);

//get productCart
router.get('/productCart', mainController.cartaProducto);

module.exports = router;
