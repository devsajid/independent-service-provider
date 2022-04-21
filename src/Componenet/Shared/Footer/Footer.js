import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer>
        <div className="containerr">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li></li>
                <a className="rounded">about</a>
                <a className="rounded">service</a>
                <a className="rounded">blog</a>
                <a className="rounded">checkout</a>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a className="rounded">service</a>
                  <a className="rounded">about</a>
                  <a className="rounded">blog</a>
                  <a className="rounded">checkout</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a className="rounded">about</a>
                  <a className="rounded">service</a>
                  <a className="rounded">blog</a>
                  <a>checkout</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a className="rounded">about</a>
                  <a className="rounded">service</a>
                  <a className="rounded">blog</a>
                  <a className="rounded">checkout</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <div className="social-a">
                <a className="rounded">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a className="rounded">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="rounded">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="rounded">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>
          <small className="text-white text-center mt-5">
            copyright &copy; by sajid hasan {year}
          </small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
