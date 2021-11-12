const {body} = require('express-validator');

const validacion = [
	body('name').notEmpty().withMessage('Debes completar el nombre'),
	body('username').notEmpty().withMessage('Debes completar el usuario'),
	body('password')
		.trim()
		.notEmpty()
		.withMessage('Debes tener contrasena')
		.isLength({min: 5})
		.withMessage('Contrasena debe tener por lo menos 5 caracteres'),
	body('rePassword').custom((value, {req}) => {
		if (value !== req.body.password) {
			throw new Error('Password Confirmation does not match password');
		}
	}),
	body('user-profile')
		//.notEmpty()
		.isIn(['seller', 'buyer'])
		.withMessage('Debes aclarar tipo de usuario'),
];

module.exports = validacion;
