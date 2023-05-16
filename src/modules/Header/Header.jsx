import React from 'react';
import { LinkNav, HeaderBlock } from './Header.styled';
import NavbarAuth from '../Navbar/NavbarAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <nav>
          <Link to="/">Logo</Link>
          <ul>
            <li>
              <LinkNav to="/">Home</LinkNav>
            </li>
            <li>
              <LinkNav to="/contacts">Contacts</LinkNav>
            </li>
            <li>
              <NavbarAuth />
            </li>
          </ul>
        </nav>
      </HeaderBlock>
    </>
  );
};

export default Header;
