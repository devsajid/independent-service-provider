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
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={studio1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio5} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio6} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio7} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio8} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio9} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio10} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio11} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio12} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio13} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={studio14} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Services></Services>
      <Studios></Studios>
    </div>
  );
};

export default Home;
