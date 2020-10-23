import styled from 'styled-components';

export const InputStyled = styled.input`
  border: 0.0625rem solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: .8rem;
  border-radius: .4rem;
  background: #eee;
  transition: 0.2s;

  &:focus, &:hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 0.1875rem #fea;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: .5rem;
`;

export const Error = styled.p`
  color: #f31;
  font-size: .875rem;
  margin-top: .25rem;
`;