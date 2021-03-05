import React from "react";

import Title from "./Title/Title";

import { Container } from "../style/GlobalStyle";

const NotFound = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Title sectionTitle="Erro: 404" />
      <p>Página não encontrada.</p>
    </Container>
  );
};

export default NotFound;
