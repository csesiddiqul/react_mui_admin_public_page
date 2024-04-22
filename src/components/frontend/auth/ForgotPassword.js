import React, { useEffect, useState } from 'react';
import styles from './Login.css';
import { postApi } from '../../../service/ApiService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';


export default function UserLogin() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        if (!email.trim()) {
            toast.error("Please enter Email");
            return;
        }
        setLoading(true);
        sendLinkEmail(email);
    };

    const sendLinkEmail = async (email) => {
        try {
            const response = await postApi('/api/forgot-password', { email: email });
            if (response.status === 200) {
                toast.success("Please check your mail we have sent Reset link");
                setError('');
            }
        } catch (error) {
            setError(error.response.data.error);
            console.error('Error sending verification email and handling response:', error.message);
        } finally {
            setLoading(false); // Set loading state to false when request completes
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
                                <h6>ফরগট পাসওয়ার্ড</h6>
                            </div>
                            <div className="d-flex  justify-content-between">
                                <h6>লগইন করুন</h6>
                                <Link className to="/"> <Home /> হোম পেইজ</Link>

                            </div>

                            <form onSubmit={handleSubmit} className={`login-form ${styles.loginForm}`} action="#" method="post">
                                <input type="email" name="email" placeholder="Enter your email address" title="Please enter a valid email address" required />
                                {error && <p style={{ color: 'red', textAlign: 'left' }}>{error}</p>}
                                <button type="submit" disabled={loading} id="submitButton"> {loading ? 'লোডিং ..' : 'সাবমিট'} </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
