import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { TOKEN_POST } from "../../services/apiUrl";
import { Section, LoginFormStyled, Register } from "./style";
import Title from "../Title/Title";
import { Error } from "../Inputs/style";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async event => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin({ username: username.value, password: password.value });

      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      localStorage.setItem("token", json.token);
    }
  };

  return (
    <Section>
      <Title sectionTitle="Login">Login</Title>
      <LoginFormStyled onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          type="text"
          value={username}
          {...username}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          value={password}
          {...password}
        />
        <Buttons type="submit" disabled={loading ? true : false}>
          {loading ? "Carregando..." : "Entrar"}
        </Buttons>
        {error && <Error>{error}</Error>}
      </LoginFormStyled>

      <Link to="/login/perdeu" className="password__lost">
        Perdeu a Senha?
      </Link>

      <Register>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link to="/login/criar" className="login__register">
          <Buttons type="submit">Cadastro</Buttons>
        </Link>
      </Register>
    </Section>
  );
};

export default LoginForm;
