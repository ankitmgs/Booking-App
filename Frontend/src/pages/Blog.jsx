import React from "react";
import { Link } from "react-router-dom";
import Bottom from "../assets/images/bottom.jpg";
import Blog1 from "../assets/images/blog1.jpg";
import Blog2 from "../assets/images/blog2.jpg";
import Blog3 from "../assets/images/blog3.jpg";
import Blog4 from "../assets/images/blog4.jpg";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <section className="w3l-breadcrumb">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>Blog Posts</h2>
            <p>
              <Link to="/">Home</Link> &nbsp; / &nbsp; Blog
            </p>
          </div>
        </div>
      </section>
      <section className="w3l-blog py-5">
        <div className="grid-view py-lg-5 py-sm-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="grids5-info">
                      <a href="blog-single.html" className="d-block zoom">
                        <img
                          src={Blog1}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <h4>
                          <a href="blog-single.html">
                            How to make best holiday with your family
                          </a>
                        </h4>
                        <p className="date">March 10, 2020</p>
                        <p className="blog-text">
                          Lorem ipsum dolor sit amet nostrum ad minus libero
                          fugiat molestiae ullam ipsam quas unde earum!
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-news mt-4"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-md-0 mt-4">
                    <div className="grids5-info">
                      <a href="blog-single.html" className="d-block zoom">
                        <img
                          src={Blog2}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <h4>
                          <a href="blog-single.html">
                            Natural relaxation - Hotel SPA & Wellness
                          </a>
                        </h4>
                        <p className="date">March 11, 2020</p>
                        <p className="blog-text">
                          Lorem ipsum dolor sit amet nostrum ad minus libero
                          fugiat molestiae ullam ipsam quas unde earum!
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-news mt-4"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="grids5-info">
                      <a href="blog-single.html" className="d-block zoom">
                        <img
                          src={Blog3}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <h4>
                          <a href="blog-single.html">
                            How to make best holiday with your family
                          </a>
                        </h4>
                        <p className="date">March 10, 2020</p>
                        <p className="blog-text">
                          Lorem ipsum dolor sit amet nostrum ad minus libero
                          fugiat molestiae ullam ipsam quas unde earum!
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-news mt-4"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="grids5-info">
                      <a href="blog-single.html" className="d-block zoom">
                        <img
                          src={Blog4}
                          alt=""
                          className="img-fluid news-image"
                        />
                      </a>
                      <div className="blog-info">
                        <h4>
                          <a href="blog-single.html">
                            Natural relaxation - Hotel SPA & Wellness
                          </a>
                        </h4>
                        <p className="date">March 11, 2020</p>
                        <p className="blog-text">
                          Lorem ipsum dolor sit amet nostrum ad minus libero
                          fugiat molestiae ullam ipsam quas unde earum!
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-news mt-4"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-lg-0 mt-4">
                <div className="best-rooms bg-transparent">
                  <div className="grids5-info">
                    <div className="blog-info-bg-primary text-center mb-4">
                      <h4>
                        <a href="#follow">
                          Follow our <b>Resort Luxury Hotels</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="grids5-info">
                    <div className="blog-info blog-info-bg-theme-light text-center mb-4">
                      <div className="blog-icon mb-4">
                        <a href="blog-single.html">
                          <span className="fa fa-link"></span>
                        </a>
                      </div>
                      <h4>
                        <a href="blog-single.html">
                          How to make best holiday with your family
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="maghny-gd-1">
                    <div className="maghny-grid">
                      <figure className="effect-lily border-radius">
                        <img className="img-fluid" src={Bottom} />
                        <figcaption className="w3set-hny">
                          <div>
                            <h4>
                              Family Rooms <span> Hotels</span>
                            </h4>
                            <p>
                              <a href="#blog-single.html">Read More</a>{" "}
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="grids5-info mt-4">
                    <a href="blog-single.html" className="d-block zoom">
                      <iframe
                        src="https://player.vimeo.com/video/246941769"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                      ></iframe>
                      <div className="blog-info">
                        <h4>
                          <a href="blog-single.html">Video Post</a>
                        </h4>
                        <p className="date">March 11, 2020</p>
                        <p className="blog-text">
                          Lorem ipsum dolor sit amet nostrum ad minus libero
                          fugiat
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-news mt-4"
                        >
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center mt-sm-5 mt-4 mb-0">
                <li className="page-item disabled">
                  <a
                    className="page-link page-prev"
                    href="#previous"
                    tabindex="-1"
                  >
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link page-number" href="#1">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link page-number" href="#2">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link page-number" href="#3">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link page-next" href="#next">
                    →
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
