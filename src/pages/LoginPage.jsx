import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/auth-operations';

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const onSignIn = location.pathname === '/login';
  const [empty, setEmpty] = React.useState({ email: false, password: false });

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };

    console.log('form login user: ', user);

    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }
    if (user.password === '') {
      setEmpty(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(logInUser(user));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={empty.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={empty.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {onSignIn && (
                  <Link to={`/register`} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
