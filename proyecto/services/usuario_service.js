/** @format */

const bcryptjs = require("bcryptjs");
const saltRounds = 10;

const db = require("../database/models");
const Users = db.Usuario;
const { categoriaUser } = require("../database/models");

module.exports = {
  async usuarioUnico(id) {
    const usuarioUnico = await Users.findByPk(id, {
      include: "categoriaUser",
    });
    return usuarioUnico;
  },

  async userCreate(body, imagen) {
    const hashPassword = bcryptjs.hashSync(body.password, saltRounds);
    await Users.create({
      id: (await Users.max("id")) + 1,
      username: body.username,
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      categoriausers_id: body.userProfile,
      pass: hashPassword,
      imagen: imagen ? imagen.filename : "../public/img/berm.jpg",
    });
  },
  edit(iD, body, imagen) {
    Users.update(
      {
        username: body.username,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        city: body.city,
        adress: body.adress,
        phone: body.phone,
        birthday: body.birthday,
        password: bcryptjs.hashSync(body.password, saltRounds),
        avatar: imagen ? imagen.filename : "../public/img/berm.jpg",
      },
      {
        where: { id: iD },
      }
    );
  },
};
