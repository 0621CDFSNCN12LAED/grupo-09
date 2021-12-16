/** @format */

const loginValidation = require('../validations/loginValidation');
const {validationResult} = require('express-validator');

const productService = require('../services/product-service');
const {Products, categoriaProduct} = require('../database/models');
const {productoUnico} = require('../services/product-service');

const product = {
	show: async (req, res) => {
		const Prods = await productService.findAll();
		res.render('productsAll', {productos: Prods});
	},

	productDetail: async (req, res) => {
		const productoUnico = await productService.productoUnico(req.params.id);
		if (productoUnico) {
			res.render('productsDetail', {productoUnico});
		} else {
			//error
			res.redirect('/product');
		}
	},

	//crear un item nuevo y guardarlos
	create: async (req, res) => {
		// if (loginValidation == true) {
		const categorias = await categoriaProduct.findAll();
		res.render('productCreateForm', {categorias});
		// } else {
		//   res.render("login", {
		//     err: ["Debes Estar Registrado para Crear"],
		//   });
		// }
	},
	//va por get y trae el formulario en blanco
	//guardar datos de los items
	store: async (req, res) => {
		let errors = validationResult(req);
		if (errors.isEmpty()) {
			await Products.create({
				user_id: req.session.userId,
				producto: req.body.producto,
				proveedor: req.body.proveedor,
				// vendido:
				precio: req.body.precio,
				imagen: req.file ? req.file.filename : 'defaultProduct.png',
				categoriaproducts_id: req.body.categoria,
				descripcion: req.body.descripcion,
			});
			res.redirect('/product');
		} else {
			res.render('productCreateForm', {
				errors: errors.array(),
				old: req.body,
			});
		}
	},

	//productService.productCreate(req.body, req.file);
	// res.redirect("/product");
	//   }
	// },
	//modificar un item especifico
	//extraer item especifico y editarlo
	//va por put y tiene Id, trae el formulario con los datos del producto

	// update: (req, res) => {
	//   const productoUnico = productService.productoUnico(req.params.id);
	//   res.render("productEditForm", { productoUnico });

	update: async (req, res) => {
		const categorias = await categoriaProduct.findAll();
		const productoUnico = await Products.findByPk(req.params.id);
		res.render('productEditForm', {
			productoUnico,
			categorias,
		});
	},
	edit: async (req, res) => {
		// if (loginValidation == true) {
		// productService.edit(req.params.id, req.body, req.file);
		await Products.update(
			{
				// user_id:
				producto: req.body.producto,
				proveedor: req.body.proveedor,
				// vendido:
				precio: req.body.precio,
				imagen: req.file ? req.file.filename : productoUnico.imagen,
				categoriaproducts_id: req.body.categoria,
				descripcion: req.body.description,
			},
			{
				where: {id: req.params.id},
			}
		);
		res.redirect('/product');
		// } else {
		//   res.render("Login", {
		//     err: ["Debes estar logeado para Editar"],
		//   });
		// }
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
