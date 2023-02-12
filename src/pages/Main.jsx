import { useEffect, useState } from "react";
import useFetch from "../hooks";
import {
  Container,
  Row,
  Col,
  Badge,
  Spinner,
  Button,
  Card,
  Form,
} from "react-bootstrap";

import { categoriesPath } from "../utilits/contsts";

export const CardBlock = ({
  title,
  body,
  id,
  completed,
  handleDelete,
  handleEdit,
}) => {
  const [showEditButton, setShowEditButton] = useState(false);

  return (
    <Card className="my-3 text-dark" key={id}>
      <Card.Header
        className="d-flex justify-content-between"
        onMouseEnter={() => setShowEditButton(true)}
        onMouseLeave={() => setShowEditButton(false)}
      >
        {title} {showEditButton && <span onClick={handleEdit}>edit info</span>}
      </Card.Header>
      <Card.Body>{body}</Card.Body>
      <Button variant="danger" onClick={handleDelete}>
        DELETE
      </Button>
    </Card>
  );
};

const Main = () => {
  // const [categories, isLoading] = useFetch(categoriesPath);
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([
    {
      title: "поесть",
      body: "dssfdfd",
      id: 0,
      completed: false,
    },
    {
      title: "поспать",
      body: "dssfdfd1",
      id: 1,
      completed: false,
    },
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => id !== item.id));
  };

  const handleEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          if (val.trim().length < 1) return { ...todo, title: todo.title };
          else return { ...todo, title: val };
        } else return todo;
      })
    );
    console.log(todos, val);
  };

  return (
    <>
      {/* {isLoading ? (
        <Spinner style={{ position: "fixed", inset: "50%" }} />
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
      )} */}
      <Container>
        <Row>
          {todos?.map((todo) => (
            <Col key={todo.id} lg={4}>
              <CardBlock
                {...todo}
                handleDelete={() => handleDelete(todo.id)}
                handleEdit={() => handleEdit(todo.id)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={4}>
            <Form>
              <Form.Control onChange={(e) => setVal(e.target.value)} />
            </Form>
            <Button className="mt-3">ebash</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
