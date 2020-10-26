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
        transition: 0.3s;
      }
    }
  }

  &.menu__mobile__items {
    display: block;
    position: absolute;
    top: 4.375rem;
    right: 0rem;
    padding: 0.5rem 1rem;
    background: white;
    box-shadow: 0 0.0625rem 20px rgb(0 0 0 / 5%);
    border-radius: 0.2rem;
    transform: translateX(-0.625rem);
    opacity: 0;
    transition: 0.1s ease;
    pointer-events: none;

    a,
    button,
    a.active {
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: 0;
      border-bottom: 0.0625rem solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;
      justify-content: flex-start;
      box-shadow: none;
      border-radius: 0;

      &:hover svg > * {
        fill: #fb1;
      }

      &:last-child {
        border-bottom: none;
      }

      svg,
      svg > * {
        fill: #333;
        margin-right: 0.5rem;
      }
    }
  }

  &.mobile__items__active {
    opacity: 1;
    transform: translateX(0);
    z-index: 100;
    pointer-events: initial;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 1rem 0;
  position: relative;
`;

export const MobileButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid transparent;
  transition: 0.1s;
  cursor: pointer;

  .mobile__button__active,
  &:focus,
  &:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 0.1875rem #fea;
    border-color: #fb1;
    color: #fb1;
  }

  &:after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 0.125rem;
    background: currentColor;
    border-radius: 0.125rem;
    box-shadow: 0 0.375rem currentColor, 0 -0.375rem currentColor;
    transition: 0.2s;
  }

  &.mobile__button__active:after {
    transform: rotate(-90deg);
    width: 0.25rem;
    height: 0.25rem;
    box-shadow: 0 0.5rem currentColor, 0 -0.5rem currentColor;
  }
`;

export const PhotoPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  form #img {
    margin-bottom: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const Preview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: "";
    display: block;
    height: 0rem;
    padding-bottom: 100%;
  }
`;

export const Total = styled.div`
  grid-column: 1/3;
  padding: 2rem;
  font-size: 2rem;

  &.graph__item {
    box-shadow: rgb(0 0 0 / 5%) 0rem 0.625rem 1.25rem;
    border-radius: 0.2rem;
    display: grid;
    align-items: center;
  }

  &.graph__total {
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2rem;

    @media (max-width: 40rem) {
      grid-column: 1;
    }
  }
`;
