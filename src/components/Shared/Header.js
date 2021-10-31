import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div
      className="sticky-md-top"
      style={{ outlineStyle: "solid", outlineColor: "#6942A2" }}
    >
      <nav class="navbar navbar-expand-lg navbar-light shadow bg-body p-3">
        <div class="container-fluid  ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              class="navbar-brand fw-bold ms-3 fs-3"
              style={{ color: "#6942A2 " }}
              to="/home"
            >
              LOOKING.com
            </Link>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  style={{ color: "#6942A2 " }}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  style={{ color: "#6942A2 " }}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  style={{ color: "#6942A2 " }}
                  to="/guides"
                >
                  Guide
                </Link>
              </li>
              {user.email ? (
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    style={{ color: "#6942A2 " }}
                    to="/user"
                  >
                    User Booking
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
              {user.email ? (
                <button className="btn btn-danger me-3" onClick={logOut}>
                  Logout
                </button>
              ) : (
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    style={{ color: "#6942A2 " }}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <Link to="/listing">
              <button class="btn btn-outline-primary" type="submit">
                Add a Listing
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
