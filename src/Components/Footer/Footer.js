import React from "react";
import * as S from "./style";

import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <S.FooterStyled>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </S.FooterStyled>
  );
};

export default Footer;
