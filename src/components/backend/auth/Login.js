import { Container, TextField, Button, Typography, Link, Grid, Paper } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/features/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { postApi } from '../../../service/ApiService';

export default function Login() {
  const { error, message, } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  const sendVerificationEmail = async (email) => {
    try {
      const response = await postApi('/api/send-otp', { email: email });
      if (response.status === 200) {

        navigate('/otpSubmit');
        toast.success("Please check your mail we have sent the OTP");
      }
    } catch (error) {
      console.error('Error sending verification email and handling response:', error.message);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Dispatch login action
      const res = await dispatch(loginUser(values));

      window.location.reload();
      if (res.payload.user.email_verified_at === null) {
        sendVerificationEmail(values.email);
        toast.success("send otp Successfully");


      } else {

        navigate("/admin");
        toast.success("Login Successfully");

      }
      // If login successful, redirection logic will be handled by useEffect
    } catch (error) {
      console.error('An error occurred:', error.message);
      if (error.message === "Username and password do not match") {
        // Set specific error message for invalid credentials
        toast.error("Username and password do not match");
      } else {
        // Handle other errors
        toast.error("Something went wrong");
      }
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, margin: 60 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {isLogin ? 'Login' : 'Login'}
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    error={!!(error && error.includes("email"))}
                    helperText={<ErrorMessage name="email" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    error={!!(error && error.includes("password"))}
                    helperText={<ErrorMessage name="password" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting' : 'Submit'}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} variant="body2">
              {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </Link>
          </Grid>
        </Grid>
      </Paper>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </Container>
  );
}
