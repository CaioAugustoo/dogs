import React, { useContext } from "react";
import * as S from "./style";

import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <S.LoginSection>
      <S.Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </S.Forms>
    </S.LoginSection>
  );
};

export default Login;
