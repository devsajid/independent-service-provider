import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h5>Best photo provider</h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/Home"
                className="nav-link active fs-5"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Blogs" className="nav-link fs-5">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="home#services" className="nav-link fs-5">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="home#studios" className="nav-link fs-5">
                Studio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Chekout" className="nav-link fs-5">
                Chekout
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
