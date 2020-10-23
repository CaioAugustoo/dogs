import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: .4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: .8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover, &:focus {
    outline: none;
    box-shadow: 0 0 0 0.1875rem #fea, 0 0 0 0.25rem #fb1;
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }
`;