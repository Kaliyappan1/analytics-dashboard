import "../assets/styles/RequestType.css";

const RequestType = () => {
  return (
    <div className="request-type">
      <h4>Request Type</h4>
      <p className="icon">Number of requests based on type</p>
      <div className="bar-chart">
        <div className="bar" style={{ height: "100%" }}></div>
        <div className="bar" style={{ height: "70%" }}></div>
        <div className="bar" style={{ height: "40%" }}></div>
        <div className="bar" style={{ height: "20%" }}></div>
        <div className="bar" style={{ height: "60%" }}></div>
      </div>
      <div className="bar-labels">
        <p className="label">GET</p>
        <p className="label">POST</p>
        <p className="label">PUT</p>
        <p className="label">DELETE</p>
        <p className="label">PATCH</p>
      </div>
    </div>
  );
};

export default RequestType;
