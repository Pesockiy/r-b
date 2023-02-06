import { Row, Col, Card, Spinner, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <>
      <Container className="b bg-warning my-3 rounded-1">
        <Row className="py-2 gy-2 align-items-stretch">
          {products?.map(({ id, title, description, thumbnail }) => (
            <Col md="3" key={id}>
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
