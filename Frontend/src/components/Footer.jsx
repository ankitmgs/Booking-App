import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row footer-top-29">
              <div className="col-lg-3 col-md-6 col-sm-8 footer-list-29 footer-1">
                <h6 className="footer-title-29">Contact Us</h6>
                <ul>
                  <li>
                    <p>
                      <span className="fa fa-map-marker"></span> Luxury hotel,
                      #32841 block, #221DRS Rental & Paid rooms business, UK.
                    </p>
                  </li>
                  <li>
                    <a href="tel:+7-800-999-800">
                      <span className="fa fa-phone"></span> +(21)-255-999-8888
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://p.w3layouts.com/cdn-cgi/l/email-protection#3b53544f5e57487b565a525715585456"
                      className="mail"
                    >
                      <span className="fa fa-envelope-open-o"></span>
                      <span
                        className="__cf_email__"
                        data-cfemail="97fff8e3f2fbe4d7faf6fefbb9f4f8fa"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-4 footer-list-29 footer-2 mt-sm-0 mt-5">
                <ul>
                  <h6 className="footer-title-29">Useful Links</h6>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About hotels</a>
                  </li>
                  <li>
                    <a href="blog.html"> Blog posts</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-5 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Latest from blog</h6>
                <div className="footer-post mb-4">
                  <a href="blog-single.html">Work Passionately</a>
                  <p className="small">
                    <span className="fa fa-clock-o"></span> March 9, 2020
                  </p>
                </div>
                <div className="footer-post">
                  <a href="blog-single.html">
                    Work Passionately without any hesitation
                  </a>
                  <p className="small">
                    <span className="fa fa-clock-o"></span> March 9, 2020
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Newsletter </h6>
                <p>
                  Enter your email and receive the latest news from us. We'll
                  never share your email address
                </p>

                <form action="#" className="subscribe" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                  <button>
                    <span className="fa fa-envelope-o"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
