<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD

=======
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
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
<<<<<<< HEAD

              <li className="nav-item">
                <Link className="nav-link" to={'/register'}>Register</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to={'/auth?mode=login'}>Auth</Link>
              </li>



=======
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
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
=======
import React, { useState, useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';

export default function Index() {
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    imagesLoaded('.grid', function () {
      const elem = document.querySelector('.grid');
      const iso = new Isotope(elem, {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
        },
      });

      const filterButtons = document.querySelectorAll('.portfolio-btn');
      filterButtons.forEach((button) =>
        button.addEventListener('click', () => {
          const filterValue = button.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
          setActiveFilter(filterValue);
        })
      );

      return () => {
        filterButtons.forEach((button) =>
          button.removeEventListener('click', () => {})
        );
      };
    });
  }, []);




  return (
    <section className="portfolio-section mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
          <div className="portfolio-btn-wrapper wow" data-wow-delay=".4s">
            <button className={`portfolio-btn ${activeFilter === '*' ? 'active' : ''}`} data-filter="*">সকল কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.sahitto' ? 'active' : ''}`} data-filter=".sahitto">সাহিত্য কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.songit' ? 'active' : ''}`} data-filter=".songit">সংগীত কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.silpo' ? 'active' : ''}`} data-filter=".silpo">শিল্প কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.record' ? 'active' : ''}`} data-filter=".record">রেকর্ড কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.cholochitro' ? 'active' : ''}`} data-filter=".cholochitro">চলচ্চিত্র কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.nattho' ? 'active' : ''}`} data-filter=".nattho">নাট্য কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.software' ? 'active' : ''}`} data-filter=".software">সফ্‌ট-ওয়্যার কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.telivision' ? 'active' : ''}`} data-filter=".telivision">টেলিভিশন সম্প্রচার কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.betar' ? 'active' : ''}`} data-filter=".betar">বেতার সম্প্রচার কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.website' ? 'active' : ''}`} data-filter=".website">ওয়েবসাইট, ই-মেইল কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.telivision' ? 'active' : ''}`} data-filter=".telivision">টেলিভিশন সম্প্রচার কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.betar' ? 'active' : ''}`} data-filter=".betar">বেতার সম্প্রচার কর্ম</button>
            <button className={`portfolio-btn ${activeFilter === '.website' ? 'active' : ''}`} data-filter=".website">ওয়েবসাইট, ই-মেইল কর্ম</button>
          </div>

          </div>
        </div>
        <div className="row grid">
        <div className="row grid">
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item sahitto">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".3s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img1.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>সাহিত্য কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>সাহিত্য কর্ম</h5></a>
              </div>  
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item songit">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".4s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img2.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>সংগীত কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>সংগীত কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item silpo">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".5s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img3.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>শিল্প কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>শিল্প কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item record">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".6s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img4.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>রেকর্ড কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>রেকর্ড কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item cholochitro">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".7s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img5.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>চলচ্চিত্র কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>চলচ্চিত্র কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item nattho">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img6.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>নাট্য কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>নাট্য কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item software">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img7.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>সফ্‌ট-ওয়্যার কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>সফ্‌ট-ওয়্যার কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item telivision">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img8.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>টেলিভিশন সম্প্রচার কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>টেলিভিশন সম্প্রচার কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item betar">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img9.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>বেতার সম্প্রচার কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>বেতার সম্প্রচার কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item website">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img10.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>ওয়েবসাইট, ই-মেইল কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>ওয়েবসাইট, ই-মেইল কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item telivision">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img8.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>টেলিভিশন সম্প্রচার কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>টেলিভিশন সম্প্রচার কর্ম</h5></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 grid-item betar">
              <div className="card lormolist shadow-sm mb-4">
                <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                  <div className="portfolio-img">
                    <img src="assets/images/kormo/img9.jpg" alt />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>বেতার সম্প্রচার কর্ম</h4>
                      <p>বাংলাদেশ কপিরাইট অফিস </p>
                      <a href="details.html" className="theme-btn border-btn">বিস্তারিত দেখুন</a>
                    </div>
                  </div>
                </div>
                <a className="m-auto buttonn my-3" href="details.html"><h5 className>বেতার সম্প্রচার কর্ম</h5></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> apurbo
  );
}
