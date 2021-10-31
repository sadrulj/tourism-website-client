import React, { useEffect, useState } from "react";
import Service from "../Services/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://grisly-fangs-84788.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="mx-auto">
      <h2 className="text-primary mt-5 px-3 pt-3 text-start ms-5">
        Our services
      </h2>
      <div className="row row-cols-1 row-cols-md-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
