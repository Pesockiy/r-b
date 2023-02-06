import React, { forwardRef } from "react";
import styled from "styled-components";
import { Button as Btn, Badge } from "react-bootstrap";

import styles from "./Button.module.sass";

const StyledButton = styled(Btn)`
  display: flex;
  align-content: center;
  justify-content: center;

  font: 600 24px/1.2 serif;
  color: red;
  background-color: orange;
`;

const Button = forwardRef(({ children, handleButtonClick, variant }, ref) => {
  return (
    <>
      <StyledButton
        className={styles.button}
        ref={ref}
        onClick={handleButtonClick}
        className="button"
        variant={variant}
      >
        {children}
      </StyledButton>
      <h1>
        ccx
        <Badge size="lg" bg="secondary">
          dsd
        </Badge>
      </h1>
    </>
  );
});

export default Button;
