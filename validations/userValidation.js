const {body} = require('express-validator');

const validacion = [
	body('first_name').notEmpty().withMessage('Debes completar el nombre'),
	body('last_name').notEmpty().withMessage('Debes completar el apellido'),
	body('username').notEmpty().withMessage('Debes completar el usuario'),
	body('email')
		.notEmpty()
		.withMessage('Debes completar el usuario')
		.bail()
		.isEmail()
		.withMessage('Debe ser email'),
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
		return true;
	}),
	body('userProfile')
		//.notEmpty()
		.isIn([1, 2, 3])
		.withMessage('Debes aclarar tipo de usuario'),
];

module.exports = validacion;
