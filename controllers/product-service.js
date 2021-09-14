/** @format */
const path = require('path');
const fs = require('fs');
const productosJSON = path.join(__dirname, '../Data/MOCK_DATA.json');
const productosDb = JSON.parse(fs.readFileSync(productosJSON, 'utf-8'));

module.exports = {
	productoUnico: (id) => {
		const prodId = id;
		const productoUnico = productosDb.find((prod) => {
			return prod.id == prodId;
		});
		return productoUnico;
	},
};
