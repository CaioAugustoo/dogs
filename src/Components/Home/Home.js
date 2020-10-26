import React from "react";
import { Wrapper } from "./style";
import Feed from "../Feed/Feed";
import Head from "../Helper/Head/Head";

const Home = () => {
  return (
    <Wrapper>
      <Head title="Fotos" description="Home do site Dogs, com feed de fotos" />
      <Feed />
    </Wrapper>
  );
};

export default Home;
