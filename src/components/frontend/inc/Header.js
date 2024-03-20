import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/">
                    <img className src="assets/images/logo3.png" alt="Logo" />
                  </Link> 
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                      
                        <Link className="page-scroll" to="/">হোম পেইজ</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="copyright">কপিরাইট অফিস</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="rules">রেজিস্ট্রেশনের নিয়মাবলি</Link>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="format.html">পূরণকৃত ফরম ও নমুনা</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="document.html">সংযুক্তির নমুনা</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="faq.html">জিজ্ঞাসা</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="contact.html">যোগাযোগ</a>
                      </li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="login.html" className="btn white-bg mouse-dir">প্রবেশ করুন <span className="dir-part" /></a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
