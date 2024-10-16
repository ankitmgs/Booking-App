import React from "react";
import Slide1 from "../assets/images/slide1.jpg";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.jpg";
import Slide4 from "../assets/images/slide4.jpg";
import Rs1 from "../assets/images/rs1.jpg";
import Rs2 from "../assets/images/rs2.jpg";
import Facilities from "../assets/images/facilities.jpg";
import Footer from "../components/Footer";

const RoomSingle = () => {
  return (
    <>
      <section className="room-single-block">
        <div className="content-with-slider">
          <div className="container">
            <div className="content-photo-1 d-grid">
              <div className="content-photo-left text-center">
                <h4>Luxury Hotel</h4>
                <h6>Double Bed Rooom</h6>
                <div className="border-line">
                  <div className="bg">
                    <span className="price">$ 240</span>
                    <p> Per night</p>
                  </div>
                  <div className="book-btn px-2">
                    <a
                      href="booking.html"
                      className="btn btn-style btn-secondary mt-3"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                <ul className="room-amenities">
                  <li>
                    <a href="#url">
                      <span className="fa fa-beer"></span> MiniBar
                    </a>
                  </li>
                  <li>
                    <a href="#url">
                      <span className="fa fa-users"></span> 2 Guests
                    </a>
                  </li>
                  <li>
                    <a href="#url">
                      <span className="fa fa-bed"></span> Double Bed
                    </a>
                  </li>
                </ul>
                <a href="room.html" className="back">
                  {" "}
                  <span className="fa fa-long-arrow-left"></span> Back to all rooms
                </a>
              </div>
              <div className="content-photo-right">
                <div className="csslider infinity" id="slider1">
                  <input
                    type="radio"
                    name="slides"
                    checked="checked"
                    id="slides_1"
                  />
                  <input type="radio" name="slides" id="slides_2" />
                  <input type="radio" name="slides" id="slides_3" />
                  <input type="radio" name="slides" id="slides_4" />
                  <ul className="banner_slide_bg">
                    <li>
                      <img className="img" src={Slide1} alt="" />
                    </li>
                    <li>
                      <img className="img" src={Slide4} alt="" />
                    </li>
                    <li>
                      <img className="img" src={Slide2} alt="" />
                    </li>
                    <li>
                      <img className="img" src={Slide3} alt="" />
                    </li>
                  </ul>
                  <div className="arrows">
                    <label for="slides_1"></label>
                    <label for="slides_2"></label>
                    <label for="slides_3"></label>
                    <label for="slides_4"></label>
                  </div>
                  <div className="navigation">
                    <div>
                      <label for="slides_1"></label>
                      <label for="slides_2"></label>
                      <label for="slides_3"></label>
                      <label for="slides_4"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-roomsingleblock1 py-5">
        <div className="container py-sm-4">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6">
              <img src={Rs1} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <img src={Rs2} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 roomsingle mt-lg-0 mt-4">
              <h3 className="title-small">The Room</h3>
              <p className="roomsingle mt-3">
                Duis nisi sapien, elementum finibus fermentum eget, aliquet leo.
                Mauris hendrerit vel ex. Quisque vitae luctus massa. Phasellus
                sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla.
                Integer ultrices finibus sed nisi. in convallis felis dapibus
                sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-roomsingleblock1 py-5">
        <div className="container py-sm-4">
          <div className="row">
            <div className="col-lg-7 roomsingle">
              <h3 className="title-small">Amenities provided by our hotel</h3>
              <ul className="w3l-right-book mt-4">
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Flat
                    screen TV
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Free
                    high-speed WiFi
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Private
                    Bathroom
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Free
                    parking space
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Early
                    Check-in
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Swimming
                    pool
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Air-conditioning
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Welcome
                    treatment
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Barrier-free rain shower
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Aesop
                    bath amenities
                  </a>
                </li>
                <li>
                  <a hef="#url">
                    <span className="fa fa-check" aria-hidden="true"></span>Bike
                    rental facility
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 mt-lg-0 mt-4">
              <img src={Facilities} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RoomSingle;
