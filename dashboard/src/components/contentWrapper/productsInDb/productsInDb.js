import React, { Component } from "react";

const PRODUCTS_URL = "http://localhost:3000/api/products";
// const PRODUCTS_URL = "/api/products";

export default class ProductsInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    console.log("Evento: Constructor");
  }

  render() {
    if (!this.state.products) {
      return <div>Cargando...</div>;
    }

    return (
      <div className="row">
        {this.state.products.map((product) => {
          return (
            <div className="col-lg-12 mb-8">
              <div className="bg-primary text-warning">
                <div className="card-title">Producto: {product.name} - Proveedor: {product.proveedor} - Precio: $ {product.precio}.-
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log("Evento: componentDidMount");
    this.fetchProducts();
  }

  async fetchProducts() {
    //Fetch de los productos
    const result = await fetch(PRODUCTS_URL);
    const response = await result.json();
    const products = response.data;

    //Setear como un estado
    this.setState({ products: products });
  }
}
