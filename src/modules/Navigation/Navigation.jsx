import { Link, NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Logo</Link>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {!isLoggedIn && (
        <>
          <NavLink to="/register">SignUp</NavLink>
          <NavLink to="/login">SignIn</NavLink>
        </>
      )}
    </nav>
  );
};
