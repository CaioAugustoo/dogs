import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, HeaderNavigation } from "./style";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

import { Container } from "../../style/GlobalStyle";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <HeaderStyled>
      <Container>
        <HeaderNavigation>
          <Link to="/">
            {" "}
            <Dogs />{" "}
          </Link>
          {data ? (
            <Link to="/conta">{data.nome}</Link>
          ) : (
            <Link to="/login">Login / Criar</Link>
          )}
        </HeaderNavigation>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
