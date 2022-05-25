import { useEffect, useState } from "react";

const useProducts = (deleteProduct) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://power-wheels-ltd.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.reverse()));
  }, [products]);
  return [products, deleteProduct];
};

export default useProducts;
