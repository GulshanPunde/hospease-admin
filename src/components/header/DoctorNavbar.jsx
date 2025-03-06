import React from "react";

const DoctorNavbar = ({ onLogout, activeSection, setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Doctor Dashboard</a>
        <div className="d-flex">
          {activeSection && (
            <>
              <button className="btn btn-light me-2" onClick={() => setActiveSection(null)}>
                Dashboard
              </button>
              <button className="btn btn-light me-2" onClick={() => setActiveSection("Appointments")}>
                Appointments
              </button>
              <button className="btn btn-light me-2" onClick={() => setActiveSection("Patient Records")}>
                Patient Records
              </button>
              <button className="btn btn-light me-2" onClick={() => setActiveSection("Patients")}>
                Patients
              </button>
              <button className="btn btn-light me-2" onClick={() => setActiveSection("Analytics")}>
                Analytics
              </button>
            </>
          )}
          <button className="btn btn-danger" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default DoctorNavbar;
