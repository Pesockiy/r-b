import React, { useEffect, useState } from "react";
import { Button, Row, Col, Spinner, Form, Container } from "react-bootstrap";

const User = () => {
  const [text, setText] = useState("");
  const [g, setG] = useState(false);

  const [formData, setFormData] = useState("ds");

  const [file, setFile] = useState(null);

  console.log(file);

  useEffect(() => {
    if (g) {
      fetch("http://test")
        .then((res) => res.text())
        .then((res) => setText(res));
    }
  }, [g]);

  const submitHandler = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    // form.set("text", "dfsfds");

    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://test", config)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
      })
      .then((res) => console.log(res));
  };

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <Form onSubmit={submitHandler}>
            <Form.Control
              placeholder="введи шото"
              onChange={(e) => setFormData(e.target.value)}
            />
            <Button type="submit" className="mt-3 mb-4" id="text" name="text">
              отправь это говно
            </Button>
            <Form.Control
              custom
              title="Choose your color"
              type="file"
              onChange={(e) =>
                setFile(new FileReader().readAsText(e.target.files[0]))
              }
            />
          </Form>
        </Col>
      </Row>
      локация,из которой ті шелестишь {text && " - "} {text}
      <Row className="pt-4">
        <Col>
          <Button onClick={() => setG(true)} variant={"info"}>
            откуда ты,фраер
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
