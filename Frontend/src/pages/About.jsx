import React from "react";
import About1 from "../assets/images/about1.jpg";
import About2 from "../assets/images/about2.jpg";
import About3 from "../assets/images/about3.jpg";
import Team1 from "../assets/images/team1.jpg";
import Team2 from "../assets/images/team2.jpg";
import Team3 from "../assets/images/team3.jpg";
import Team4 from "../assets/images/team4.jpg";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="w3l-breadcrumb">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>About Us</h2>
            <p>
              <NavLink to="/">Home</NavLink> &nbsp; / &nbsp; About
            </p>
          </div>
        </div>
      </section>
      <div className="w3l-about-us best-rooms py-5">
        <div className="container py-lg-5 py-sm-4">
          <div className="maghny-gd-1">
            <div className="row about-text">
              <div className="col-lg-6">
                <h3 className="title-big">
                  Best luxury Hotel in London since 2000. Our hotel has been
                  present for over 20 years.
                </h3>
              </div>
              <div className="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  tempore sapiente, distinctio perferendis voluptas consequatur
                  quaerat incidunt. Similique, officia! Dolorum fugiat et
                  aliquam necessitatibus quas reiciendis, totam voluptatibus
                  deleniti tempore doloribus dolor modi, ab facilis quam
                  officiis ipsam doloremque.
                </p>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus veritatis incidunt iste totam, consequuntur minus
                  assumenda commodi sint asperiores. Voluptatibus incidunt
                  alias.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="maghny-gd-1 col-lg-4 col-md-6">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={About1} />
                    <figcaption className="w3set-hny">
                      <div>
                        <h4>
                          Top Restaurant <span> Hotels</span>
                        </h4>
                        <p>Breakfast and Dinner</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="maghny-gd-1 col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={About2} />
                    <figcaption className="w3set-hny">
                      <div>
                        <h4>
                          Spa and Wellness <span> Hotels</span>
                        </h4>
                        <p>Open Daily </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="maghny-gd-1 col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={About3} />
                    <figcaption className="w3set-hny">
                      <div>
                        <h4>
                          Best Luxury Rooms <span> Hotels</span>
                        </h4>
                        <p>Cool view </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w3-about-2" id="features">
        <div className="w3-services-ab py-5">
          <div className="container py-lg-4 py-md-3">
            <div className="title-section">
              <div className="title-line"></div>
            </div>
            <div className="row w3-services-grids">
              <div className="col-lg-9 w3-services-right-grid pl-lg-5 mx-auto">
                <h4 className="mb-md-5 mb-4">
                  Doing the right thing, at the right time
                </h4>
                <div className="fea-gd-vv row">
                  <div className="col-md-6">
                    <div className="float-lt feature-gd">
                      <div className="icon">
                        {" "}
                        <span
                          className="fa fa-file-text-o"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Welcome Drink</h5>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur
                          adipisicingelit, sed eiusmod tempor incididunt{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4">
                    <div className="float-mid feature-gd">
                      <div className="icon">
                        {" "}
                        <span
                          className="fa fa-trophy"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Bike Rental</h5>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur
                          adipisicingelit, sed eiusmod tempor incididunt{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 pt-md-2">
                    <div className="float-rt feature-gd">
                      <div className="icon">
                        {" "}
                        <span className="fa fa-clone" aria-hidden="true"></span>
                      </div>
                      <div className="icon-info">
                        <h5>WIFI Areas</h5>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur
                          adipisicingelit, sed eiusmod tempor incididunt{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 pt-md-2">
                    <div className="float-lt feature-gd">
                      <div className="icon">
                        {" "}
                        <span
                          className="fa fa-bullseye"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="icon-info">
                        <h5>Swimming Pool</h5>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur
                          adipisicingelit, sed eiusmod tempor incididunt{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team py-5" id="team">
        <div className="container py-lg-4 py-sm-3">
          <h3 className="title-big text-center mb-md-5 mb-4">Our Team</h3>
          <div className="row inner-sec-w3layouts-w3pvt-lauinfo">
            <div className="col-md-3 col-6">
              <div className="team-grids text-center">
                <img src={Team1} className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>John Doe</h4>
                    <h6>Founder and CEO</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="team-grids text-center">
                <img src={Team2} className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>Alexander</h4>
                    <h6>Partner & co-founder</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-4">
              <div className="team-grids text-center">
                <img src={Team3} className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>Martin ker </h4>
                    <h6>Chairmen</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-4">
              <div className="team-grids text-center">
                <img src={Team4} className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>Elizabeth </h4>
                    <h6>Manager</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-stats">
        <div className="main-w3 py-5">
          <div className="container py-lg-3">
            <div className="row align-items-center">
              <div className="col-lg-6 title">
                <h3 className="title-big">
                  We have a great funfact! Relax & Enjoy your Holiday
                </h3>
                <p className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nemo, soluta impedit. Consequatur, quasi mollitia? Adipisci
                  exercitationem amet dolore expedita repudiandae voluptatem
                  impedit ipsa vero repellendus? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Odio molestiae ex aut possimus
                  atque explicabo nostrum recusandae ab quisquam at!
                </p>
              </div>
              <div className="col-lg-6 main-cont-wthree-fea text-center">
                <div className="row">
                  <div className="col-6 pr-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-users"></span>
                      <h3 className="title-spe">1200+</h3>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-6 pl-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-camera"></span>
                      <h3 className="title-spe">18k+</h3>
                      <p>Luxury Rooms</p>
                    </div>
                  </div>
                  <div className="col-6 pr-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-briefcase"></span>
                      <h3 className="title-spe">158</h3>
                      <p>Employers</p>
                    </div>
                  </div>
                  <div className="col-6 pl-2 mt-4">
                    <div className="grids-speci1">
                      <span className="fa fa-comments"></span>
                      <h3 className="title-spe">879+</h3>
                      <p>Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-testimonials">
        <div className="testimonials py-5">
          <div className="container text-center py-lg-3">
            <div className="heading text-center mx-auto">
              <h3 className="title-big text-center">Our Testimonials</h3>
            </div>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="owl-testimonial owl-carousel owl-theme">
                  <div className="item">
                    <div className="slider-info mt-lg-4 mt-3">
                      <div className="img-circle">
                        <img
                          src={Team1}
                          className="img-fluid rounded"
                          alt="client image"
                        />
                      </div>
                      <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea sit id accusantium officia quod quasi necessitatibus
                        perspiciatis Harum error provident quibusdam tenetur.
                      </div>
                      <div className="name">- Johnson</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slider-info mt-lg-4 mt-3">
                      <div className="img-circle">
                        <img
                          src={Team2}
                          className="img-fluid rounded"
                          alt="client image"
                        />
                      </div>
                      <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea sit id accusantium officia quod quasi necessitatibus
                        perspiciatis Harum error provident quibusdam tenetur.
                      </div>
                      <div className="name">- Alexander</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slider-info mt-lg-4 mt-3">
                      <div className="img-circle">
                        <img
                          src={Team3}
                          className="img-fluid rounded"
                          alt="client image"
                        />
                      </div>
                      <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea sit id accusantium officia quod quasi necessitatibus
                        perspiciatis Harum error provident quibusdam tenetur.
                      </div>
                      <div className="name">- Smith roy</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slider-info mt-lg-4 mt-3">
                      <div className="img-circle">
                        <img
                          src={Team4}
                          className="img-fluid rounded"
                          alt="client image"
                        />
                      </div>
                      <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea sit id accusantium officia quod quasi necessitatibus
                        perspiciatis Harum error provident quibusdam tenetur.
                      </div>
                      <div className="name">- Elizabeth</div>
                    </div>
                  </div>
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

export default About;
