import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';


type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type ProductProviderProps = {
  children: ReactNode
}

type ProductContextProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);
const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

const ProductProvider= ({ children }:ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch("https://fakestoreapi.com/products/");
        const response = await request.json();
        const data: Product[] = await response;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};



export { ProductProvider, useProductContext };
