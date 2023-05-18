import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';
import { StyledBadge, Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { Avatar, Chip } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>

      <Chip
        avatar={
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
        }
        label="LogOut"
        variant="outlined"
        onClick={handleLogOut}
        sx={{
          border: '1px solid #dfcece',
          color: '#000000',
          textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
          boxShadow: 3,
        }}
      />
    </Wrapper>
  );
};
