import { CgSearch } from "react-icons/cg";
import "../assets/styles/Requests.css";

const Requests = () => {
  return (
    <div className="requests">
      <div className="requests-header">
        <div>
          <h4>Requests</h4>
        </div>
        <div className="search-bar">
          <CgSearch size={22} className="search-icon" />
          <input type="text" placeholder="Search" style={{ margin:"0 5px"}}/>  
          <input type="date" placeholder="Last 30 days" />  


        </div>

      </div>
      <table>
        <thead>
          <tr >
            <th>ID</th>
            <th>Req. ID</th>
            <th>Req. Status</th>
            <th>Req. Type</th>
            <th>Req. Time</th>
            <th>Content Type</th>
            <th>IP Address</th>
            <th>OS</th>
            <th>User agent</th>
          </tr>
        </thead>
        <span className="requests-cross-bar"></span>
        <tbody>
          <tr>
            <td>1</td>
            <td>Req-1</td>
            <td>200</td>
            <td>GET</td>
            <td>2024-06-28 22:11:01Z</td>
            <td>Application/JSON</td>
            <td>192.167.1.1</td>
            <td>Windows</td>
            <td>Chrome</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Req-2</td>
            <td>500</td>
            <td>POST</td>
            <td>2024-05-28 22:12:01Z</td>
            <td>Application/JSON</td>
            <td>192.167.1.1</td>
            <td>Windows</td>
            <td>Chrome</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
