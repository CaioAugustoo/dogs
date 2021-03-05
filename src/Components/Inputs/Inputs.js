import React from "react";

import * as S from "./style";

const Input = ({ type, onChange, label, name, value, error, onBlur }) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputStyled
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default Input;
