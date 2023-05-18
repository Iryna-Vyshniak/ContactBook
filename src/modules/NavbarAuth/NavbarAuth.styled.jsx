import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #608b38;
    font-weight: 700;
    text-shadow: 0 1px 1px #fff;
  }
`;
