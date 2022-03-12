import React, { createContext, useState, useEffect, useCallback, ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST, UserDataProps } from "./services/apiUrl";

export type UserContextProps = {
  userLogin: (username: string, password: string) => Promise<void>
  userLogout: () => Promise<void>
  data: UserDataProps
  error: string | null
  loading: boolean
  login: boolean
}

export type UserStorageProps = {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps);

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const getUser = async (token: string) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({
        username, password
      });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Usuário inválido.`);
      const { token } = await tokenRes.json();
      localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          await getUser(token);
          if (!response.ok) throw new Error("Token inválido");
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
