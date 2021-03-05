import React from "react";

import * as S from "./style";

const Buttons = ({ children, disabled, ...props }) => {
  return (
    <S.Button {...props} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Buttons;
