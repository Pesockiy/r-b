import React, { forwardRef } from "react";
import styled from "styled-components";
import { Button as Btn, Badge } from "react-bootstrap";

import styles from "./Button.module.sass";

const StyledButton = styled(Btn)`
  display: flex;
  align-content: center;
  justify-content: center;

  font: 600 24px/1.2 serif;
  /* color: red;
  background-color: orange; */
`;

const Button = forwardRef(({ children, onClick, variant }, ref) => {
  console.log("button          ререндер!");

  return (
    <>
      <StyledButton
        className={styles.button}
        onClick={onClick}
        className="button"
        variant={variant}
        ref={ref}
      >
        {children}
      </StyledButton>
    </>
  );
});

export default Button;
