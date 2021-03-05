import styled from "styled-components";
import loginBackground from "../../Assets/login.jpg";

export const Section = styled.section`
  animation: animeLeft 0.3s forwards;

  @keyframes animeLeft {
    from {
      opacity: 0;
      transform: translateX(-1.25rem);
    }
    to {
      opacity: 1;
      transform: initial;
    }
  }

  &.graph {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 40rem) {
      grid-template-columns: 1fr;
      margin-bottom: 2rem;
    }
  }

  .password__lost {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &::after {
      content: "";
      height: 0.125rem;
      width: 100%;
      background: currentColor;
      display: block;
    }
  }
`;

export const LoginFormStyled = styled.form`
  margin-bottom: 2rem;
`;

export const Register = styled.div`
  margin-top: 4rem;

  p {
    margin: 2rem 0rem;
  }

  h2 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: "";
      display: block;
      background: #ddd;
      height: 0.5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }
`;

export const LoginSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none !important;
    }
  }

  &::before {
    content: "";
    display: block;
    background: url(${loginBackground}) no-repeat center center;
    background-size: cover;
  }
`;

export const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
