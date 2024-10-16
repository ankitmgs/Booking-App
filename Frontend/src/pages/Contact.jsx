import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <section className="w3l-breadcrumb">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>Contact Us</h2>
            <p>
              <Link to="/">Home</Link> &nbsp; / &nbsp; Contact
            </p>
          </div>
        </div>
      </section>

      <section className="w3l-contact-1 py-5">
        <div className="contacts-9 py-lg-5 py-sm-4">
          <div className="container">
            <div className="d-grid contact-view">
              <div className="cont-details">
                <p>Get in touch</p>
                <h3 className="title-big">Contact and Access</h3>
              </div>
              <div className="map-content-9">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  tempore sapiente, distinctio perferendis voluptas consequatur
                  quaerat incidunt. Similique, officia! Dolorum fugiat et
                  aliquam necessitatibus quas reiciendis, totam voluptatibus
                  deleniti tempore doloribus.
                </p>
              </div>
            </div>
            <div className="map-iframe my-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: "0px", pointerEvents: "none" }}
                allowFullScreen=""
              ></iframe>
            </div>
            <div className="d-grid contact-view">
              <div className="cont-details">
                <div className="cont-top">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Call Us</h6>
                    <p>
                      <a href="tel:+44 99 555 42">+123 45 67 89</a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Email Us</h6>
                    <p>
                      <a
                        href="https://p.w3layouts.com/cdn-cgi/l/email-protection#5e3b263f332e323b1e333f3732703d3133"
                        className="mail"
                      >
                        <span
                          className="__cf_email__"
                          data-cfemail="54312c35392438311439353d387a373b39"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Address</h6>
                    <p>
                      Address here, 208 Trainer Avenue street, Illinois, UK -
                      62617.
                    </p>
                  </div>
                </div>
              </div>
              <div className="map-content-9 mt-lg-0 mt-4">
                <form
                  action="https://sendmail.w3layouts.com/submitForm"
                  method="post"
                >
                  <div className="twice-two">
                    <input
                      type="text"
                      className="form-control"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Name"
                      required=""
                    />
                    <input
                      type="email"
                      className="form-control"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="twice">
                    <input
                      type="text"
                      className="form-control"
                      name="w3lSubject"
                      id="w3lSubject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <textarea
                    name="w3lMessage"
                    className="form-control"
                    id="w3lMessage"
                    placeholder="Message"
                    required=""
                  ></textarea>
                  <button type="submit" className="btn btn-contact">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
