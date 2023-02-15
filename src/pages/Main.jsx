import {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  memo,
} from "react";

import PropTypes from "prop-types";

import {
  Container,
  Row,
  Col,
  Badge,
  Spinner,
  Card,
  Form,
} from "react-bootstrap";

import Tooltip from "./Tooltip";
import Button from "../components/Button/Button";
import WithMemo from "../components/Button/WithMemo";

const Main = () => {
  const [number, setNumber] = useState(0);

  const clickHandler = useCallback(() => setNumber(number + 1), [number]);
  const clickHandler2 = useCallback(
    () => console.log("тот самий лишний ререндер"),
    []
  );

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Tooltip
              buttonText="тултип 1"
              tooltipText={"єто подсказка очень длиннная"}
            />
          </Col>
          <Col>
            <Tooltip
              buttonText="тултип 2"
              tooltipText={"єто мальенькая "}
              visible={true}
            />
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            {/* <WithMemo onClick={clickHandler2} variant="secondary">не должна ререндериться</WithMemo> */}
            <Button onClick={clickHandler2} variant="secondary">
              не должна ререндериться
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={clickHandler}>кнопка,которая все портит</Button>
            {number}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
