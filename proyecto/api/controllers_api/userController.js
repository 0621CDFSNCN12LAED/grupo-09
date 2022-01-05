const { Usuario } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    const users = await Usuario.findAll({
      order: [["id", "ASC"]],
      limit: 10,
    });
    return res.json({
      meta: {
        status: 200,
        count: users.length,
        url: "http://localhost:3000/api/users/",
        countByCategory: {
          comprador: users.filter((user) => user.categoriausers_id == 1).length,
          vendedor: users.filter((user) => user.categoriausers_id == 2).length,
          mecanico: users.filter((user) => user.categoriausers_id == 3).length,
        },
      },
      data: users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          detail: "http://localhost:3000/api/users/" + user.id,
        };
      }),
    });
  },
  detail: async (req, res) => {
    const user = await Usuario.findByPk(req.params.id);
    if (user) {
      res.json({
        id: user.id,
        fullName: user.first_name + user.last_name,
        email: user.email,
        birthdate: user.birth_date,
        avatar: "http://localhost:3000/images/avatars/" + user.avatar,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: "http://localhost:3000/api/users/" + req.params.id,
        },
        data: `No se encontró el usuario con id: ${req.params.id}`,
      });
    }
  },
};
