import React from "react";
import Banner from "../Banner/Banner";
import Guides from "./../../Guides/Guides";
import Services from "../Services/Services";

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
        <Guides></Guides>
      </div>
      <div className="container-fluied shadow bg-body">
        <Services></Services>
      </div>
      <div className="container mt-5">
        <h4 className="text-danger fw-bolder">
          ONE-OF-A-KIND VACATION RENTALS
        </h4>
        <h2 className="fw-bolder">Booking with us is easy</h2>
        <div className="d-lg-flex  justify-content-center my-5">
          <div className="card-body">
            <h4 className="card-title">Find the perfect rental</h4>
            <p className="card-text">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed in
            </p>
          </div>
          <div className="card-body">
            <h4 className="card-title">Book with confidence</h4>
            <p className="card-text">
              The bedding was hardly able to cover it and seemed ready to slide
              off any moment. His many legs, pit
            </p>
          </div>
          <div className="card-body">
            <h4 className="card-title">Enjoy your vacation</h4>
            <p className="card-text">
              His room, a proper human room although a little too small, lay
              peacefully between its four familiar
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1497436072909-60f360e1d4b1.jpg"
          className=""
          alt=""
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
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
