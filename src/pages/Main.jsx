import useFetch from "../hooks";
import { Container, Row, Col, Badge, Spinner } from "react-bootstrap";

import { categoriesPath } from "../utilits/contsts";

const Main = () => {
  const [categories, isLoading] = useFetch(categoriesPath);

  console.log(categories);

  return (
    <>
      {isLoading ? (
        <Spinner style={{position: "fixed", inset: "50%"}}/>
      ) : (
        <Container className="bg-info p-4 my-3 rounded-1">
          <Row>
            <Col>Categories: </Col>
          </Row>
          <Row style={{ maxWidth: "700px" }}>
            {categories?.map((cat) => (
              <Col key={cat} lg="2">
                <Badge className="mt-2 mr-2">{cat}</Badge>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Main;
