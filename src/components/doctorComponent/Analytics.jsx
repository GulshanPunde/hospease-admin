import React from "react";
import { FaChartPie, FaUserCheck, FaHeartbeat, FaProcedures, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Chart } from "react-google-charts";

const Analytics = () => {
  const analyticsData = [
    { 
      icon: <FaUserCheck size={50} className="text-success" />, 
      title: "Appointments Completed", 
      value: 120, 
      trend: "+15%", 
      trendIcon: <FaArrowUp className="text-success ms-2" />,
      bgGradient: "linear-gradient(135deg, #e3ffe7 0%, #d9e7ff 100%)"
    },
    { 
      icon: <FaHeartbeat size={50} className="text-danger" />, 
      title: "Critical Patients", 
      value: 15, 
      trend: "+5%", 
      trendIcon: <FaArrowUp className="text-danger ms-2" />,
      bgGradient: "linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)"
    },
    { 
      icon: <FaProcedures size={50} className="text-warning" />, 
      title: "Patients Admitted", 
      value: 45, 
      trend: "-10%", 
      trendIcon: <FaArrowDown className="text-warning ms-2" />,
      bgGradient: "linear-gradient(135deg, #fff7d6 0%, #ffe29f 100%)"
    },
    { 
      icon: <FaChartPie size={50} className="text-info" />, 
      title: "Recovery Rate", 
      value: "85%", 
      trend: "+8%", 
      trendIcon: <FaArrowUp className="text-success ms-2" />,
      bgGradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)"
    },
  ];

  // Google Charts Data
  const barChartData = [
    ["Category", "Count"],
    ["Appointments Completed", 120],
    ["Critical Patients", 15],
    ["Patients Admitted", 45],
    ["Recovery Rate (%)", 85],
  ];

  const pieChartData = [
    ["Status", "Patients"],
    ["Recovered", 65],
    ["Critical", 15],
    ["Admitted", 45],
    ["Discharged", 20],
  ];

  return (
    <div className="container ">
      <h2 className="text-center text-danger ">📊 Analytics Dashboard</h2>
      <p className="text-center mb-5">Track patient progress and hospital statistics in real-time with interactive Google Charts.</p>
      <div className="row g-4">
        {analyticsData.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div 
              className="card shadow-lg border-0" 
              style={{
                background: item.bgGradient, 
                borderRadius: "20px", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 25px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div className="card-body text-center p-4">
                {item.icon}
                <h5 className="card-title mt-3 fw-bold">{item.title}</h5>
                <p className="card-text fw-bold display-6">
                  {item.value} 
                  <span className="fs-5">{item.trend}{item.trendIcon}</span>
                </p>
                <p className="small text-muted">Compared to last month</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5 mb-4">
        <div className="col-12 col-lg-6 mb-4">
          <div className="card shadow-lg p-3">
            <h5 className="text-center mb-3">📊 Appointments & Patient Stats</h5>
            <Chart
              chartType="BarChart"
              data={barChartData}
              options={{
                chartArea: { width: "70%" },
                hAxis: { title: "Count" },
                vAxis: { title: "Category" },
                colors: ["#28a745", "#dc3545", "#ffc107", "#17a2b8"],
              }}
              width="100%"
              height="300px"
            />
          </div>
        </div>
        
        <div className="col-12 col-lg-6">
          <div className="card shadow-lg p-3">
            <h5 className="text-center mb-3">🩺 Patient Distribution</h5>
            <Chart
              chartType="PieChart"
              data={pieChartData}
              options={{
                pieHole: 0.4,
                is3D: false,
                colors: ["#28a745", "#dc3545", "#ffc107", "#007bff"],
              }}
              width="100%"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
