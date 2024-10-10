import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../assets/styles/Dashboard.css"; // Ensure this file exists

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-body">
          {/* Main dashboard content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
