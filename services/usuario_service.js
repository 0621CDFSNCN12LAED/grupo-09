/** @format */
//const path = require('path');
//const fs = require('fs');
//const usuariosJSON = path.join(__dirname, '../Data/Users_appedal.json');
//const usuariosDb = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const db = require('../database/models');
const Users = db.Usuario;

module.exports = {
	async usuarioUnico(id) {
		const usuarioUnico = await Users.findByPk(id);
		return usuarioUnico;
	},
	async userCreate(body, imagen) {
		//const lastUser = Users[Users.length - 1];
		//const biggestUser = Users.length > 0 ? lastUser.id : 1;

		await Users.create({
			//id: biggestUser + 1,
			username: body.username,
			first_name: body.first_name,
			last_name: body.last_name,
			email: body.email,
			categoriaUser_id: body.userProfile,
			pass: bcryptjs.hashSync(body.password, saltRounds),
			imagen: imagen ? imagen.filename : '../public/img/berm.jpg',
		});
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
		userToEdit.password = bcryptjs.hashSync(body.password, saltRounds);

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
