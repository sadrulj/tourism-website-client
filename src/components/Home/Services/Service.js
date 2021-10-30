import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, title, type, name, price, image } = service;
  return (
    <>
      <div class="col p-4">
        <div class="card rounded">
          <img src={image} class="card-img-top rounded-2" alt="..." />
          <div class="card-body p-3 shadow">
            <h3 class="card-title text-start">{title}</h3>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between">
              <h5>{type}</h5>
              <h6>icon</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h2>${price} per night</h2>
              <Link to={`/services/${_id}`}>
                <button className="btn btn-warning">
                  Book Now
                  {/* {name.toLowerCase()} */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
