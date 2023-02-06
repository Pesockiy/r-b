import { useState } from "react";

import { Button, Row, Col, Spinner } from "react-bootstrap";

import Products from "../components/Containers/Products/Products";

import useFetch from "../hooks";

const perToShow = 5;

const ProductsPage = () => {
  const [currentItems, setCurrentItems] = useState(perToShow);
  const [products, isLoading] = useFetch(
    `https://dummyjson.com/products?limit=${currentItems}`
  );

  const showMoreHandler = () => {
    setCurrentItems(currentItems + perToShow);
  };
  
  console.log(currentItems);
  if (isLoading) return <Spinner style={{position: "fixed", inset: "50%"}}/>;

  return (
    <>
      <Products
        products={products.products}
        showMoreHandler={showMoreHandler}
        isLoading={isLoading}
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
