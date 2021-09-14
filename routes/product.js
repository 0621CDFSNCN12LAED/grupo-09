/** @format */

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

//get todos los productos
router.get('/', productController.show);

//get un solo producto
router.get('/detail/:id', productController.productDetail);

//get pagina de creacion de producto
router.get('/create', productController.create);

//Post producto creado a base de datos
router.post('/', productController.store);

//get pagina de editacion de producto
router.get('/edit/:id', productController.update);
//put ultima version de producto
router.put('/:id', productController.store);

//Dlete un unico producto
router.delete('/:id', productController.delete);

module.exports = router;
