module.exports = function (sequelize, dataTypes) {
  let alias = "categoriaProduct";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremen: true,
    },
    categoria: { type: dataTypes.STRING },
  };

  let config = {
    tablename: "categoriaproducts",
    timestamps: false,
  };
  let categoriaProducto = sequelize.define(alias, cols, config);

  categoriaProducto.associate = function (models) {
    categoriaProducto.hasMany(models.Products, {
      as: "categorias",
      foreignKey: "categoriaproducts_id",
    });
  };
  return categoriaProducto;
};
