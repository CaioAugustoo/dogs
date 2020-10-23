import styled from 'styled-components';

export const HeaderStyled = styled.header`
  box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  a:first-child {
    padding: .5rem 0;
    
  }

  a:last-child {
    color: #333;
    align-items: center;
    display: flex;

    &::after {
      content: '';
      display: inline-block;
      width: 0.875rem;
      height: 1.0625rem;
      background: url('https://dogs.origamid.dev/static/media/usuario.dc442992.svg') no-repeat center center;
      margin-left: .5rem;
      position: relative;
      top: -0.0625rem;
    }
  }
`;
