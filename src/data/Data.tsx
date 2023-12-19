import { useEffect } from "react";

const products:String[] = [];

const getProducts = async () => {
  try {
    const request = await fetch("https://fakestoreapi.com/products/");
    const response = await request.json();
    const data = await response;

    products.push(data);
    console.log(products);
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  getProducts();
});

export default products