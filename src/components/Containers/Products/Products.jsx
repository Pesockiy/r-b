import {
  Row,
  Col,
  Card,
  Spinner,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ products, showMoreHandler, isLoading, count }) => {
  console.log(4)
  return !isLoading ? (
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
      <Row className="py-2">
        <Col>
          <Button className="mx-auto d-block" onClick={showMoreHandler}>
            показать еще {count}
          </Button>
        </Col>
      </Row>
      </Container>
    </>
  ) : (
    <Spinner style={{ position: "fixed", inset: "50%" }} />
  );
};
export default Products;
