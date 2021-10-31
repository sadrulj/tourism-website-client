import React, { useState } from "react";
import AddListServices from "./AddServices/AddListServices";
import AddListGuides from "./AddGuides/AddListGuides";
import "./Listing.css";
import { Link } from "react-router-dom";

const ServicesShow = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="container flex flex-wrap mx-auto">
        <div className="w-full">
          <ul role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "fs-3 fw-bold text-uppercase px-5 py-3 shadow-lg rounded active block " +
                  (openTab === 1
                    ? "text-white bg-" + color
                    : "text-" + color + "bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                to="/services"
                role="tablist"
                aria-current="page"
              >
                Services
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "fs-3 fw-bold text-uppercase px-5 py-3 shadow-lg rounded block " +
                  (openTab === 2
                    ? "text-white bg-" + color
                    : "text-" + color + "bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                to="/guides"
                role="tablist"
                aria-current="page"
              >
                Guides
              </Link>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "grid grid-cols-3 p-6" : "d-none"}
                  id="services"
                >
                  <AddListServices></AddListServices>
                </div>
                <div
                  className={openTab === 2 ? "grid grid-cols-3 p-6" : "d-none"}
                  id="guides"
                >
                  <AddListGuides></AddListGuides>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <ServicesShow color="primary" />
    </>
  );
}
