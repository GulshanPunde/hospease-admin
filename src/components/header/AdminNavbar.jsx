import React from 'react';

const AdminNavbar = ({ onLogout }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary shadow"
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'fixed', 
        top: 0,
        width: '100%',
        zIndex: 1030,
        height: '60px', // Fixed height for navbar
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <strong>Hospease Dashboard</strong>
        </a>
        <button className="btn btn-danger" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
