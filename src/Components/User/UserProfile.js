import React from "react";
import Feed from "../Feed/Feed";
import { Container } from "../../style/GlobalStyle";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";
import Head from "../Helper/Head/Head";

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
