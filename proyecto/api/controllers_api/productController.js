const { Product } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    const products = await Product.findAll();
    return res.json({
      meta: {
        status: 200,
        count: products.length,
        url: "http://localhost:3000/api/products/",
        countByCategory: {
          repuesto: products.filter(
            (product) => product.categoriaproducts_id == 1
          ).length,
          accesorio: products.filter(
            (product) => product.categoriaproducts_id == 2
          ).length,
          indumentaria: products.filter(
            (product) => product.categoriaproducts_id == 3
          ).length,
        },
      },
      data: products.map((product) => {
        return {
          id: product.id,
          name: product.producto,
          description: product.descripcion,
          category: product.categoriaproducts_id,
          detail: "http://localhost:3000/api/products/" + product.id,
          image: product.image,
          price: product.price,
        };
      }),
    });
  },
  detail: async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.categoriaproducts_id,
        image: product.image,
      });
    } else {
      res.json({
        meta: {
          status: 404,
          url: "http://localhost:3000/api/products/" + req.params.id,
        },
        data: `No se encontró el producto con id: ${req.params.id}`,
      });
    }
  },
};
