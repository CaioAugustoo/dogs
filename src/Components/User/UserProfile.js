import React from "react";
import { useParams } from "react-router-dom";

import Feed from "../Feed/Feed";
import Title from "../Title/Title";
import Head from "../Helper/Head/Head";

import { Container } from "../../style/GlobalStyle";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Head title={user} />
      <Title sectionTitle={user} />
      <Feed user={user} />
    </Container>
  );
};

export default UserProfile;
