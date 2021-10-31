import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://grisly-fangs-84788.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [id]);

  const bookingIdRef = useRef();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();

  const handleBooking = async (e) => {
    const bookingId = bookingIdRef.current.value;
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const contact = contactRef.current.value;
    const newItem = { bookingId, fullName, email, contact };
    fetch("https://grisly-fangs-84788.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    e.preventDefult();
  };
  const { image, title, type, price } = services;
  return (
    <div>
      <h2>this is booking: {id}</h2>
      <div className="d-flex">
        <div class="card mb-3 mx-auto" style={{ maxWidth: "840px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={image} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body text-start">
                <h5 class="card-title fw-bold fs-2">{title}</h5>
                <p class="card-text">{type}</p>
                <p class="card-text text-primary fs-2">${price} per Night</p>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleBooking}>
              <input
                className="form-control"
                ref={bookingIdRef}
                type="text"
                placeholder="Booking ID"
                defaultValue={id}
              />
              <input
                className="form-control"
                ref={fullNameRef}
                type="text"
                placeholder="Full name"
                defaultValue={user.displayName}
              />
              <input
                className="form-control"
                ref={emailRef}
                type="email"
                placeholder="email@example.com"
                defaultValue={user.email}
              />
              <input
                className="form-control"
                ref={contactRef}
                type="number"
                placeholder="Contact Number"
              />
              <input
                className="btn btn-danger px-5 mt-2"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
