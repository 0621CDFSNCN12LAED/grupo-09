module.exports = function (sequelize, dataTypes) {
  let alias = "Productos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremen: true,
    },
    user_id: { type: dataTypes.INTEGER },
    producto: { type: dataTypes.STRING },
    proveedor: { type: dataTypes.STRING },
    vendido: { type: dataTypes.INTEGER },
    precio: { type: dataTypes.INTEGER },
    imagen: { type: dataTypes.STRING },
    categoriaProducts_id: { type: dataTypes.INTEGER },
    descripcion: { type: dataTypes.STRING },
  };

  let config = {
    tablename: "products",
    timestamps: false,
  };
  let Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.hasOne(models.Usuario, {
      as: "usurio",
      foreignKey: "user_id",
    });
    Product.belongsTo(models.CategoriaProducto, {
      as: "CategoriaProducto",
      foreignKey: "categoriaProducts_id",
    });
  };

  return Product;
};
