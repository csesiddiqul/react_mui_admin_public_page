import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postApi } from '../../../service/ApiService';

export default function ResetPasswordComponent() {
  const navigate = useNavigate();

  const [error, setError] = useState();

  // Extracting token and email from URL query string
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('password_confirmation');
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
  
    try {
      const res = await postApi('/api/reset-password', formData);
      if (res.status ===200) {
        navigate('/login');
        toast.success("Password reset successfully");
      }
    } catch (error) {
      // setError('Unable to reset password');
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
                <img src="/assets/images/logo3.png" alt="Logo" />
              </div>
              <div className="d-flex  justify-content-between">
                <h6>রিসেট পাসওয়ার্ড</h6>
              </div>
              <form onSubmit={handleSubmit} className={`login-form ${styles.loginForm}`} action="#" method="post">
                <input type="email" name="email" value={email} placeholder="আপনার ইমেইল দিন" required />
                <input type='hidden' name="token" value={token}/>
                <div className={`password-container ${styles.passwordContainer}`}>
                  <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="পাসওয়ার্ড সেট করুন" required />
                  <span className="show-password" onClick={togglePassword}>👁️</span>
                </div>
                <div className={`password-container ${styles.passwordContainer}`}>
                  <input type={showPassword ? "text" : "password"} name="password_confirmation" id="password" placeholder="কনফার্ম  পাসওয়ার্ড সেট করুন" required />
                </div>
                {error && (
                  <p style={{ color: 'red', float: 'left' }}>
                    {error.startsWith('Password') ? error : ''}
                  </p>
                )}
                <button type="submit" id="submitButton"> সাবমিট </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
