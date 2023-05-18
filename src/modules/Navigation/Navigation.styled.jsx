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

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  &.active {
    outline: none;

    box-shadow: inset -1px -1px 3px #fff, inset 1px 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    text-shadow: ${props => props.theme.shadows.textShadow};

    cursor: pointer;
  }
`;
