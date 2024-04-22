import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { postApi, postApiToken } from '../../../service/ApiService';
import { toast } from 'react-toastify';
import { verifyOTP } from '../../redux/features/authSlice';
import { Button, Typography } from '@mui/material';


export default function UserLogin() {

    const { error, user, otpVerified } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [verificationEmailSent, setVerificationEmailSent] = useState(false);

    const [myuser, setMyuser] = useState(null);

    const getUsers = async (token) => {
        const url = '/api/check';
        try {
            const response = await postApiToken(url, token);
            localStorage.setItem("authUser", JSON.stringify(response.data.user));
            localStorage.setItem("role", JSON.stringify(response.data.role));
            if (response.data.user.email_verified_at !== null) {
                window.location.reload();
            }


        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const otp = formData.get('otp');
        if (!otp.trim()) {
            toast.error("Please enter OTP");
            return;
        }
        dispatch(verifyOTP(otp));
        const token = localStorage.getItem("token");
        getUsers(token);

    };


    const handleResendOTP = () => {
        if (myuser) {
            sendVerificationEmail(myuser);
        } else {
            console.error("Auth user not available.");
        }
    };



    const sendVerificationEmail = async (email) => {
        try {
            const response = await postApi('/api/send-otp', { email: email });
            if (response.status === 200) {
                toast.success("Please check your mail we have sent the OTP");
            }
        } catch (error) {
            console.error('Error sending verification email and handling response:', error.message);
        }
    };



    useEffect(() => {

        const authUserString = localStorage.getItem("authUser");
        if (user === '' && authUserString) {
            try {
                const authUser = JSON.parse(authUserString);
                setMyuser(authUser.email);

                if (authUser.email_verified_at === null && !verificationEmailSent) {

                } else {
                    navigate('/admin');
                    toast.success("Login Successfully");
                }
            } catch (error) {
                console.error("Error parsing authUserString:", error);
                // Handle parsing error as needed
            }
        }
    }, []);






    return (
        <div>
            <div className={`container-fluid d-flex justify-content-center align-items-center vh-100 ${styles.body}`}>
                <div className="row justify-content-center">
                    <div className="col-md-4 align-items-center">
                        <aside className={`note-ar note-green ${styles.note}`}>
                            <p className="noticear"> আবেদন ফরম পূরণের পূর্বে পূরণকৃত ফরম ও নির্দেশিকা পড়ুন এবং নিশ্চিত হয়ে আবেদন করুন । <br />  <br /> অতিরিক্ত তথ্যের জন্য যোগাযোগঃ (  +88-01511-440044 )<br /><br /> সকালঃ ৯.৩০ → বিকালঃ ৫.০০ পর্যন্ত <br />( সরকারী ছুটি ব্যতীত )</p>
                        </aside>
                        <aside className={`custom-note note-green ${styles.customNote}`}>
                            <p className="custom-notice">আপনি যদি নতুন আবেদনকারী হন তাহলে শুরুতেই লগইনের জন্য রেজিস্ট্রেশন করুন । <br /><br /> পরবর্তীতে আবেদনের ক্ষেত্রে আপনাকে পুনরায় লগইনের জন্য রেজিস্ট্রেশন করতে হবে না । কেবল ই-মেইল ও পাসওয়ার্ড দিয়ে সরাসরি প্রবেশ করতে পারবেন । </p>
                        </aside>
                    </div>
                    <div className="col-md-4">
                        <div className={`login-container ${styles.loginContainer}`}>
                            <div className="login-logo">
                                <img src="assets/images/logo3.png" alt="Logo" />
                            </div>
                            <div className="d-flex  justify-content-between">
                                <h6>ইমেইল ভেরিফিকেশন</h6>

                            </div>
                            <form onSubmit={handleSubmit} className={`login-form ${styles.loginForm}`} action="#" method="post">
                                <input type="text" name="otp" placeholder="ওটিপি দিন" pattern="[0-9]{6}" title="ওটিপি must be 6 digits" required />

                                {error && <p style={{ color: 'red' }}>{error}</p>}

                                <button type="submit" id="submitButton"> সাবমিট </button>
                                <Button
                                    fullWidth
                                    sx={{ margin: '10px' }} // Corrected syntax for setting styles
                                    color="primary"
                                    onClick={handleResendOTP}
                                >
                                    Resend OTP
                                </Button>
                                <Typography sx={{ textAlign: 'center', margin: '0px' }}>
                                    Your Email is {myuser ? myuser : ''}
                                </Typography>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
