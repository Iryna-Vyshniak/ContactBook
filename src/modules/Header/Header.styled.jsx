import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AppBar as HeaderBlock } from '@mui/material';

// export const HeaderBlock = styled.header`
//   position: sticky;
//   top: 0;
//   left: 0;
//   z-index: 1100;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   min-height: 64px;

//   padding-right: ${props => props.theme.space[4]}px;
//   padding-left: ${props => props.theme.space[4]}px;
//   padding-top: ${props => props.theme.space[3]}px;
//   padding-bottom: ${props => props.theme.space[3]}px;

//   color: ${props => props.theme.colors.black};
//   //background-color: ${props => props.theme.colors.background};

//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

//   backdrop-filter: blur(7.5px);
//   opacity: 0.9;
//   > nav {
//     display: flex;

//     > ul {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       gap: 12px;
//       list-style-type: none;
//     }
//   }
// `;

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

export const AppBar = styled(HeaderBlock)`
  position: fixed;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  margin-bottom: 30px;

  background: ${({ theme }) => theme.backgroundHeaderFooter};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
`;

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;
export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
