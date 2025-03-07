import React from "react";

const DoctorNavbar = ({ onLogout, activeSection, setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><strong > <i className="bi bi-hospital me-2"></i>HOSPEASE</strong></a>
        {activeSection === null ? (
          <button 
            className="btn btn-danger ms-auto" 
            onClick={onLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto">
               
                <button className="btn btn-outline-light me-2" onClick={() => setActiveSection("Appointments")}>
                  Appointments
                </button>
                <button className="btn btn-outline-light me-2" onClick={() => setActiveSection("Patient Records")}>
                  Patient Records
                </button>
               
                <button className="btn btn-outline-light me-2" onClick={() => setActiveSection("Analytics")}>
                  Analytics
                </button>
                <button 
                  className="btn btn-danger  mt-1 " 
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default DoctorNavbar;
