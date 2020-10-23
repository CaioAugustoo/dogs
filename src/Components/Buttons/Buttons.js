import React from "react";
import { Button } from "./style";

const Buttons = ({ children, disabled, ...props }) => {
  return (
    <Button {...props} disabled={disabled}>
      {children}
    </Button>
  );
};

export default Buttons;
