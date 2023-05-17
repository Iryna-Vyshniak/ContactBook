import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';
import { Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </Wrapper>
  );
};
