/** @format */
const path = require('path');
const fs = require('fs');
//const usuariosJSON = path.join(__dirname, '../Data/Users_appedal.json');
//const usuariosDb = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const Users = db.Usuario;

module.exports = {
	async usuarioUnico(id) {
		const usuarioUnico = await Users.findByPk(id);
		return usuarioUnico;
	},
	userCreate(body, imagen) {
		const lastUser = Users[Users.length - 1];
		const biggestUser = Users.length > 0 ? lastUser.id : 1;

		const newUser = {
			id: biggestUser + 1,
			...body,
			password: bcryptjs.hashSync(body.password),
			imagen: imagen ? imagen.filename : '../public/img/berm.jpg',
		};

		usuariosDb.push(newUser);
		this.save();
	},
	edit(id, body, imagen) {
		const userToEdit = this.usuarioUnico(id);
		userToEdit.username = body.username;
		userToEdit.first_name = body.first_name;
		userToEdit.last_name = body.last_name;
		userToEdit.email = body.email;
		userToEdit.city = body.city;
		userToEdit.adress = body.adress;
		userToEdit.phone = body.phone;
		userToEdit.birthday = body.birthday;
		userToEdit.password = bcryptjs.hashSync(body.password);

		(userToEdit.avatar = imagen
			? imagen.filename
			: '../public/img/berm.jpg'),
			this.save();
	},
	save() {
		const jsonStringy = JSON.stringify(usuariosDb, null, 4);
		fs.writeFileSync(usuariosJSON, jsonStringy);
	},
};
