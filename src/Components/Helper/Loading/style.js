import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Loader = styled.div`
  margin: auto;
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  padding-left: 0.3125rem;
`;
