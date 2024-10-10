import Sidebar from "./Sidebar";
import Header from "./Header";
import "../assets/styles/Dashboard.css";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-body">
          <DashboardCard/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
