import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
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
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

import Nav from "../Nav/Nav";

const Layout = () => {
  const btnRef = useRef();
  const location = useLocation();

  useLayoutEffect(() => {
    gsap.from(btnRef.current, { opacity: 0, duration: 1 }); //wait 2 seconds
  }, [location]);

  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="bg-dark py-2 text-white"
      fluid
    >
      <Container>
        <Nav />
        <div style={{ height: 50 }}></div>

        <div ref={btnRef}>
          <Outlet />
        </div>
      </Container>
    </Container>
  );
};

export default Layout;
