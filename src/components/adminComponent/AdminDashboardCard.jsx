import React from 'react';

const AdminDashboardCard = ({ icon, title, text, onClick }) => {
  const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div className="col-12 col-sm-6 col-lg-3 d-flex p-3"> {/* Ensures symmetry on all devices */}
      <div
        className="card shadow-lg w-100"
        style={{ ...cardStyle, padding: '20px', height: '100%' }} // Full width and height
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.05)';
        }}
      >
        <div className="card-body text-center d-flex flex-column justify-content-center">
          <div className="mb-3" style={{ fontSize: '3rem' }}> {/* Larger icon */}
            {icon}
          </div>
          <h4 className="card-title fw-bold">{title}</h4> {/* Larger title */}
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardCard;
