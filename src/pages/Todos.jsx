import React, { useEffect, useState } from "react";
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












const Todos = () => {
  return (
    <div className="bg-dark vh-100">
      <Container className="bg-dark hv-100">
        <Row>
          <Col className="mx-auto p-4" lg={4}>
          
          <Form>
            <Form.Control defaultValue="fd"/>
          </Form>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Todos;
