import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "../Title/Title";
import UserHeaderNav from "./UserHeaderNav";
import { Header } from "./style";

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
    <Header>
      <Title sectionTitle={title} />
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
