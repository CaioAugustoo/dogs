import React from "react";
import { InputStyled, Wrapper, Label, Error } from "./style";

const Input = ({ type, onChange, label, name, value, error, onBlur }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
