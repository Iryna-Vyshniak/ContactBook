import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';
import { StyledBadge, Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { Avatar } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar
          alt="avatar"
          src={`https://source.unsplash.com/1200x1200?${user.name}`}
          sx={{ width: 24, height: 24 }}
        />
      </StyledBadge>

      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </Wrapper>
  );
};
