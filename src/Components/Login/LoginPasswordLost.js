import React from "react";
import * as S from "./style";

import { PASSWORD_LOST } from "../../services/apiUrl";

import Title from "../Title/Title";
import Input from "../Inputs/Inputs";
import Button from "../Buttons/Buttons";
import { Error } from "../Inputs/style";
import Head from "../Helper/Head/Head";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

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
      await request(url, options);
    }
  };

  return (
    <S.Section>
      <Head title="Perdeu a senha" />
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
      <Error>{error}</Error>
    </S.Section>
  );
};

export default LoginPasswordLost;
