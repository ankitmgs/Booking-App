import React from "react";
import Footer from "../components/Footer";

const Booking = () => {
  return (
    <>
      <section className="w3l-booking-top">
        <div className="booking-form-61">
          <div className="container">
            <div className="booking-top-gds">
              <div className="booking-forms-16-info align-self">
                <h5>Your Reservation</h5>
                <h3 className="title-big">
                  Select the Room, check for availability and book it.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                  aperiam sequi optio consectetur adipisicing elit Ea
                  consequuntur illum.
                </p>
              </div>
              <div className="form-right-inf">
                <div className="booking-form-content">
                  <h6>Book Now</h6>
                  <form
                    action="#"
                    className="book-depature-6 signin-form"
                    method="post"
                  >
                    <div className="d-grid grid-col-2">
                      <div className="hny-frm_grid">
                        <h5>Name</h5>
                        <input
                          className="name"
                          name="Text"
                          type="text"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="hny-frm_grid">
                        <h5>Phone Number</h5>
                        <input
                          className="phone"
                          name="Text"
                          type="phone"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                      <div className="hny-frm_grid">
                        <h5>Check-in Date</h5>
                        <input
                          className="date"
                          name="Text"
                          type="date"
                          placeholder="Date"
                          required=""
                        />
                      </div>
                      <div className="hny-frm_grid">
                        <h5>Check-out Date</h5>
                        <input
                          className="date"
                          name="Text"
                          type="date"
                          placeholder="Date"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="d-grid grid-col-2 mt-3">
                      <div className="hny-frm_grid">
                        <h5>Adults</h5>
                        <select id="category1" name="category1" required="">
                          <option value="category1">01</option>
                          <option value="category2">02</option>
                          <option value="category3">03</option>
                          <option value="category4">04</option>
                          <option value="category2">05</option>
                          <option value="category3">06</option>
                        </select>
                      </div>
                      <div className="hny-frm_grid">
                        <h5>Children</h5>
                        <select id="category1" name="category1" required="">
                          <option value="category1">01</option>
                          <option value="category2">02</option>
                          <option value="category3">03</option>
                          <option value="category4">04</option>
                          <option value="category2">05</option>
                          <option value="category3">06</option>
                        </select>
                      </div>
                    </div>
                    <button className="btn btn-style btn-secondary book mt-3">
                      Book Now
                    </button>
                    <p className="already">You are booking as guest.</p>
                  </form>
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

export default Booking;
