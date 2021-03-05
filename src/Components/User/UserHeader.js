import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";

import Title from "../Title/Title";
import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste sua foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <S.Header>
      <Title sectionTitle={title} />
      <UserHeaderNav />
    </S.Header>
  );
};

export default UserHeader;
