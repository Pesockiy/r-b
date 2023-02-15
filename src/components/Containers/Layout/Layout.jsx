import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Nav from "../Nav/Nav";

const Layout = () => {
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="bg-dark py-2 text-white"
      fluid
    >
      <Container>
        {/* <Nav /> */}
        <div style={{ height: 50}}></div>

        <Outlet />
      </Container>
    </Container>
  );
};

export default Layout;
