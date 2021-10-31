import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, title, type, price, image, rating } = service;
  return (
    <>
      <div class="col p-4">
        <div class="card rounded">
          <img src={image} class="card-img-top rounded-2" alt="..." />
          <div class="card-body p-3 shadow">
            <h4 class="card-title text-start text-nowrap overflow-hidden">
              {title}
            </h4>
            <div className="d-flex justify-content-between">
              <h5 className="text-muted">{type}</h5>
              <Rating
                className="text-warning"
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <h4 className="text-primary">${price} per night</h4>

              <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
