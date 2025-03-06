import React from "react";
import { FaChartPie, FaUserCheck, FaHeartbeat, FaProcedures } from "react-icons/fa";

const Analytics = () => {
  const analyticsData = [
    { icon: <FaUserCheck size={40} className="text-success" />, title: "Appointments Completed", value: 120 },
    { icon: <FaHeartbeat size={40} className="text-danger" />, title: "Critical Patients", value: 15 },
    { icon: <FaProcedures size={40} className="text-warning" />, title: "Patients Admitted", value: 45 },
    { icon: <FaChartPie size={40} className="text-info" />, title: "Recovery Rate", value: "85%" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger mb-4">Analytics</h2>
      <p className="text-center">Check health stats and patient progress here.</p>

      <div className="row g-4">
        {analyticsData.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="card shadow-sm">
              <div className="card-body text-center">
                {item.icon}
                <h5 className="card-title mt-3">{item.title}</h5>
                <p className="card-text fw-bold">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
