/** @format */
// const path = require("path");
// const fs = require("fs");
const { Products, categoriaProduct } = require("../database/models");

module.exports = {
  findAll() {
    const Productos = Products.findAll({
      include: "categoriaProduct",
    });
    return Productos;
  },
  productoUnico(id) {
    const productoUnico = Products.findByPk(id, {
      include: "categoriaProduct",
    });
    return productoUnico;
  },
  productCreate(body, image) {
    // const lastItem = productosDb[productosDb.length - 1];
    // const biggestItem = productosDb.length > 0 ? lastItem.id : 1;

    const newProd = Products.create({
      // id: biggestItem + 1,
      ...body,
      // precio: Number(body.precio),
      imagen: image
        ? image.filename
        : "../public/imgProductos/defaultProduct.png",
    });
    console.log(body, image);
    // productosDb.push(newProd);
    // this.save();
  },

  edit(id, body, imagen) {
    const pordToEdit = this.productoUnico(id);
    pordToEdit.producto = body.producto;
    pordToEdit.proveedor = body.proveedor;
    pordToEdit.vendido = body.vendido;
    pordToEdit.precio = body.precio;
    (pordToEdit.imagen = imagen ? imagen.filename : "../public/img/berm.jpg"),
      this.save();
  },
  save() {
    const jsonStringy = JSON.stringify(productosDb, null, 4);
    fs.writeFileSync(productosJSON, jsonStringy);
  },
};
