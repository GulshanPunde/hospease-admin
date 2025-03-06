import React from 'react';
import { FaCalendarCheck, FaFileMedical, FaUserInjured, FaChartLine } from 'react-icons/fa';

const DoctorHomePage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#eafaf1', fontFamily: 'Arial, sans-serif', padding: '20px' }}
    >
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <h1 className="text-center mb-4" style={{ color: '#28a745' }}>
          Welcome to Doctor Dashboard
        </h1>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaCalendarCheck size={50} className="mb-3 text-success" />
                <h5 className="card-title">Appointments</h5>
                <p className="card-text">View and manage your appointments</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaFileMedical size={50} className="mb-3 text-primary" />
                <h5 className="card-title">Patient Records</h5>
                <p className="card-text">Access and update patient medical records</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaUserInjured size={50} className="mb-3 text-warning" />
                <h5 className="card-title">Patients</h5>
                <p className="card-text">View patient history and details</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <FaChartLine size={50} className="mb-3 text-danger" />
                <h5 className="card-title">Analytics</h5>
                <p className="card-text">Check health stats and patient progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHomePage;
