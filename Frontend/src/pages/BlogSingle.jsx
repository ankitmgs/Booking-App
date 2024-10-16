import React from "react";
import Spa from "../assets/images/spa.jpg";
import Slide1 from "../assets/images/slide1.jpg";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.jpg";
import Team1 from "../assets/images/team1.jpg";
import Team2 from "../assets/images/team2.jpg";
import Team3 from "../assets/images/team3.jpg";
import Footer from "../components/Footer";

const BlogSingle = () => {
  return (
    <>
      <section className="singleblock1 py-5">
        <div className="container py-sm-4">
          <div className="row">
            <div className="col-lg-6 singleblock1-left align-self">
              <h3 className="title-big">
                Natural relaxation – <br />
                SPA & Wellness
              </h3>
              <h5>Posted on March 11, 2020</h5>
            </div>
            <div className="col-lg-6 singleblock1-right mt-lg-0 mt-5">
              <img src={Spa} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-blog-post-main">
        <div className="blog-content-inf py-5">
          <div className="container py-lg-4">
            <div className="blog-posthny-info">
              <div className="single-post-image mb-4">
                <div className="post-content">
                  <h3 className="title-small mb-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </h3>
                </div>
              </div>

              <div className="single-post-content">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                  aperiam sequi optio consectetur.Ea consequuntur illum facere
                  aperiam sequi optio consectetur adipisicing elitFuga, suscipit
                  totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit
                  amet,Ea consequuntur illum facere aperiam sequi optio
                  consectetur adipisicing elit..Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. At, corrupti odit? At iure
                  facere, porro repellat officia quas, dolores magnam assumenda
                  soluta odit harum voluptate inventore ipsa maiores fugiat
                  accusamus eos nulla. Iure voluptatibus explicabo officia.
                </p>
                <p className="mb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                  corrupti odit? At iure facere, porro repellat officia quas,
                  dolores magnam assumenda soluta odit harum voluptate inventore
                  ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus
                  explicabo officia.
                </p>
                <blockquote className="blockquote my-5">
                  <div className="icon-quote">
                    <span
                      className="fa fa-quote-left"
                      aria-hidden="true"
                    ></span>
                  </div>
                  Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                  aperiam sequi optio consectetur.Ea consequuntur illum facere
                  aperiam sequi optio consectetur adipisicing elitFuga, suscipit
                  totam animi consequatur.
                  <footer className="blockquote-footer mt-3">
                    Alexander tony
                  </footer>
                </blockquote>
                <p className="mb-4">
                  Excepteur sint occaecat non proident, sunt in culpa quis.
                  Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum
                  fringilla, gravida felis vitae. Phasellus lacinia id, sunt in
                  culpa quis. .{" "}
                </p>

                <p className="mb-4">
                  Excepteur sint occaecat non proident, sunt in culpa quis.
                  Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum
                  fringilla, gravida felis vitae. Phasellus lacinia id, sunt in
                  culpa quis. .{" "}
                </p>
              </div>
              <div className="sing-post-thumb mb-lg-5 mb-4 row">
                <div className="col-sm-6">
                  <a href="#url">
                    <img src={Slide1} className="img-fluid" alt="" />
                  </a>
                </div>
                <div className="col-sm-6 mt-sm-0 mt-3">
                  <a href="#url">
                    <img src={Slide2} className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
              <p className="mt-4">
                Vivamus a ligula quam. Ut blandit eu leo non suscipit.{" "}
                <a href="#" className="use-admin">
                  Anna Delpan
                </a>{" "}
                In interdum ullamcorper dolor eu mattis.Nulla quis lorem
                neque,Nulla quis lorem neque, mattis venenatis lectus.
                <a href="#" className="use-admin">
                  {" "}
                  Delpan Deo
                </a>
                In interdum ullamcorper dolor eu mattis.Nulla quis lorem neque,
                mattis venenatis lectus. Duis feugiat tortor sed.Nulla quis
                lorem neque, mattis venenatis lectus. In interdum ullamcorper
                dolor eu mattis.Nulla quis lorem neque
              </p>

              <ul className="share-post my-5">
                <li>
                  <h4 className="side-title mr-4">Share this post :</h4>
                </li>
                <li>
                  <a href="#link" className="facebook" title="Facebook">
                    <span className="fa fa-facebook" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a href="#link" className="twitter" title="Twitter">
                    <span className="fa fa-twitter" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a href="#link" className="instagram" title="Instagram">
                    <span className="fa fa-instagram" aria-hidden="true"></span>
                  </a>
                </li>
              </ul>

              <nav className="post-navigation row mt-5">
                <div className="post-prev col-md-6">
                  <span className="nav-title">Prev Post </span>
                  <a href="#url" rel="prev">
                    <h5>Lorem ipsum dolor sit amet</h5>
                  </a>
                </div>
                <div className="post-next col-md-6 text-md-right mt-md-0 mt-4">
                  <span className="nav-title">Next Post </span>
                  <a href="#url" rel="next">
                    <h5>Lorem ipsum dolor sit amet</h5>
                  </a>
                </div>
              </nav>

              <div className="author-card author-listhny my-lg-5 my-sm-4">
                <div className="row">
                  <div className="author-left col-sm-3 mb-sm-0 mb-4">
                    <a href="#">
                      <img className="img-fluid" src={Team1} alt=" " />
                    </a>
                  </div>
                  <div className="author-right col-sm-9 position-relative">
                    <h4>
                      <a href="#" className="title-team-28">
                        Gillion Revard
                      </a>
                    </h4>
                    <p className="para-team mb-0">
                      Vivamus a ligula quam. Ut blandit eu leo non
                      suscipit.Nulla quis lorem neque, mattis venenatis lectus.
                      In interdum ullamcorper dolor.Lorem ipsum dolor sit amet.
                    </p>

                    <div className="share-icons mt-4">
                      <a href="#">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="#">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="#">
                        <span className="fa fa-tumblr"></span>
                      </a>
                      <a href="#">
                        <span className="fa fa-pinterest"></span>
                      </a>
                      <a href="#google">
                        <span
                          className="fa fa-google-plus"
                          aria-hidden="true"
                        ></span>
                      </a>
                      <a href="#vk" className="vk">
                        <span className="fa fa-vk"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comments mt-5">
                <h4 className="side-title ">Comments (2)</h4>
                <div className="media mt-4">
                  <div className="img-circle">
                    <img src={Team1} className="img-fluid" alt="..." />
                  </div>
                  <div className="media-body">
                    <ul className="time-rply mb-2">
                      <li>
                        <a href="#URL" className="name mt-0 mb-2 d-block">
                          Alexander Smith
                        </a>
                        March 10, 2020 - 10:02 pm
                      </li>
                      <li className="reply-last">
                        <a href="#reply" className="reply">
                          <span
                            className="fa fa-reply"
                            aria-hidden="true"
                          ></span>
                          Reply
                        </a>
                      </li>
                    </ul>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat, hic reprehenderit eum cupiditate deleniti....
                  </div>
                </div>

                <div className="media">
                  <div className="img-circle">
                    <img src={Team2} className="img-fluid" alt="..." />
                  </div>
                  <div className="media-body">
                    <ul className="time-rply mb-2">
                      <li>
                        <a href="#URL" className="name mt-0 mb-2 d-block">
                          Elizabeth ker
                        </a>
                        March 11, 2020 - 12:30 pm
                      </li>
                      <li className="reply-last">
                        <a href="#reply" className="reply">
                          <span
                            className="fa fa-reply"
                            aria-hidden="true"
                          ></span>
                          Reply
                        </a>
                      </li>
                    </ul>
                    Ea consequuntur illum facere aperiam sequi optio consectetur
                    adipisicing elitFuga, suscipit totam animi consequatur.....
                    <div className="media second mt-4 p-2">
                      <a className="img-circle img-circle-sm" href="#">
                        <img src={Team3} className="img-fluid" alt="..." />
                      </a>
                      <div className="media-body">
                        <ul className="time-rply mb-2">
                          <li>
                            <a href="#URL" className="name mt-0 mb-2 d-block">
                              Lisa Lindey
                            </a>
                            March 11, 2020 - 14:20 pm
                          </li>
                          <li className="reply-last">
                            <a href="#reply" className="reply">
                              <span
                                className="fa fa-reply"
                                aria-hidden="true"
                              ></span>{" "}
                              Reply
                            </a>
                          </li>
                        </ul>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis corrupti quos dolores et.....
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="leave-comment-form mt-lg-5 mt-4" id="comment">
                <h4 className="side-title mb-0">Leave a Reply</h4>
                <p className="mb-4">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="#" method="post">
                  <div className="form-group">
                    <textarea
                      name="Comment"
                      className="form-control"
                      placeholder="Your Comment*"
                      required=""
                      spellcheck="false"
                    ></textarea>
                  </div>
                  <div className="input-grids row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        placeholder="Your Name*"
                        required=""
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        placeholder="Email*"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="submit text-right">
                    <button className="btn btn-style btn-secondary">
                      Post Comment
                    </button>
                  </div>
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

export default BlogSingle;
