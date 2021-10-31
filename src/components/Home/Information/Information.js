import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div>
      <h4 className="text-danger fw-bolder">ONE-OF-A-KIND VACATION RENTALS</h4>
      <h2 className="fw-bolder">Booking with us is easy</h2>
      <div className="d-lg-flex  justify-content-center my-5">
        <div className="card-body">
          <i class="fas fa-map-marked-alt rounded-circle fs-1 p-5"></i>
          <h4 className="card-title">Find the perfect rental</h4>
          <p className="card-text">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed in
          </p>
        </div>
        <div className="card-body">
          <i class="fas fa-credit-card fs-1 p-5"></i>
          <h4 className="card-title">Book with confidence</h4>
          <p className="card-text">
            The bedding was hardly able to cover it and seemed ready to slide
            off any moment. His many legs, pit
          </p>
        </div>
        <div className="card-body">
          <i class="fas fa-heart fs-1 p-5"></i>
          <h4 className="card-title">Enjoy your vacation</h4>
          <p className="card-text">
            His room, a proper human room although a little too small, lay
            peacefully between its four familiar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
