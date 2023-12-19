import { useEffect, useState } from "react";


const products = []

const getProducts = async ()=>{
try{
    fetch('https://fakestoreapi.com/products/1')
       const response = await    res=>res.json())
            .then(json=>console.log(json))
}
}