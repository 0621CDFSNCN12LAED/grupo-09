import React, { Component } from "react";
import ContentCard from "../contentCard/contentCard";


const PRODUCTS_URL = "http://localhost:3000/api/products";

class LastProductInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log("Evento: Constructor");
    }

    render() {
        if (!this.state.lastProduct) {
            return <div>Cargando...</div>;
        }
        return (
          <ContentCard title="Last product in Database">
            <div className="text-center">
              <h2>{this.state.lastProduct.name}</h2>
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "20rem" }}
                src={`http://localhost:3000/images/product-images/${this.state.lastProduct.image}`}
                alt="Imagen del producto"
              />
            </div>
            <p className="text-center">Price: {this.state.lastProduct.price}</p>
            <p className="text-center">
              Description: {this.state.lastProduct.description}
            </p>
          </ContentCard>
        );
    }

    componentDidMount() {
        console.log("Evento: componentDidMount");
        this.fetchLastProduct();
    }
    async fetchLastProduct() {
        const result = await fetch(PRODUCTS_URL);
        const response = await result.json();
        const products = response.data;
        const lastProductId = products.length - 1;
        const lastProduct = products[lastProductId];


        this.setState({ lastProduct: lastProduct });
    }
}
export default LastProductInDb;
