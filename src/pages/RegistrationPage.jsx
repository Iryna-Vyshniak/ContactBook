// import { Formik, Form, Field } from 'formik';
// import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { registerUser } from 'redux/auth/operations';

// export default function Register() {
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <Formik
//         initialValues={{ name: '', email: '', password: '' }}
//         onSubmit={(values, { resetForm }) => {
//           console.log(values);
//           const item = {
//             ...values,
//           };
//           console.log(item);
//           dispatch(registerUser(item));
//           resetForm();
//         }}
//       >
//         <Form>
//           <h2>SignUp</h2>
//           <label htmlFor="name">Name</label>
//           <Field
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Please enter name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />

//           <label htmlFor="email">Email</label>
//           <Field
//             type="email"
//             name="email"
//             id="email"
//             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//             title="Invalid email address"
//             placeholder="Please enter email"
//             required
//           />

//           <label htmlFor="password">Password</label>
//           <Field
//             type="password"
//             name="password"
//             id="password"
//             pattern=".{4,}"
//             title="Eight or more characters"
//             placeholder="Please enter password"
//             required
//             autoComplete="true"
//           />

//           <button type="submit">Sign Up</button>
//         </Form>
//       </Formik>
//       <p>
//         Already registered? <NavLink to={`/login`}>Sign in</NavLink>
//       </p>
//     </div>
//   );
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';

const theme = createTheme();

export default function Register() {
  const dispatch = useDispatch();
  const location = useLocation();
  const onSignUp = location.pathname === '/register';
  const [empty, setEmpty] = React.useState({ email: false, password: false });

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    console.log('form reg user: ', user);

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
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
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
      </Container>
    </ThemeProvider>
  );
}
