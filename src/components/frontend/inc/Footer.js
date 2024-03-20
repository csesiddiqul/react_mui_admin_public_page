<<<<<<< HEAD
import React from 'react'

export default function Footer() {
  return (
    <div>Footer</div>
  )
=======
import React from 'react';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import { FacebookRounded, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

export default function Footer() {
  return (
    <div>
      <footer className="footer mt-5">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="f-about single-footer">
                  <div className="logo">
                    <a href="index.html"><img src="assets/images/logo3.png" alt="#" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-end col-md-12 col-12">
                <div className="f-about single-footer">
                  <div className="footer-social">
                    <ul>
                      <li><a href="#"><FacebookRounded /></a></li>
                      <li><a href="#"><Twitter /></a></li>
                      <li><a href="#"><LinkedIn /></a></li>
                      <li><a href="#"><YouTube /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-12 col-md-12 text-center col-12">
                  <div className="left">
                    <p>Developed by -<a href="https://www.ipsitasoft.com/" rel="nofollow" target="_blank">IPSITA COMPUTERS PTE LTD.</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
>>>>>>> apurbo
}
