import React, { Component } from "react";
import ContentCard from "../contentCard/contentCard";


const PRODUCTS_URL = "http://localhost:3000/api/products";

class LastProductInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
        console.log("el componente se monto");
        this.fetchLastProduct();
    }
    async fetchLastProduct() {
        const result = await fetch(PRODUCTS_URL);
        const response = await result.json();
        const products = response.data;
        console.log("estos son los " + products);

        const lastProductId = products.length - 1;
        console.log(lastProductId);
        const lastProduct = products[lastProductId];
        console.log("este es el ultimo" + lastProduct);

        this.setState({ lastProduct: lastProduct });
    }
}
export default LastProductInDb;
