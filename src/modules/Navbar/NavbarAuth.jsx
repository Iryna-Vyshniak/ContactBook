import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink> |
      <NavLink to="/Login">Login</NavLink>
    </div>
  );
};

export default NavbarAuth;
