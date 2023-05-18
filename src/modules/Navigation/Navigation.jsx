import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Logo from 'assets/logo-book.png';
import { Nav, NavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">
        <img src={Logo} alt="logo" width={48} />
      </Link>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Nav>
  );
};
