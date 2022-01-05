import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Header from "./Components/Header/Header";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer/Footer";

import { UserStorage } from "./UserContext";

import GlobalStyle from "./style/GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="App__body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="conta/*" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};

export default App;
