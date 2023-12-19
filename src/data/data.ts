interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const getProducts = async (): Promise<Product[]> => {
  const products: Product[] = [];
  try {
    const request = await fetch("https://fakestoreapi.com/products/");
    const response = await request.json();
    const data: any = await response;

    products.push(data);
    console.log(products);
  } catch (error) {
    console.error(error);
  }

  return products;
};

export default getProducts;
