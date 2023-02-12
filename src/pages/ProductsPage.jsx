import { useState, useEffect, useCallback } from "react";

import { Button, Row, Col, Spinner } from "react-bootstrap";

import Products from "../components/Containers/Products/Products";

import useFetch from "../hooks";

const perToShow = 5;

const ProductsPage = () => {
  const [currentItems, setCurrentItems] = useState(perToShow);
  const [products, setProducts] = useState([]);
  // const [products, f, isLoading] = useFetch(
  //   `https://dummyjson.com/products?limit=${currentItems}`
  // );

  const f = useCallback(async (url) => {
    const r = await fetch(`https://dummyjson.com/products?limit=${url}`);
    const y = await r.json();
    console.log(1)
    setProducts(y);
  }, [currentItems]
  )

  useEffect(() => {
    f(5);
  }, []);
  const showMoreHandler = () => {
    setCurrentItems(currentItems + perToShow);
  };

  // if (isLoading) return <Spinner style={{ position: "fixed", inset: "50%" }} />;

  return (
    <>
      <Products
        products={products.products}
        showMoreHandler={showMoreHandler}
        // isLoading={isLoading}
        count={perToShow}
      />
      <Row className="py-2">
        <Col>
          <Button className="mx-auto d-block" onClick={showMoreHandler}>
            показать еще {perToShow}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProductsPage;
