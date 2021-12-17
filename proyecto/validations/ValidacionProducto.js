const {body} = require('express-validator');

const validacion = [
	body('producto').notEmpty().withMessage('debes completar el nombre'),
	body('proveedor').notEmpty().withMessage('debes completar un proveedor'),
	body('precio')
		.notEmpty()
		.isNumeric()
		.withMessage('debes completar un valor'),
];

module.exports = validacion;
