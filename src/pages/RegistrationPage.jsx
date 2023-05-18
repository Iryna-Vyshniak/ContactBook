import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#608B38',
    },
    secondary: {
      main: '#dee2ff',
    },
  },
});

export default function Register() {
  const dispatch = useDispatch();
  const location = useLocation();
  const onSignUp = location.pathname === '/register';
  const [empty, setEmpty] = React.useState({ email: false, password: false });

  // const theme = useTheme();
  // const { primary, secondary } = theme.palette;

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    //console.log('form reg user: ', user);

    if (user.name === '') {
      setEmpty(prev => ({ ...prev, name: true }));
      return;
    }
    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }
    if (user.password === '') {
      setEmpty(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(registerUser(user));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          backgroundImage: `url("https://ik.imagekit.io/irinavn2011/mobile-phone-1572901.jpg?updatedAt=1684181964478")`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={6} md={7} />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100vh',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              SignUp
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoComplete="given-name"
                    name="name"
                    autoFocus
                    error={empty.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={empty.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={empty.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  {onSignUp && (
                    <Link to={`/login`} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
