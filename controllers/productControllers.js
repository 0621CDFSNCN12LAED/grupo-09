/** @format */

const loginValidation = require('../middlewares/loginValidation');
const {validationResult} = require('express-validator');

const productService = require('../services/product-service');

const {Products, categoriaProduct} = require('../database/models');

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
	create: async (req, res) => {
		// if (loginValidation == true) {
		const productoUnico = await Products.findByPk(req.params.id, {
			include: 'categoriaProduct',
		});
		res.render('productCreateForm', {productoUnico});
		// } else {
		// res.render("login", {
		//   err: ["Debes Estar Registrado para Crear"],
		// });
		// }
		// },
		//va por get y trae el formulario en blanco
	},
	//guardar datos de los items
	store: async (req, res) => {
		// let errors = validationResult(req);
		// if (errors.isEmpty()) {
		await Products.create({
			// user_id:
			producto: req.body.producto,
			proveedor: req.body.proveedor,
			// vendido:
			precio: req.body.precio,
			imagen: req.file.filename,
			// categoriaproducts_id:
			descripcion: req.body.description,
		});
		res.redirect('/product');
	},
	// } else {
	//   res.render("productCreateForm", {
	//     errors: errors.array(),
	//     old: req.body,
	//   });

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
		const productoUnico = await Products.findByPk(req.params.id);
		res.render('productEditForm', {productoUnico});
	},
	edit: async (req, res) => {
		// if (loginValidation == true) {
		// productService.edit(req.params.id, req.body, req.file);
		await Products.update({
			// user_id:
			producto: req.body.producto,
			proveedor: req.body.proveedor,
			// vendido:
			precio: req.body.precio,
			imagen: req.file.filename,
			// categoriaproducts_id:
			descripcion: req.body.description,
		});
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
