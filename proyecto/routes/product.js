/** @format */

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

const uploader = require('../middlewares/productMulter');
const validacion = require('../validations/ValidacionProducto');
const userAuth = require('../middlewares/userAuth');

//get todos los productos
router.get('/', productController.show);

//get un solo producto
router.get('/detail/:id', productController.productDetail);

router.post('/detail/:id', productController.carrito);

//get pagina de creacion de producto
router.get('/create', userAuth, productController.create);
//Post producto creado a base de datos
router.post(
	'/',
	uploader.single('imagen'),
	validacion,
	productController.store
);

//get pagina de editacion de producto
router.get('/edit/:id', userAuth, productController.update);
//put ultima version de producto
router.put(
	'/:id',
	uploader.single('imagen'),
	validacion,
	productController.edit
);

//Dlete un unico producto

router.delete('/delete/:id', userAuth, productController.delete);

module.exports = router;
