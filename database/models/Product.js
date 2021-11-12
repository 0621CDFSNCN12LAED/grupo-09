module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";
  let cols = {
    id: { 
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremen: true,
    },
    producto: { type: dataTypes.STRING,

    },
    proveedor: { type: dataTypes.STRING,

    },
    vendido: { type: dataTypes.STRING,

    },
    precio: { type: dataTypes.INTEGER,

    },
    imagen: { 

    },
    user_id:{ type: dataTypes.INTEGER,

    }
  }

  let config = {
    tablename: "products_appedal",
    timestamps: false,
  }
  let Product = sequelize.define(alias, cols, config);

  Product.associate = function(models) {
    Product.hasOne(models.User,{
      
    })
  }

  return Product;
};
