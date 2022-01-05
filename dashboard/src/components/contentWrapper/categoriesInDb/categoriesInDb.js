import React, { Component } from "react";

// const PRODUCTS_URL = "http://localhost:3000/api/products";
const PRODUCTS_URL = "/api/products";

const count = [];

export default class CategoriesInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // products: [],
    };

    console.log("Evento: Constructor");
  }

  render() {
    if (!this.state.products) {
      return <div>Cargando...</div>;
    }

    return (
      <div>
        <div className="col-lg-8 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
              <h4> Repuestos: {count[0]}</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
              <h4> Accesorios: {count[1]} </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
              <h4>Indumentaria: {count[2]} </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Evento: componentDidMount");
    this.fetchProducts();
  }

  async fetchProducts() {
    
    const result = await fetch(PRODUCTS_URL);
    const products = await result.json();
    

    count.push(products.meta.countByCategory.repuesto);
    count.push(products.meta.countByCategory.accesorio);
    count.push(products.meta.countByCategory.indumentaria);

    console.log(count);

    //Setear como un estado
    this.setState({ count: count });
  }
}
