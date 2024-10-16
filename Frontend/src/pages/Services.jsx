import React from "react";
import Facilities from "../assets/images/facilities.jpg";
import Slide1 from "../assets/images/slide1.jpg";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.jpg";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <section className="w3l-breadcrumb">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>Our Services</h2>
            <p>
              <NavLink to="/">Home</NavLink> &nbsp; / &nbsp; Services
            </p>
          </div>
        </div>
      </section>
      <section className="w3l-servicesblock1" id="service">
        <div className="features-with-17_sur py-5">
          <div className="container py-lg-5 py-sm-4">
            <div className="features-with-17-top_sur">
              <div className="row">
                <div className="col-lg-4 col-md-6 align-self">
                  <h3 className="title-small">Luxury Hotel Services</h3>
                  <p>
                    Our rooms are beautifully designed and comfortable and can
                    accommodate various groups of travelers. All rooms have
                    private bathrooms, a flat-screen TV and a safe.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                  <div className="features-with-17-right-tp_sur">
                    <div className="features-with-17-left1">
                      <span className="fa fa-bed" aria-hidden="true"></span>
                    </div>
                    <div className="features-with-17-left2">
                      <h5>Fitness Zone</h5>
                      <h6>
                        <a href="#url">Swimming Pool</a>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet elit. Id, minima. It is a
                        long fact that a reader will be distracted by the
                        readable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-sm-5 mt-4">
                  <div className="features-with-17-right-tp_sur">
                    <div className="features-with-17-left1">
                      <span className="fa fa-beer" aria-hidden="true"></span>
                    </div>
                    <div className="features-with-17-left2">
                      <h5>Food & Drinks</h5>
                      <h6>
                        <a href="#url">Restaurant and Bar</a>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet elit. Id, minima. It is a
                        long fact that a reader will be distracted by the
                        readable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-sm-5 mt-4">
                  <div className="features-with-17-right-tp_sur">
                    <div className="features-with-17-left1">
                      <span className="fa fa-wifi" aria-hidden="true"></span>
                    </div>
                    <div className="features-with-17-left2">
                      <h5>Accommodation</h5>
                      <h6>
                        <a href="#url">High speed WiFi</a>{" "}
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet elit. Id, minima. It is a
                        long fact that a reader will be distracted by the
                        readable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-sm-5 mt-4">
                  <div className="features-with-17-right-tp_sur">
                    <div className="features-with-17-left1">
                      <span className="fa fa-bed" aria-hidden="true"></span>
                    </div>
                    <div className="features-with-17-left2">
                      <h5>Comfort & Relax</h5>
                      <h6>
                        <a href="#url">SPA & Wellness</a>{" "}
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet elit. Id, minima. It is a
                        long fact that a reader will be distracted by the
                        readable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-sm-5 mt-4">
                  <div className="features-with-17-right-tp_sur">
                    <div className="features-with-17-left1">
                      <span className="fa fa-headphones" aria-hidden="true"></span>
                    </div>
                    <div className="features-with-17-left2">
                      <h5>Safe & Secure </h5>
                      <h6>
                        <a href="#url">Staff 24/7</a>{" "}
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet elit. Id, minima. It is a
                        long fact that a reader will be distracted by the
                        readable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-stats">
        <div className="main-w3 py-5">
          <div className="container py-lg-3">
            <div className="row align-items-center">
              <div className="col-md-6 title">
                <h3 className="title-big">Our Hotel Facilities</h3>
                <img src={Facilities} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 main-cont-wthree-fea text-center">
                <div className="row">
                  <div className="col-6 pr-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-television"></span>
                      <h3 className="title-spe">Tv</h3>
                      <p> Satellite</p>
                    </div>
                  </div>
                  <div className="col-6 pl-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-motorcycle"></span>
                      <h3 className="title-spe">Bike</h3>
                      <p>Rental</p>
                    </div>
                  </div>
                  <div className="col-6 pr-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-cutlery"></span>
                      <h3 className="title-spe">Food</h3>
                      <p>Included</p>
                    </div>
                  </div>
                  <div className="col-6 pl-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-bed"></span>
                      <h3 className="title-spe">Bed</h3>
                      <p>King size</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-feature-2">
        <div className="grid top-bottom py-5">
          <div className="container py-md-5">
            <h3 className="title-big text-center">
              Our Rooms are beautifully designed
            </h3>
            <div className="middle-section row mt-lg-5 pt-md-3">
              <div className="three-grids-columns col-lg-4 col-md-6">
                <img src={Slide1} alt="" className="img-fluid" />
                <div className="info">
                  <h4>
                    <a href="#url"> Restaurant and Bar</a>
                  </h4>
                  <p>
                    Vestibulum ante ipsum primis in orci luctus et ultrices
                    posuere cubilia Curae; Nulla mollis dapibus nunc.
                  </p>
                  <a href="services.html" className="btn mt-4">
                    Read More{" "}
                  </a>
                </div>
              </div>
              <div className="three-grids-columns col-lg-4 col-md-6 mt-md-0 mt-4">
                <img src={Slide2} alt="" className="img-fluid" />
                <div className="info">
                  <h4>
                    {" "}
                    <a href="#url"> Meetings and Events </a>
                  </h4>
                  <p>
                    Vestibulum ante ipsum primis in orci luctus et ultrices
                    posuere cubilia Curae; Nulla mollis dapibus nunc.
                  </p>
                  <a href="services.html" className="btn mt-4">
                    Read More{" "}
                  </a>
                </div>
              </div>
              <div className="three-grids-columns col-lg-4 col-md-6 mt-lg-0 mt-4">
                <img src={Slide3} alt="" className="img-fluid" />
                <div className="info">
                  <h4>
                    {" "}
                    <a href="#url"> Spa and Wellness </a>
                  </h4>
                  <p>
                    Vestibulum ante ipsum primis in orci luctus et ultrices
                    posuere cubilia Curae; Nulla mollis dapibus nunc.
                  </p>
                  <a href="services.html" className="btn mt-4">
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
