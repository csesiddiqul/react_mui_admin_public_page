import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP } from '../../redux/features/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { postApi, postApiToken } from '../../../service/ApiService';


export default function OTPVerification() {
  const [otp, setOTP] = useState('');
  const dispatch = useDispatch();
  const { loading, error, otpVerified, user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null); // Initialize authUser state

  useEffect(() => {
    const authUserString = localStorage.getItem("authUser");
    if (user === '' && authUserString) {
      try {
        const parsedAuthUser = JSON.parse(authUserString);
        setAuthUser(parsedAuthUser); // Set authUser state
        if (parsedAuthUser.email_verified_at === null) {
          navigate('/otpSubmit');
        }else{
          navigate('/admin')
        }
      } catch (error) {
        console.error("Error parsing authUserString:", error);
        // Handle parsing error as needed
      }
    }
  }, [user, navigate]);


  const getUsers = async (token) => {
    const url = '/api/check';
    try {
      const response = await postApiToken(url, token);
      console.log('Response:', response.data.user);
      localStorage.setItem("authUser", JSON.stringify(response.data.user));
      // Handle response as needed
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error as needed
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      toast.error("Please enter OTP");
      return;
    }
    dispatch(verifyOTP(otp));

    const token = localStorage.getItem("token");

    getUsers(token);
    
   


  };

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

  const handleResendOTP = () => {
    if (authUser) { // Ensure authUser is not null
      // Replace 'userEmail' with the actual email address
      sendVerificationEmail(authUser.email);
    } else {
      console.error("Auth user not available.");
    }
  };

  useEffect(() => {
    if (otpVerified) {
     
      navigate('/admin');
      toast.success("Login Successfully");
    }
  }, [otpVerified]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, margin: 60 }}>
        <Typography variant="h4" align="center" gutterBottom>
          OTP Verification
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter OTP"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={handleResendOTP}
              >
                Resend OTP
              </Button>

              <Typography sx={{ textAlign: 'center', margin: '10px' }}>
                Your Email is {authUser ? authUser.email : ''}
              </Typography>
            </Grid>
          </Grid>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Paper>
    </Container>
  );
}
