import React from 'react';
import AdminNavbar from '../header/AdminNavbar';
import AdminDashboard from '../adminComponent/AdminDashboard';

const AdminHomePage = () => {
  return (
    <div style={{ backgroundColor: '#e3f2fd', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      <AdminNavbar />
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{ paddingTop: '80px', paddingBottom: '20px' }} // Increased top padding
      >
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          <h2 
            className="text-center mb-4 p-2" 
            style={{ color: '#007bff', fontWeight: 'bold'}} // Added margin-top for extra space
          >
            Welcome to Hospital Admin Dashboard
          </h2>
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
