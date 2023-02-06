import { useState, useEffect } from "react";

import Users from "../components/Containers/Products/Products";
import useFetch from "../hooks";

const perToShow = 5;

const Products = () => {
  const [currentItems, setCurrentItems] = useState(perToShow);
  const [products, isLoading] = useFetch(
    `https://dummyjson.com/products?limit=${currentItems}`
  );

  const showMoreHandler = () => {
    setCurrentItems(0 + perToShow);
  };

  return (
    <Users
      products={products.products}
      showMoreHandler={showMoreHandler}
      isLoading={isLoading}
      count={perToShow}
    />
  );
};

export default Products;
