import {
  faDownload,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessSummary = () => {
  return (
    <div className=" my-[100px]">
      <h2 className="text-center text-4xl font-bold mb-[40px]">Summary</h2>
      <div className="grid gap-[40px]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow flex text-center bg-gray-600 text-zinc-300 rounded">
        <div className=" place-items-center my-[40px] ">
          <FontAwesomeIcon className="fa-3x mb-3" icon={faDownload} />
          <div className="stat-title text-4xl font-bold my-[20px]">
            Daily Sales
          </div>
          <div className="stat-value">31K</div>
        </div>

        <div className=" place-items-center my-[40px]">
          <FontAwesomeIcon
            className="fa-3x mb-3"
            icon={faUser}
          ></FontAwesomeIcon>
          <div className="stat-title text-4xl font-bold my-[20px]">
            Happy Customers
          </div>
          <div className="stat-value text-secondary">4,200</div>
        </div>

        <div className=" place-items-center my-[40px]">
          <FontAwesomeIcon
            className="fa-3x mb-3"
            icon={faTrophy}
          ></FontAwesomeIcon>
          <div className="stat-title text-4xl font-bold my-[20px]">Awards</div>
          <div className="stat-value">12</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
