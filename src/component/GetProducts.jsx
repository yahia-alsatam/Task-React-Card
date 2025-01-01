import React, { useState, useEffect } from "react";
import axios from "axios";

const GetProducts = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {Products.map((Product) => (
        <h1 key={Product.id}>{Product.id}</h1>
      ))}
    </>
  );
};

export default GetProducts;
