import React from "react";
import { Link } from "react-router-dom";
import About1 from "../assets/images/about1.jpg";
import About2 from "../assets/images/about2.jpg";
import About3 from "../assets/images/about3.jpg";
import Blog1 from "../assets/images/blog1.jpg";
import Blog2 from "../assets/images/blog2.jpg";
import Blog3 from "../assets/images/blog3.jpg";
import Footer from "../components/Footer";

const Rooms = () => {
  return (
    <>
      <section className="w3l-breadcrumb">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>Rooms</h2>
            <p>
              <Link to="/">Home</Link> &nbsp; / &nbsp; rooms
            </p>
          </div>
        </div>
      </section>

      <div className="best-rooms w3l-blog py-5">
        <div className="container py-lg-5 py-sm-4">
          <div className="ban-content-inf row">
            <div className="maghny-gd-1 col-lg-4 col-md-6">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={About1} alt="" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        Luxury Hotel room
                        <ul>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star-o"></span>
                          </li>
                        </ul>
                      </h4>
                      <p>Book for 20$ </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <Link to="#url">Luxury Hotel</Link>
                  </h3>
                  <ul className="mb-3">
                    <li>
                      <span className="fa fa-users"></span> 2 Guests
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> 15sqft
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor, sit amet elit. Omnis illum sequi,
                    tenetur.
                  </p>
                  <Link to="/booking" className="btn mt-sm-4 mt-3">
                    Book Now
                  </Link>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <Link to="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-television"
                            title="Television"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-bath"
                            title="Private Bathroom"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-motorcycle"
                            title="Bike Rental"
                          ></span>
                        </Link>
                      </li>
                    </ul>
                    <Link to="/room-single" className="btn view">
                      Full Info →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="maghny-gd-1 col-lg-4 col-md-6 mt-md-0 mt-4">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={Blog3} alt="" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        Luxury Hotel room
                        <ul>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star-o"></span>
                          </li>
                        </ul>
                      </h4>
                      <p>Book for 20$ </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <Link to="#url">Luxury Hotel</Link>
                  </h3>
                  <ul className="mb-3">
                    <li>
                      <span className="fa fa-users"></span> 2 Guests
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> 15sqft
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor, sit amet elit. Omnis illum sequi,
                    tenetur.
                  </p>
                  <Link to="/booking" className="btn mt-sm-4 mt-3">
                    Book Now
                  </Link>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <Link to="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-television"
                            title="Television"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-bath"
                            title="Private Bathroom"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-motorcycle"
                            title="Bike Rental"
                          ></span>
                        </Link>
                      </li>
                    </ul>
                    <Link to="/room-single" className="btn view">
                      Full Info →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="maghny-gd-1 col-lg-4 col-md-6 mt-md-0 mt-4">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={About3} alt="" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        Luxury Hotel room
                        <ul>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star-o"></span>
                          </li>
                        </ul>
                      </h4>
                      <p>Book for 20$ </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <Link to="#url">Luxury Hotel</Link>
                  </h3>
                  <ul className="mb-3">
                    <li>
                      <span className="fa fa-users"></span> 2 Guests
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> 15sqft
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor, sit amet elit. Omnis illum sequi,
                    tenetur.
                  </p>
                  <Link to="/booking" className="btn mt-sm-4 mt-3">
                    Book Now
                  </Link>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <Link to="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-television"
                            title="Television"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-bath"
                            title="Private Bathroom"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-motorcycle"
                            title="Bike Rental"
                          ></span>
                        </Link>
                      </li>
                    </ul>
                    <Link to="/room-single" className="btn view">
                      Full Info →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="maghny-gd-1 col-lg-4 col-md-6 mt-md-5 mt-4">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={Blog1} alt="" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        Luxury Hotel room
                        <ul>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star-o"></span>
                          </li>
                        </ul>
                      </h4>
                      <p>Book for 20$ </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <Link to="#url">Luxury Hotel</Link>
                  </h3>
                  <ul className="mb-3">
                    <li>
                      <span className="fa fa-users"></span> 2 Guests
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> 15sqft
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor, sit amet elit. Omnis illum sequi,
                    tenetur.
                  </p>
                  <Link to="/booking" className="btn mt-sm-4 mt-3">
                    Book Now
                  </Link>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <Link to="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-television"
                            title="Television"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-bath"
                            title="Private Bathroom"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-motorcycle"
                            title="Bike Rental"
                          ></span>
                        </Link>
                      </li>
                    </ul>
                    <Link to="/room-single" className="btn view">
                      Full Info →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="maghny-gd-1 col-lg-4 col-md-6 mt-5">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={Blog2} alt="" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        Luxury Hotel room
                        <ul>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star-o"></span>
                          </li>
                        </ul>
                      </h4>
                      <p>Book for 20$ </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <Link to="#url">Luxury Hotel</Link>
                  </h3>
                  <ul className="mb-3">
                    <li>
                      <span className="fa fa-users"></span> 2 Guests
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> 15sqft
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor, sit amet elit. Omnis illum sequi,
                    tenetur.
                  </p>
                  <Link to="/booking" className="btn mt-sm-4 mt-3">
                    Book Now
                  </Link>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <Link to="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-television"
                            title="Television"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-bath"
                            title="Private Bathroom"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-motorcycle"
                            title="Bike Rental"
                          ></span>
                        </Link>
                      </li>
                    </ul>
                    <Link to="/room-single" className="btn view">
                      Full Info →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="maghny-gd-1 col-lg-4 col-md-6 mt-5">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={About2} alt="" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        Luxury Hotel room
                        <ul>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star-o"></span>
                          </li>
                        </ul>
                      </h4>
                      <p>Book for 20$ </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <Link to="#url">Luxury Hotel</Link>
                  </h3>
                  <ul className="mb-3">
                    <li>
                      <span className="fa fa-users"></span> 2 Guests
                    </li>
                    <li>
                      <span className="fa fa-bed"></span> 15sqft
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor, sit amet elit. Omnis illum sequi,
                    tenetur.
                  </p>
                  <Link to="/booking" className="btn mt-sm-4 mt-3">
                    Book Now
                  </Link>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <Link to="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-television"
                            title="Television"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-bath"
                            title="Private Bathroom"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#url">
                          <span
                            className="fa fa-motorcycle"
                            title="Bike Rental"
                          ></span>
                        </Link>
                      </li>
                    </ul>
                    <Link to="/room-single" className="btn view">
                      Full Info →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-5 mb-0">
              <li className="page-item disabled">
                <Link
                  className="page-link page-prev"
                  to="#previous"
                  tabIndex="-1"
                >
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link page-number" to="#1">
                  1
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link page-number" to="#2">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link page-number" to="#3">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link page-next" to="#next">
                  →
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
