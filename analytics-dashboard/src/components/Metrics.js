// src/components/Metrics.jsx
import React from "react";
import "../assets/styles/Metrics.css";
import { FaDollarSign, FaClock, FaRegTimesCircle } from "react-icons/fa";

const Metrics = () => {
  return (
    <div className="metrics">
      <div className="metric">
        <div className="icon-container-income">
          <FaDollarSign size={30} color="#01B651" />
        </div>
        <div>
          <h4>Total Requests</h4>
          <p>120k</p>
        </div>
      </div>
      <span className="metric-break-line"></span>
      <div className="metric">
        <div className="icon-container-clock">
          <FaClock size={30} color="#1268DC" />
        </div>
        <div>
          <h4>Avg. Response Time</h4>
          <p>1.2s</p>
        </div>
      </div>
      <span className="metric-break-line"></span>
      <div className="metric">
        <div className="icon-container-time">
          <FaRegTimesCircle size={30} color="#F6000E" />
        </div>
        <div>
          <h4>Failed Requests</h4>
          <p>178</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
