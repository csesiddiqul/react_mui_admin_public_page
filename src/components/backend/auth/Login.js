import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
<<<<<<< HEAD
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
=======
import { Link, useSearchParams } from 'react-router-dom';
>>>>>>> apurbo
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/features/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Login() {
<<<<<<< HEAD
  const { error, message } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const navigate = useNavigate();
=======
  const { error, message } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

>>>>>>> apurbo
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        {isLogin ? 'Login' : 'Register Yourself'}
        {process.env.REACT_APP_SECRET_KEY}
      </Typography>
<<<<<<< HEAD

=======
      
>>>>>>> apurbo
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(loginUser(values));
          setSubmitting(false);
<<<<<<< HEAD
          navigate("/");
=======
>>>>>>> apurbo
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              error={<ErrorMessage name="password" />}
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              error={<ErrorMessage name="password" />}
              helperText={<ErrorMessage name="password" />}
            />
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Submit'}
            </Button>
            <br />
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} variant="contained" color="primary">
              {isLogin ? 'Need Account?' : 'Already a User'}
            </Link>
          </Form>
        )}
      </Formik>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </Container>
  );
}
