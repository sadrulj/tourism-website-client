import React from "react";

const Service = ({ service }) => {
  // const {service} = props;
  const { image, title, sub_title } = service;
  return (
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
  );
};

export default Service;
