/** @format */

/// const fs = require("fs");
/// const path = require("path");
/// const productosJSON = path.join(__dirname, "../Data/MOCK_DATA.json");
/// const productosDb = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));
const loginValidation = require('../validations/loginValidation');

const productService = require('../services/product-service');
const {validationResult} = require('express-validator');

let {Products} = require('../database/models');
const categoriaProduct = require('../database/models/categoriaProduct');

const product = {
	//mostrar todos los items
	show: async (req, res) => {
		const Prods = await Products.findAll({include: 'categoriaProduct'});
		res.render('productsAll', {productos: Prods});
	},

	productDetail: async (req, res) => {
		const productoUnico = await Products.findByPk(req.params.id, {
			include: 'categoriaProduct',
		});
		if (productoUnico) {
			res.render('productsDetail', {productoUnico});
		} else {
			//error
			res.redirect('/product');
		}
	},
	// productDetail: (req, res) => {
	//   const productoUnico = productService.productoUnico(req.params.id);
	//   res.render("productsDetail", { productoUnico });
	// },

	//crear un item nuevo y guardarlos
	create: (req, res) => {
		if (loginValidation == true) {
			res.render('productCreateForm');
		} else {
			res.render('login', {
				err: ['Debes Estar Registrado para Crear'],
			});
		}
		//va por get y trae el formulario en blanco
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
		}
	},
	//modificar un item especifico
	//extraer item especifico y editarlo
	update: async (req, res) => {
		//va por put y tiene Id, trae el formulario con los datos del producto
		// const productoUnico = productService.productoUnico(req.params.id);
		// res.render("productEditForm", { productoUnico });
		// update: (req, res) => {
		const productoUnico = await Products.findByPk(req.params.id);
		res.render('productEditForm', {productoUnico});
	},
	edit: (req, res) => {
		if (loginValidation == true) {
			// productService.edit(req.params.id, req.body, req.file);

			res.redirect('/product');
		} else {
			res.render('Login', {
				err: ['Debes estar logeado para Editar'],
			});
		}
	},

	//borrar un item especifico
	delete: async (req, res) => {
		await Products.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.redirect('/product');
	},
};

module.exports = product;
