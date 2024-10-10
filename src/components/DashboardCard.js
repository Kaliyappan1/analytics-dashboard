import React from "react";
import "../assets/styles/DashboardCard.css"; 
import Metrics from "./Metrics";
import RequestType from "./RequestType";
import BrowserUsage from "./BrowserUsage";
import Requests from "./Requests";

const DashboardCard = () => {
  return (
    <div >
      <Metrics />
      <div className="dashboard-charts">
      <RequestType />
      <BrowserUsage />
      </div>
      <Requests />
    </div>
  );
};

export default DashboardCard;
