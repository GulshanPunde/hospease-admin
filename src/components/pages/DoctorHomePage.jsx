import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaCalendarCheck, FaFileMedical, FaUserInjured, FaChartLine, FaFilePrescription } from "react-icons/fa";
import DoctorNavbar from "../header/DoctorNavbar";
import Appointments from "../doctorComponent/Appointments";
import PatientRecords from "../doctorComponent/PatientRecords";

import Analytics from "../doctorComponent/Analytics";
import DoctorProfile from "../doctorComponent/DoctorProfile";

const DoctorHomePage = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your session!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout();
        Swal.fire("Logged Out!", "You have been successfully logged out.", "success");
      }
    });
  };

  const sections = [
    { icon: <FaCalendarCheck size={50} className="text-success" />, title: "Appointments", gradient: "linear-gradient(135deg, #e3ffe7, #d9e7ff)" },
    { icon: <FaFileMedical size={50} className="text-primary" />, title: "Patient Records", gradient: "linear-gradient(135deg, #c2e9fb, #a1c4fd)" },
   
    { icon: <FaChartLine size={50} className="text-danger" />, title: "Analytics", gradient: "linear-gradient(135deg, #ffdde1, #ee9ca7)" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Appointments":
        return <Appointments />;
      case "Patient Records":
        return <PatientRecords />;
   
      case "Analytics":
        return <Analytics />;
      default:
        return (
          <div className="row g-4 mb-4">
            <DoctorProfile />
            {sections.map(({ icon, title, gradient }, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div
                  className="card shadow-lg border-0"
                  onClick={() => setActiveSection(title)}
                  style={{
                    cursor: "pointer",
                    background: gradient,
                    borderRadius: "20px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
                    {icon}
                    <h5 className="card-title mt-3 fw-bold">{title}</h5>
                    <p className="small text-muted">Click to view details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0f9ff, #eafaf1)",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      <DoctorNavbar onLogout={handleLogout} activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container">
        {activeSection && (
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <h3 className="text-primary">
              {activeSection} <span className="text-muted">Section</span>
            </h3>
            <button className="btn btn-outline-danger" onClick={() => setActiveSection(null)}>
              Back to Dashboard
            </button>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
};

export default DoctorHomePage;
