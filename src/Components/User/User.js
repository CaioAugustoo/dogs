import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import * as S from "./style";

import { UserContext } from "../../UserContext";

import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";
import Head from "../Helper/Head/Head";
import ProtectedRoute from "../Helper/ProtectedRoute/ProtectedRoute";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <S.Wrapper>
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <Route path="/" element={<Feed user={data?.id} />} />
              <Route path="/postar" element={<UserPhotoPost />} />
              <Route path="/estatisticas" element={<UserStats />} />
              <Route path="*" element={<NotFound />} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </S.Wrapper>
  );
};

export default User;
