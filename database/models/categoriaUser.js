module.exports = function (sequelize, dataTypes) {
  let alias = "CategoriaUser";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremen: true,
    },
    categoria: { type: dataTypes.STRING },
  };

  let config = {
    tablename: "categoriausers",
    timestamps: false,
  };
  let categoriaUsuario = sequelize.define(alias, cols, config);

  categoriaUsuario.associate = function (models) {
    categoriaUsuario.hasMany(models.Usuario, {
      as: "CategoriaUsuario",
      foreignKey: "categoriausers_id",
    });
  };
  return categoriaUsuario;
};
