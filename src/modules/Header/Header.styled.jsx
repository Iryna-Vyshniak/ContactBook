import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    > ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      list-style-type: none;
    }
  }
`;

export const LinkNav = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #608b38;
  }
`;
