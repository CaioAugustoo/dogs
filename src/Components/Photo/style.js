import styled, { keyframes } from "styled-components";
import ViewsSvg from "../../Assets/visualizacao-black.svg";

const scaleUp = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

const latir = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Photo = styled.div`
  margin: auto;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  opacity: 0;
  transform: scale(0.8);
  overflow: hidden;
  animation: ${scaleUp} 0.3s forwards;
  overflow: hidden;
  height: 36rem;
  border-radius: 0.2rem;

  &.photo__single {
    grid-template-columns: 1fr;
    height: auto;
  }

  &.photo__single div img {
    grid-row: 1;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  &.photo__single div:nth-child(2) {
    padding: 1rem 0 0 0;
  }

  &.photo__single ul {
    padding: 0;
  }

  &.photo__single form {
    margin: 1rem 0;
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const PostImage = styled.div`
  grid-row: 1/4;

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const Views = styled.span`
  &:before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 0.625rem;
    margin-right: 0.5rem;
    background: url(${ViewsSvg});
  }
`;

export const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li {
    margin-right: 2rem;

    &:before {
      content: "";
      display: inline-block;
      height: 1.25rem;
      margin-right: 0.5rem;
      position: relative;
      top: 0.1875rem;
      width: 0.125rem;
      background: #333;
      margin-top: 0.3125rem;
    }
  }
`;

export const Author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    text-decoration: underline;
  }
`;

export const Comment = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 0.0625rem solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #eee;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 0.1875rem #fea;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;
  outline: none;

  &:focus,
  &:hover svg path {
    fill: #fea;
    stroke: #fb1;
  }

  &:focus,
  &:hover svg g {
    animation: ${latir} 0.6s infinite;
  }
`;

export const Delete = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 0.0625rem solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:focus,
  &:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 0.1875rem #eee;
    border-color: #333;
  }
`;
