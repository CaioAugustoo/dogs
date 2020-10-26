import React from "react";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";
import { FooterStyled } from "./style";

const Footer = () => {
  return (
    <FooterStyled>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </FooterStyled>
  );
};

export default Footer;
