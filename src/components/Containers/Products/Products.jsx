import { Row, Col, Card, Spinner, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  createRef,
  useTransition,
  createContext,
} from "react";
import { gsap } from "gsap";

import { api, categoriesPath } from "../../../utilits/contsts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setLoader(false));
  }, []);

  if (loader)
    return <Spinner style={{ position: "fixed", top: "50%", left: "50%" }} />;

  return (
    <>
      <Container className="bg-warning my-3 rounded-1">
        <Row className="py-2 gy-2 align-items-stretch">
          {products?.map(({ id, title, description, thumbnail }) => (
            <Col lg={3} key={id}>
              <Link
                to={`${id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card style={{ height: "100%" }} bg="success">
                  <Card.Img
                    style={{ height: "230px" }}
                    variant="top"
                    src={thumbnail}
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description.slice(0, 10)}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Products;
