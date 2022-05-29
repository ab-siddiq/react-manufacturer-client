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
      <div className="stats shadow flex ">
        <div className="stat place-items-center">
          <FontAwesomeIcon className="fa-3x mb-3" icon={faDownload} />
          <div className="stat-title text-4xl font-bold my-[20px]">Daily Sales</div>
          <div className="stat-value">31K</div>
        </div>

        <div className="stat place-items-center">
          <FontAwesomeIcon
            className="fa-3x mb-3"
            icon={faUser}
          ></FontAwesomeIcon>
          <div className="stat-title text-4xl font-bold my-[20px]">Happy Customers</div>
          <div className="stat-value text-secondary">4,200</div>
        </div>

        <div className="stat place-items-center">
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
