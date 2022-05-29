import {
  faDownload,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessSummary = () => {
  return (
    <div className="flex justify-center my-[100px]">
      <div class="stats shadow flex ">
        <div class="stat place-items-center">
          <FontAwesomeIcon className="fa-3x mb-3" icon={faDownload} />
          <div class="stat-title">Daily Sales</div>
          <div class="stat-value">31K</div>
        </div>

        <div class="stat place-items-center">
          <FontAwesomeIcon
            className="fa-3x mb-3"
            icon={faUser}
          ></FontAwesomeIcon>
          <div class="stat-title">Happy Customers</div>
          <div class="stat-value text-secondary">4,200</div>
        </div>

        <div class="stat place-items-center">
          <FontAwesomeIcon
            className="fa-3x mb-3"
            icon={faTrophy}
          ></FontAwesomeIcon>
          <div class="stat-title">Awards</div>
          <div class="stat-value">12</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
