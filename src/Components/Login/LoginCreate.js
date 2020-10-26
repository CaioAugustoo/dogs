import React, { useContext } from "react";
import useForm from "../../Hooks/useForm";
import { Button } from "../Buttons/style";
import Input from "../Inputs/Inputs";
import Title from "../Title/Title";
import { LoginFormStyled, Section } from "./style";
import { USER_POST } from "../../services/apiUrl";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import { Error } from "../Inputs/style";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm(); // se usar em aplicação real, forçar do tipo "password". Fazer regex no Hook.

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = async event => {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  };

  return (
    <Section>
      <Title sectionTitle="Cadastre-se">Cadastre-se</Title>
      <LoginFormStyled onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading ? true : false}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
        {error && <Error>{error}</Error>}
      </LoginFormStyled>
    </Section>
  );
};

export default LoginCreate;
