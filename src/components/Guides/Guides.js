import React, { useEffect, useState } from "react";
import Guide from "../Guides/Guide";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://grisly-fangs-84788.herokuapp.com/guides")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="guides">
      <p className="text-primary fw-bold mt-5 text-start ms-5">
        STAY AND EAT LIKE A LOCAL
      </p>
      <h2 className="text-dark fw-bolder text-start ms-5">Our guides</h2>
      <div className="service-container d-flex justify-content-center gap-4">
        {services.map((service) => (
          <Guide key={service._id} service={service}></Guide>
        ))}
      </div>
    </div>
  );
};

export default Services;
