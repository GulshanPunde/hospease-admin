import React, { useState } from "react";
import { FaCalendarCheck, FaFileMedical, FaUserInjured, FaChartLine, FaUserMd } from "react-icons/fa";
import DoctorNavbar from "../header/DoctorNavbar";
import Appointments from "../doctorComponent/Appointments";
import PatientRecords from "../doctorComponent/PatientRecords";
import Patients from "../doctorComponent/Patients";
import Analytics from "../doctorComponent/Analytics";
import DoctorProfile from "../doctorComponent/DoctorProfile";

const DoctorHomePage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Appointments":
        return <Appointments />;
      case "Patient Records":
        return <PatientRecords />;
      case "Patients":
        return <Patients />;
      case "Analytics":
        return <Analytics />;
      
      default:
        return (
          <div className="row g-4 mb-4">
            <DoctorProfile />
            {[

              { icon: <FaCalendarCheck size={50} className="mb-3 text-success" />, title: "Appointments" },
              { icon: <FaFileMedical size={50} className="mb-3 text-primary" />, title: "Patient Records" },
              { icon: <FaUserInjured size={50} className="mb-3 text-warning" />, title: "Patients" },
              { icon: <FaChartLine size={50} className="mb-3 text-danger" />, title: "Analytics" },
            ].map(({ icon, title }, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="card shadow-sm" onClick={() => setActiveSection(title)} style={{ cursor: "pointer" }}>
                  <div className="card-body text-center">
                    {icon}
                    <h5 className="card-title">{title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div style={{ backgroundColor: "#eafaf1", fontFamily: "Arial, sans-serif", minHeight: "100vh", paddingTop: "80px" }}>
      
      <DoctorNavbar onLogout={handleLogout} activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container">{renderContent()}</div>
    </div>
  );
};

export default DoctorHomePage;
