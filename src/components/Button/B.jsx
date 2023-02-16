import React from "react";
import { Button } from "react-bootstrap";

const withYebatCopat = (Component) => (props) => <Component {...props} className="ебатьКопать" />;

export default withYebatCopat(Button);
