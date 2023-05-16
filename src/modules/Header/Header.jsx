import React from 'react';
import { HeaderBlock } from './Header.styled';
import NavbarAuth from '../NavbarAuth/NavbarAuth';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'modules/UserMenu/UserMenu';
import { Navigation } from 'modules/Navigation/Navigation';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <HeaderBlock>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
      </HeaderBlock>
    </>
  );
};

export default Header;
