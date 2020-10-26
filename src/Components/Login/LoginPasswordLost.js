import React from "react";
import Title from "../Title/Title";
import Input from "../Inputs/Inputs";
import Button from "../Buttons/Buttons";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../services/apiUrl";
import { Error } from "../Inputs/style";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async event => {
    event.preventDefault();
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
    }
  };

  return (
    <>
      <Title sectionTitle="Perdeu a senha?" />
      {data ? (
        <p style={{ color: "#4C1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          <Button disabled={loading ? true : false}>
            {loading ? "Enviando..." : "Enviar Email"}
          </Button>
        </form>
      )}
      <Error errorMessage={error} />
    </>
  );
};

export default LoginPasswordLost;
