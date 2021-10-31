import React from "react";

const Banner = () => {
  return (
    <div
      className="container-fluied shadow rounded"
      style={{ height: "620px" }}
    >
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="https://listeo.pro/wp-content/uploads/2021/05/home-carousel-01-1.jpg"
              className="d-block w-100 rounded"
              style={{ height: "640px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://listeo.pro/wp-content/uploads/2021/05/home-carousel-02-1.jpg"
              className="d-block w-100 rounded"
              style={{ height: "640px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://listeo.pro/wp-content/uploads/2021/05/home-carousel-03-1.jpg"
              className="d-block w-100 rounded"
              style={{ height: "640px" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
