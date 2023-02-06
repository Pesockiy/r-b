import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  ListGroup,
  Carousel,
  Button,
  Spinner,
} from "react-bootstrap";

const Product = () => {
  const [product, setProduct] = useState();
  const [index, setIndex] = useState(0);
  let { id } = useParams();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        console.log(product);
      });
  }, []);

  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Button variant="info" onClick={goBackHandler}>
        back
      </Button>
      {product ? (
        <Row className="py-2 gy-2 align-items-stretch">
          <Col key={product.id} className="">
            <Card
              bg="transparent"
              style={{ borderRadius: "20px", overflow: "hidden" }}
            >
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {product?.images.map((image) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={product.title}
                      style={{height: "500px"}}
                    />
                    <Carousel.Caption>
                      <h3>{product.title}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body className="bg-success">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <ListGroup className="mb-4" as="ul">
              <ListGroup.Item as="li">
                {product.category.toLowerCase()} / {product.brand.toLowerCase()}
              </ListGroup.Item>
              <ListGroup.Item as="li">price: {product.price}$</ListGroup.Item>
              <ListGroup.Item as="li">rating: {product.rating}</ListGroup.Item>
            </ListGroup>
            <p>{product.description}</p>
            <Button>купить {product.title}</Button>
          </Col>
        </Row>
      ) : (
        <Spinner style={{ position: "fixed", inset: "50%" }} />
      )}
    </>
  );
};

export default Product;
