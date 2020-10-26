import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { Forms, LoginSection } from "./style";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <LoginSection>
      <Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Forms>
    </LoginSection>
  );
};

export default Login;
