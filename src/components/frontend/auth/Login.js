import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.css';
import { Home, HowToReg } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { postApi } from '../../../service/ApiService';
import { toast } from 'react-toastify';
import { loginUser } from '../../redux/features/authSlice';

export default function UserLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const { error, message, } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const togglePassword = () => {
        setShowPassword(!showPassword);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const res = await dispatch(loginUser(formData));

            if (res.payload.token) {
                window.location.reload();
                navigate('/admin')
                toast.success("Login Successfully");
            }


        } catch (error) {
            console.error('An error occurred:', error);

        } finally {

        }

    };


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
                                <h6>লগইন করুন</h6>
                                <Link className to="/"> <Home /> হোম পেইজ</Link>

                            </div>
                            <form onSubmit={handleSubmit} className={`login-form ${styles.loginForm}`} action="#" method="post">
                                <input type="text" name="email" placeholder="আপনার ইমেইল দিন" required />
                                {error && (
                                    <p style={{ color: 'red', float: 'left' }}>
                                        {error.startsWith('Email') ? 'Email is incorrect' : ''}
                                    </p>
                                )}


                                <div className={`password-container ${styles.passwordContainer}`}>
                                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="পাসওয়ার্ড সেট করুন" required />
                                    <span className="show-password" onClick={togglePassword}>👁️</span>
                                </div>


                                {error && (
                                    <p style={{ color: 'red', float: 'left' }}>
                                        {error.startsWith('Password') ? 'Password is incorrect' : ''}
                                    </p>
                                )}


                                <button type="submit" id="submitButton"> লগইন করুন </button>

                                <div className="d-flex mt-1 justify-content-between">
                                    <Link to="/register" className="register-link mr-2"><HowToReg /> রেজিস্ট্রেশন করুন</Link>
                                    <Link to="/forgotPassword" className="forgot-password"> পাসওয়ার্ড ভুলে গেছেন ?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
