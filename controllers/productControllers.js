/** @format */

const fs = require('fs');
const path = require('path');
const validacion = require('../validations/ValidacionProducto');

const productosJSON = path.join(__dirname, '../Data/MOCK_DATA.json');
const productosDb = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const productService = require('../services/product-service');
const {validationResult} = require('express-validator');

const product = {
	//mostrar todos los items
	show: (req, res) => {
		res.render('productsAll', {productosDb});
	},
	//mostrar detalle de producto
	productDetail: (req, res) => {
		const productoUnico = productService.productoUnico(req.params.id);
		res.render('productsDetail', {productoUnico});
	},

	//crear un item nuevo y guardarlos
	create: (req, res) => {
		//va por get y trae el formulario en blanco
		res.render('productCreateForm');
	},
	//guardar datos de los items
	store: (req, res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()) {
			//productService.productCreate(req.body, req.file);
			res.redirect('/product');
		} else {
			res.render('productCreateForm', {
				errors: errors.array(),
				old: req.body,
			});
			s;
		}
	},
	//modificar un item especifico
	//extraer item especifico y editarlo
	update: (req, res) => {
		//va por put y tiene Id, trae el formulario con los datos del producto
		const productoUnico = productService.productoUnico(req.params.id);
		res.render('productEditForm', {productoUnico});
	},
	edit: (req, res) => {
		productService.edit(req.params.id, req.body, req.file);
		res.redirect('/product');
	},

	//borrar un item especifico
	delete: (req, res) => {},
};

module.exports = product;
