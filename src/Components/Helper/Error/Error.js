import React from "react";

import * as S from "./style";

const Error = ({ erroMessage }) => {
  if (!erroMessage) return null;
  return <S.ErrorStyled>{erroMessage}</S.ErrorStyled>;
};

export default Error;
