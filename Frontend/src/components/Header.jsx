import React from "react";
import Hotels from "../assets/images/hotels.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w3l-header-nav">
        <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={Hotels} alt="Your logo" style={{ height: "35px" }} />
              Hotels
            </Link>
            {/* <!-- if logo is image enable this   
						<a className="navbar-brand" href="#index.html">
							<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
						</a> --> */}
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
              <span className="fa icon-expand fa-bars"></span>
              <span className="fa icon-close fa-times"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item @@home__active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item @@services__active">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item dropdown @@room__active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Rooms <span className="fa fa-angle-down"></span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/rooms">
                      Rooms
                    </Link>
                    <Link className="dropdown-item" to="/room-single">
                      Room Single
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown @@blog__active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog <span className="fa fa-angle-down"></span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                    <Link className="dropdown-item" to="/blog-single">
                      Blog Single
                    </Link>
                  </div>
                </li>
                <li className="nav-item @@contact__active">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link
                to="/booking"
                className="ml-3 book btn btn-secondary btn-style"
              >
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
