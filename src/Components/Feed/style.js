import styled, { keyframes } from "styled-components";
import ViewsSvg from "../../Assets/visualizacao.svg";

const animeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-1.25rem);
  }
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const Feed = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  animation: ${animeLeft} 0.3s forwards;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Photo = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  div {
    grid-area: 1/1;
  }

  span {
    grid-area: 1/1;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: none;

    &:before {
      width: 1rem;
      height: 0.625rem;
      content: "";
      display: inline-block;
      margin-right: 0.25rem;
      background: url(${ViewsSvg});
    }
  }

  &:hover span {
    display: flex;
  }

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem calc(4rem + 0.9375rem) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 0.9375rem) 2rem 2rem;
  }
`;
