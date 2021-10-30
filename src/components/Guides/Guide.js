import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  // const {service} = props;
  const { image, title, sub_title } = service;
  return (
    <Link>
      <div className="card bg-dark text-white">
        <img
          src={image}
          className="card-img"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{sub_title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Service;
