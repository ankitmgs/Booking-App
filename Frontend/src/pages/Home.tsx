import React from "react";
import Top from "../assets/images/top.jpg";
import Bottom from "../assets/images/bottom.jpg";
import Room1 from "../assets/images/room1.jpg";
import Room2 from "../assets/images/room2.jpg";
import Room3 from "../assets/images/room3.jpg";
import Room4 from "../assets/images/room4.jpg";
import Room5 from "../assets/images/room5.jpg";
import Logo1 from "../assets/images/logo1.jpg";
import Logo2 from "../assets/images/logo2.jpg";
import Logo3 from "../assets/images/logo3.jpg";
import Logo4 from "../assets/images/logo4.jpg";
import VideoBG from "../assets/images/videobg.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <div className="owl-one owl-carousel owl-theme">
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>
                          Location is heavenly. Best to visit in week days to
                          enjoy the peaceful beauty
                        </h5>
                        <a
                          className="btn btn-style transparent-btn mt-sm-5 mt-4"
                          href="services.html"
                        >
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info  banner-view banner-top1 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>
                          Our new hotels will play a leading role in prompting
                          the world peace.
                        </h5>
                        <a
                          className="btn btn-style transparent-btn mt-sm-5 mt-4"
                          href="services.html"
                        >
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top2 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>
                          Most hotels train their people with the booklets. We
                          take ours to the ballet.
                        </h5>
                        <a
                          className="btn btn-style transparent-btn mt-sm-5 mt-4"
                          href="services.html"
                        >
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top3 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>
                          Good tourism will follow good hotels. Experience our
                          luxury hotel rooms
                        </h5>
                        <Link
                          className="btn btn-style transparent-btn mt-sm-5 mt-4"
                          to="/services"
                        >
                          Our Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-availability-form" id="booking">
        <div className="w3l-availability-form-main py-5">
          <div className="container pt-lg-3 pb-lg-5">
            <div className="forms-top">
              <div className="form-right">
                <div className="form-inner-cont">
                  <h3 className="title-small">Check Availability</h3>
                  <form
                    action="https://p.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/search-results.html"
                    method="post"
                    className="signin-form"
                  >
                    <div className="row book-form">
                      <div className="form-input col-md-4 col-sm-6 mt-3">
                        <label>Check-in Date</label>
                        <input
                          type="date"
                          name=""
                          placeholder="Date"
                          required
                        />
                      </div>
                      <div className="form-input col-md-4 col-sm-6 mt-3">
                        <label>Check-out Date</label>
                        <input
                          type="date"
                          name=""
                          placeholder="Date"
                          required
                        />
                      </div>
                      <div className="form-input col-md-4 col-sm-6 mt-3">
                        <label>Adults</label>
                        <select className="selectpicker">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                        </select>
                      </div>
                      <div className="form-input col-md-4 col-sm-6 mt-3">
                        <label>Children</label>
                        <select className="selectpicker">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                        </select>
                      </div>
                      <div className="form-input col-md-4 col-sm-6 mt-3">
                        <label>Price </label>
                        <input
                          type="text"
                          name=""
                          placeholder="Max Price ($)"
                          required
                        />
                      </div>
                      <div className="bottom-btn col-md-4 col-sm-6 mt-3">
                        <label>Check availability </label>
                        <button className="btn btn-style btn-primary w-100 px-2">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-about py-5">
        <div className="container py-sm-4">
          <div className="row">
            <div className="col-lg-6 about-left mb-md-0 mb-5">
              <h3 className="title-big">Relax in our Resort</h3>
              <h5>We make the best for all our customers.</h5>
              <p className="mt-3">
                Duis nisi sapien, elementum finibus fermentum eget, aliquet leo.
                Mauris hendrerit vel ex. Quisque vitae luctus massa. Phasellus
                sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla.
                Integer ultrices finibus sed nisi. in convallis felis dapibus
                sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Totam, porro! Lorem ipsum dolor sit amet.
              </p>
              <Link
                to="/about"
                className="btn btn-style btn-primary mt-sm-5 mt-4"
              >
                Learn About Us
              </Link>
            </div>
            <div className="col-lg-6 about-right position-relative mt-lg-0 mt-5">
              <img src={Top} alt="" className="img-fluid img-border mt-4" />
              <img
                src={Bottom}
                alt=""
                className="img-fluid position-absolute img-position"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="best-rooms py-5">
        <div className="container py-lg-5 py-sm-4">
          <h3 className="title-big text-center">Best Rooms</h3>
          <div className="ban-content-inf row py-lg-3">
            <div className="maghny-gd-1 col-lg-6">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={Room1} alt="" />
                  <figcaption className="w3set-hny">
                    <div>
                      <h4 className="top-text">
                        Luxury Hotel and Best Resort
                        <span>Peaceful Place to stay</span>
                      </h4>
                      <p>From 20$ </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <Link to="/room-single">Luxury Hotel</Link>
                  </h3>
                  <ul className="mb-3">
                    <li>
                      <span className="fa fa-users"></span> 2 Guests
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> Double bed
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> 15sqft
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    recusandae, illum sequi numquam tempora voluptates?
                  </p>
                  <Link
                    to="/booking"
                    className="btn btn-style btn-primary mt-sm-4 mt-3"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
              <div className="row">
                <div className="maghny-gd-1 col-6">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src={Room2} alt="" />
                      <figcaption>
                        <div>
                          <h4>
                            Family Rooms <span> Resort</span>
                          </h4>
                          <p>From 20$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-6">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src={Room3} alt="" />
                      <figcaption>
                        <div>
                          <h4>
                            Double Rooms <span> Resort</span>
                          </h4>
                          <p>From 20$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-6 mt-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src={Room4} alt="" />
                      <figcaption>
                        <div>
                          <h4>
                            Luxury Rooms <span> Resort</span>
                          </h4>
                          <p>From 20$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-6 mt-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src={Room5} alt="" />
                      <figcaption>
                        <div>
                          <h4>
                            Resort Rooms <span> Resort</span>
                          </h4>
                          <p>From 20$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w3l-index3">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row">
              <div className="col-lg-6 left-wthree-img text-righ">
                <div className="position-relative">
                  <img src={VideoBG} alt="" className="img-fluid" />
                  <a
                    href="#small-dialog"
                    className="popup-with-zoom-anim play-view text-center position-absolute"
                  >
                    <span className="video-play-icon">
                      <span className="fa fa-play"></span>
                    </span>
                  </a>
                  {/* <!-- dialog itself, mfp-hide class is required to make dialog hidden --> */}
                  <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                    <iframe
                      src="https://player.vimeo.com/video/246941769"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self">
                <h6>Discover our Locations</h6>
                <h3 className="title-big">
                  20 Years of Hotels and Resort Experience
                </h3>
                <p className="mt-3">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel.
                </p>
                <ul className="w3l-right-book mt-4">
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>We
                    make the best for all our customers
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Follow our Resort Luxury Hotels
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Luxury hotels and best resorts
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Double rooms and family rooms
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Enjoy a luxury experience
                  </li>
                </ul>
                <Link to="/about" className="btn btn-style btn-primary mt-4">
                  Check all packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quotation py-5">
        <div className="container py-xl-5 py-lg-3">
          <div className="welcome-left text-center py-md-5 py-3">
            <h3>
              Enjoy a Luxury experience. Discover our locaions. Relax and enjoy
              your holiday
            </h3>
            <Link
              to="/booking"
              className="btn btn-style transparent-btn mt-sm-5 mt-4 mr-2"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="btn btn-style btn-primary mt-sm-5 mt-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <section className="w3l-logos py-5">
        <div className="container py-lg-3">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view">
              <img src={Logo1} alt="company-logo" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view">
              <img src={Logo2} alt="company-logo" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-sm-0 mt-4">
              <img src={Logo3} alt="company-logo" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-md-0 mt-4">
              <img src={Logo4} alt="company-logo" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-lg-0 mt-4">
              <img src={Logo2} alt="company-logo" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-lg-0 mt-4">
              <img src={Logo1} alt="company-logo" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
