import React, { useEffect, useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as S from "./style";

import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatísticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";

import useMedia from "../../Hooks/useMedia";
import { UserContext } from "../../UserContext";

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const { userLogout } = useContext(UserContext);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const mobile = useMedia("(max-width: 40rem)");

  return (
    <>
      {mobile && (
        <S.MobileButton
          aria-label="menu"
          className={mobileMenu && "mobile__button__active"}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <S.Nav
        className={`${mobile ? "menu__mobile__items" : ""} ${
          mobileMenu ? "mobile__items__active" : ""
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatísticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </S.Nav>
    </>
  );
};

export default UserHeaderNav;
