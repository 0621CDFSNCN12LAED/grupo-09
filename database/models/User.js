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
    categoriausers_id: { type: dataTypes.INTEGER },
  };

  let config = {
    tablename: "users",
    timestamps: false,
  };
  let Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Products, {
      as: "usuarios",
      foreignKey: "user_id",
    });

    // Usuario.belongsTo(models.CategoriaUser, {
    //   as: "CategoriaUsuario",
    //   foreignKey: "categoriaUser_id",
    // });
  };
  return Usuario;
};
