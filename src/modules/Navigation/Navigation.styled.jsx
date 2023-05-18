import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled(Link)`
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: ${props => props.theme.fontSizes.s};

  font-weight: 500;

  &.active {
    color: white;
    background: linear-gradient(141.22deg, #c1c54f 9.4%, #608b38 91.91%);
  }
`;
