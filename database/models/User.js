module.exports = function (sequelize, dataTypes) {
  let alias = "Usuario";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremen: true,
    },
    username: { type: dataTypes.STRING },
    first_name: { type: dataTypes.STRING },
    last_name: { type: dataTypes.STRING },
    email: { type: dataTypes.STRING },
    birth_date: { type: dataTypes.DATE },
    city: { type: dataTypes.STRING },
    adress: { type: dataTypes.STRING },
    phone: { type: dataTypes.INTEGER },
    avatar: { type: dataTypes.STRING },
    categoriaUser_id: { type: dataTypes.INTEGER },
    pass: { type: dataTypes.STRING },
  };

  let config = {
    tablename: "usuarios",
    timestamps: false,
  };
  let Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Products, {
      as: "usuarios",
      foreignKey: "user_id",
    });

    Usuario.belongsTo(models.CategoriaUser, {
      as: "CategoriaUsuario",
      foreignKey: "categoriausers_id",
    });
  };
  return Usuario;
};
