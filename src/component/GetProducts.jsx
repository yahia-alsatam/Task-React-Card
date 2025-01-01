import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";

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
      <ProductsCard Products={Products} />
    </>
  );
};

export default GetProducts;
