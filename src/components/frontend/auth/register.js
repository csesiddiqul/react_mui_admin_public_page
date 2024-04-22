import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.css';
import { Home, HowToReg } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { postApi } from '../../../service/ApiService';
import { toast } from 'react-toastify';
import { loginUser } from '../../redux/features/authSlice';
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [captchaValue, setCaptchaValue] = useState(null);
    const [caperor, setCapError] = useState(null);
    const [emailerr, setEmailerr] = useState(null);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        console.log(
            value
        )
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            if (!captchaValue) {
                setCapError('Please complete the reCAPTCHA verification.')
            }

            const res = await postApi('/api/register', values);

            if (res.data.token) {

                navigate('/login');
                toast.success("Registration Successfully! Please login to continue.");
            }


        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Extract error message from the response
                const errorMessage = error.response.data.message;
                console.error('An error occurred:', errorMessage);
                // Handle the error message as needed (e.g., display it to the user)
                setEmailerr(errorMessage);
            } else {
                console.error('An error occurred:', error);
            }
        } finally {
            setSubmitting(false);
        }
    };



    const validationSchema = Yup.object().shape({
        name: Yup.string().required('আপনার নাম অবশ্যই লিখতে হবে'),
        enname: Yup.string().required('Your English Name is required'),
        email: Yup.string().email('একটি বৈধ ইমেইল প্রদান করুন').required('আপনার ইমেইল অবশ্যই লিখতে হবে'),
        password: Yup.string().required('পাসওয়ার্ড অবশ্যই লিখতে হবে'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'পাসওয়ার্ড মেলে না')
            .required('পাসওয়ার্ড নিশ্চিত করতে হবে'),
        cell: Yup.string()
            .matches(/^(?:\+?88)?01[13-9]\d{8}$/, 'বাংলাদেশী মোবাইল নম্বর প্রদান করুন')
            .required('মোবাইল নম্বর অবশ্যই লিখতে হবে'),
        // captcha: Yup.string().required('Please complete the reCAPTCHA verification.')
    });

    return (
        <div>
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className={`login-container ${styles.loginContainer}`}>
                            <div className="login-logo">
                                <img src="assets/images/logo3.png" alt="Logo" />
                            </div>
                            <div className="d-flex  justify-content-between">
                                <h6>রেজিস্ট্রেশন করুন</h6>
                                <Link className to="/"> <Home /> হোম পেইজ</Link>
                            </div>
                            <Formik
                                initialValues={{
                                    name: '',
                                    enname: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    cell: '',
                                    captcha: ''
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form className={`login-form ${styles.loginForm}`}>
                                        <Field type="text" name="name" placeholder="আপনার নাম" />
                                        <ErrorMessage name="name" component="div" className="error-message" style={{ color: 'red' }} />

                                        <Field type="text" name="enname" placeholder="Your English Name" />
                                        <ErrorMessage name="enname" component="div" className="error-message" style={{ color: 'red' }} />

                                        <Field type="email" name="email" placeholder="আপনার ইমেইল দিন" />
                                        <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red' }} />
                                        <p className="error-message" style={{ color: 'red' }}>
                                            {emailerr}
                                        </p>


                                        <Field type={showPassword ? "text" : "password"} name="password" placeholder="পাসওয়ার্ড সেট করুন" />
                                        <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red' }} />

                                        <Field type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="পাসওয়ার্ড নিশ্চিত করুন" />
                                        <ErrorMessage name="confirmPassword" component="div" className="error-message" style={{ color: 'red' }} />

                                        <Field type="tel" name="cell" placeholder="মোবাইল নম্বর" />
                                        <ErrorMessage name="cell" component="div" className="error-message" style={{ color: 'red' }} />

                                        <ReCAPTCHA
                                            sitekey="6Ld-zaopAAAAAH1f_JvgZJDCRt9QDndPXrk_cKEe"
                                            onChange={handleCaptchaChange}
                                        />
                                        <p className="error-message" style={{ color: 'red' }}>
                                            {caperor}
                                        </p>
                                        {/* 
                                        <ErrorMessage name="captcha" component="div"  className="error-message" style={{ color: 'red' }} /> */}

                                        <button type="submit" disabled={isSubmitting} id="submitButton">
                                            সাবমিট
                                        </button>
                                        <div className="d-flex mt-1 justify-content-between">
                                            <Link to="/login" className="register-link mr-2"><HowToReg />
                                                লগইন করুন </Link>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
