import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';
import { Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <Wrapper>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Log Out
      </button>
    </Wrapper>
  );
};
