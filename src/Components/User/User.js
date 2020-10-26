import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { Wrapper } from "./style";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import Head from "../Helper/Head/Head";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <Wrapper>
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

export default User;
