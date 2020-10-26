import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProtectedRoute from "./Components/Helper/ProtectedRoute/ProtectedRoute";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Header from "./Components/Header/Header";
import { UserStorage } from "./UserContext";
import GlobalStyle from "./style/GlobalStyle";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
          <ProtectedRoute path="conta/*" element={<User />} />
        </Routes>
      </UserStorage>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
