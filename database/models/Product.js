module.exports = function (sequelize, dataTypes) {
  let alias = "Products";
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
    categoriaproducts_id: { type: dataTypes.INTEGER },
    descripcion: { type: dataTypes.STRING },
  };

  let config = {
    tablename: "products",
    timestamps: false,
  };
  let Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "user_id",
    });
    Product.belongsTo(models.categoriaProduct, {
      as: "categoriaProduct",
      foreignKey: "categoriaproducts_id",
    });
  };

  return Product;
};
