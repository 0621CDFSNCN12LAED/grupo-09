import React, { useEffect, useState } from "react";
import ValueCard from "./valueCard/valueCard";

const productsUrl = "http://localhost:3000/api/products";
const usersUrl = "http://localhost:3000/api/users";


export default function ContentRowTop() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  async function searchProducts () {
		const response = await fetch(productsUrl);
		const result = await response.json();
		setProducts(result.meta);
	}

  async function searchUsers () {
		const response = await fetch(usersUrl);
		const result = await response.json();
		setUsers(result.meta);
	}
useEffect( () => {
		searchProducts();	
    searchUsers();
	}, []);

  return (
    <div className="row">
      <ValueCard
        title="Total Usuarios Registrados"
        icon="fa-id-card"
        color="warning"
        value={users.count}
      />
      {/* <ValueCard
        title="Consultas Whatsapp del Dia"
        icon="fa-whatsapp"
        color="success"
        value="79"
      /> */}
      <ValueCard
        title="Productos en Venta"
        icon="fa-chart-line"
        color="primary"
        value={products.count}
      />
    </div>
  );
}
