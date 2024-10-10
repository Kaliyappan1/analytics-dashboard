import React from "react";
import "../styles/Sidebar.css";
import {
  FaProductHunt,
  FaUsers,
  FaDollarSign,
  FaBullhorn,
  FaQuestionCircle,
} from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <IoSettingsOutline size={26} />
        <h2>API Dashboard</h2>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <div>
            <BiSolidDashboard color="#8C9AC0" className="icon" />
            <span>Dashboard</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="nav-item">
          <div>
            <FaProductHunt color="#8C9AC0" className="icon" />
            <span>Product</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="nav-item">
          <div>
            <FaUsers color="#8C9AC0" className="icon" />
            <span>Customers</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="nav-item">
          <div>
            <FaDollarSign color="#8C9AC0" className="icon" />
            <span>Income</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="nav-item">
          <div>
            <FaBullhorn className="icon" color="#8C9AC0" />
            <span>Promote</span>
          </div>
          <IoIosArrowForward />
        </li>
        <li className="nav-item">
          <div>
            <FaQuestionCircle className="icon" color="#8C9AC0" />
            <span>Help</span>
          </div>
          <IoIosArrowForward />
        </li>
      </ul>
      <div className="sidebar-footer">
        <div className="pro-box">
          <p className="pro-text">Upgrade to PRO to get access all Features!</p>
          <button className="pro-btn">Get Pro Now!</button>
        </div>
        <div className="profile">
          <img src="https://bit.ly/prosper-baba" alt="profile" />
          <div>
            <p>Evano</p>
            <span>Project Manager</span>
          </div>
          <div className="sidebar-footer-arrow">
            <IoIosArrowDown color="#8C9AC0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
