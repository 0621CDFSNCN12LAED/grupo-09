/** @format */

const fs = require('fs');
const path = require('path');

const productosJSON = path.join(__dirname, '../Data/MOCK_DATA.json');
const productosDb = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

const product = {
	//mostrar todos los items
	show: (req, res) => {
		res.render('productsAll', {productosDb});
	},
	//mostrar detalle de producto
	productDetail: (req, res) => {
		const prodId = req.params.id;
		const productoUnico = productosDb.find((prod) => {
			return prod.id == prodId;
		});

		res.render('productsDetail', {productoUnico});
	},

	//crear un item nuevo y guardarlo
	create: (req, res) => {
		//va por get y trae el formulario en blanco
		res.send('hay q crear el ejs de product creation');
	},

	//modificar un item especifico
	//extraer item especifico y editarlo
	update: (req, res) => {
		//va por put y tiene Id, trae el formulario con los datos del producto
	},

	//borrar un item especifico
	delete: (req, res) => {},
	//guardar datos de los items
	store: (pop) => {},
};

module.exports = product;
