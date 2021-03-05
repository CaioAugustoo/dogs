import React, { useContext } from "react";

import { Link } from "react-router-dom";

import * as S from "./style";
import { Container } from "../../style/GlobalStyle";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <S.HeaderStyled>
      <Container>
        <S.HeaderNavigation>
          <Link to="/">
            {" "}
            <Dogs />{" "}
          </Link>
          {data ? (
            <Link to="/conta">{data.nome}</Link>
          ) : (
            <Link to="/login">Login / Criar</Link>
          )}
        </S.HeaderNavigation>
      </Container>
    </S.HeaderStyled>
  );
};

export default Header;
