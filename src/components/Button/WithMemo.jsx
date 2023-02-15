import { memo } from "react";

import Button from "./Button";

const compareProps = (prevProps, nextProps) =>
  JSON.stringify(prevProps.onClick) === JSON.stringify(nextProps.onClick);

const WithMemo = memo(Button, compareProps);

export default WithMemo;
