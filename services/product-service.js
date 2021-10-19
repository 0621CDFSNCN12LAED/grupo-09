/** @format */
const path = require("path");
const fs = require("fs");
const productosJSON = path.join(__dirname, "../Data/MOCK_DATA.json");
const productosDb = JSON.parse(fs.readFileSync(productosJSON, "utf-8"));

module.exports = {
  productoUnico(id) {
    const prodId = id;
    const productoUnico = productosDb.find((prod) => {
      return prod.id == prodId;
    });
    return productoUnico;
  },
  productCreate(body, image) {
    const lastItem = productosDb[productosDb.length - 1];
    const biggestItem = productosDb.length > 0 ? lastItem.id : 1;

    const newProd = {
      id: biggestItem + 1,
      ...body,
      precio: Number(body.precio),
      imagen: req.image ? req.image.filename : ".jpg",
    };

    productosDb.push(newProd);
    this.save();
  },
  edit(id, body, image) {
    const pordToEdit = this.productoUnico(id);
    pordToEdit.producto = body.producto;
    pordToEdit.proveedor = body.proveedor;
    pordToEdit.vendido = body.vendido;
    pordToEdit.precio = body.precio;
    pordToEdit.image = image ? image.filname : "default-image.jpg";
    this.save();
  },
  save() {
    const jsonStringy = JSON.stringify(productosDb, null, 4);
    fs.writeFileSync(productosJSON, jsonStringy);
  },
};
