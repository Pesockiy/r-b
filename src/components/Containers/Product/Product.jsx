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
  Modal,
  Form,
} from "react-bootstrap";

const Product = () => {
  const [product, setProduct] = useState();
  const [index, setIndex] = useState(0);
  const [val, setVal] = useState("");
  let { id } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const s = (e) => {
    setVal(e.target.value);
    console.log(val);
  };

  const handleSubmit = () => {
    setProduct({ ...product, title: val });
    handleClose();
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  console.log(navigate);

  return (
    <>
      <Button variant="info" onClick={goBackHandler}>
        назат
      </Button>
      {product && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>редачение инфі</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>введи заголовок</Form.Label>
                <Form.Control
                  onChange={s}
                  value={val}
                  type="text"
                  placeholder={product.title}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              не да а нет
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              не нет а да
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {product ? (
        <Row className="py-2 gy-2 align-items-stretch">
          <Col key={product.id} ls={4} md={8} lg={6}>
            <Card
              bg="transparent"
              style={{ borderRadius: "20px", overflow: "hidden" }}
            >
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {product?.images.map((image) => (
                  <Carousel.Item key={image}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={product.title}
                      style={{ height: "500px" }}
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
              <ListGroup.Item as="li" className="d-flex align-items-lg-center">
                rating: {product.rating}
                <Button
                  style={{ marginLeft: "auto" }}
                  variant="primary"
                  onClick={handleShow}
                >
                  редактировать инфу
                </Button>
              </ListGroup.Item>
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
