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
  //   Button,
  Card,
  Form,
} from "react-bootstrap";

import Button from "../components/Button/Button";

const Tooltip = ({ buttonText, tooltipText, visible }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const tooltipRef = useRef(null);
  const spanRef = useRef(null);

  const getRamdomNumber = useMemo(() => Math.round(Math.random()), []);

  const clickHandler = () => {
    if (!tooltipRef.current) return;
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    if (spanRef.current) {
      const offsetTop = tooltipRef.current.getBoundingClientRect().top;
      const spanHeight = spanRef.current.offsetHeight;
      const gap = 10;

      if (offsetTop < spanHeight + gap) {
        spanRef.current.classList.add("btm");
      }
    }

    const windowClickHandler = (event) => {
      if (tooltipRef.current.contains(event.target)) return;
      isVisible && setIsVisible(false);
    };

    window.addEventListener("click", windowClickHandler);
    return () => window.removeEventListener("click", windowClickHandler);
  }, [isVisible]);

  return (
    <div className="por">
      {isVisible && (
        <span ref={spanRef} className="tool">
          {tooltipText}
        </span>
      )}
      <Button ref={tooltipRef} onClick={clickHandler}>
        {buttonText}
      </Button>
    </div>
  );
};

Tooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  visible: PropTypes.bool,
};

Tooltip.defaultProps = {
  visible: false,
  buttonText: "click me!",
};

// export default Tooltip;
export default memo(Tooltip);
