import React from "react";
import Services from "../Services/Services";
import Studios from "../Studios/Studios";
import studio1 from "../../../images/carosel1.jpg";
import studio2 from "../../../images/carosel2.jpg";
import studio3 from "../../../images/carosel3.jpg";
import studio4 from "../../../images/carosel4.jpg";
import studio5 from "../../../images/carosel5.jpg";
import studio6 from "../../../images/carosel6.jpg";
import studio7 from "../../../images/carosel7.jpg";
import studio8 from "../../../images/carosel8.jpg";
import studio9 from "../../../images/carosel9.jpg";
import studio10 from "../../../images/carosel10.jpg";
import studio11 from "../../../images/carosel11.jpg";
import studio12 from "../../../images/carosel12.jpg";
import studio13 from "../../../images/carosel13.jpg";
import studio14 from "../../../images/carosel14.jpg";
const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={studio1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio9} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio10} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio11} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio12} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio13} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={studio14} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Services></Services>
      <Studios></Studios>
    </div>
  );
};

export default Home;