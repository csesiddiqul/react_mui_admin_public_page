import React from 'react';
import { Link } from 'react-router-dom';


export default function Index() {
  return (
    <>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="#">Brand</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/admin'}>Admin</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/register'}>Register</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to={'/auth?mode=login'}>Auth</Link>
              </li>



            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Bootstrap Starter Template</h1>
            <p className="lead">A simple starter layout for Bootstrap</p>
          </div>
        </div>

        <div id="about" className="row">
          <div className="col-lg-12">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, est eu commodo consequat, nulla justo venenatis massa, eget consectetur libero elit vel nisl. Sed ultricies felis quis ultrices dignissim.</p>
          </div>
        </div>

        <div id="contact" className="row">
          <div className="col-lg-12">
            <h2>Contact Us</h2>
            <p>Contact us at example@example.com or call us at +1234567890.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h2>Our Mission</h2>
            <p>Our mission is to provide high-quality products and excellent customer service.</p>
          </div>
          <div className="col-lg-6">
            <h2>Our Vision</h2>
            <p>Our vision is to become a leader in our industry by delivering innovative solutions.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h2>Blog</h2>
            <p>No blog posts available yet.</p>
          </div>
        </div>

      </div>

      {/* Bootstrap JavaScript */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
}
