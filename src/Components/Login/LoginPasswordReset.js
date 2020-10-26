import React, { useState, useEffect } from "react";
import Input from "../Inputs/Inputs";
import Title from "../Title/Title";
import Button from "../Buttons/Buttons";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../services/apiUrl";
import { Error } from "../Inputs/style";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  return (
    <div>
      <Title sectionTitle="Resete a senha" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        <Button disabled={loading ? true : false}>
          {loading ? "Resetando..." : "Resetar"}
        </Button>
      </form>
      <Error>{error}</Error>
    </div>
  );
};

export default LoginPasswordReset;
