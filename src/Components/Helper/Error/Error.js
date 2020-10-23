import React from "react";
import { ErrorStyled } from "./style";

const Error = ({ erroMessage }) => {
  if (!erroMessage) return null;
  return <ErrorStyled>{erroMessage}</ErrorStyled>;
};

export default Error;
