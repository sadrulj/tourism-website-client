import React from "react";
import Banner from "../Banner/Banner";
import ServicesHome from "../Services/ServicesHome";
import Information from "../Information/Information";
import "./Home.css";
import GuidesHome from "../../Guides/GuidesHome";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div
        className="container-fluied shadow rounded"
        style={{ height: "620px" }}
      >
        <Banner></Banner>
      </div>
      <div className="container">
        <GuidesHome></GuidesHome>
      </div>
      <div className="container-fluied shadow bg-body">
        <ServicesHome></ServicesHome>
      </div>
      <div className="container mt-5">
        <Information></Information>
      </div>
      <div class="card bg-dark text-white">
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1497436072909-60f360e1d4b1.jpg"
          className="card-img"
          height="600px"
          alt=""
        />
        <div className="card-img-overlay d-flex justify-content-start  align-items-center ms-4">
          <h1 className="card-title fs-1 fw-bolder">
            Ready for your next holidays?
          </h1>
          <button className="btn bg-white ms-3">Get Started</button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-1.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-2.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-4.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-11.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-5.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-6.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-7.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-8.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-9.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/instagram/instagram-10.jpg"
          class="img-thumbnail"
          style={{ width: "144px" }}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Home;
