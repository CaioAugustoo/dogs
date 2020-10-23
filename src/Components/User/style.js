import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.0625rem solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:focus,
    &:hover {
      background: white;
      box-shadow: 0 0 0 0.1875rem #eee;
      border-color: #333;
      outline: none;
    }
    &.active {
      background: white;
      box-shadow: 0 0 0 0.1875rem #fea;
      border-color: #fb1;

      svg > * {
        fill: #fb1;
      }
    }
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 1rem 0;
  position: relative;
`;
