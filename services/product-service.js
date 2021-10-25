/** @format */
const path = require("path");
const fs = require("fs");
const productosJSON = path.join(__dirname, "../Data/MOCK_DATA.json");
const productosDb = JSON.parse(fs.readFileSync(productosJSON, "utf-8"));

module.exports = {
<<<<<<< HEAD
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
      imagen: image ? image.filename : ".jpg",
    };
=======
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
			imagen: image ? image.filename : '.jpg',
		};
>>>>>>> 218e57bd37ad94832508ff8acf89ea4bd3b6013d

    productosDb.push(newProd);
    this.save();
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
