import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import AdminHomePage from "./components/pages/AdminHomePage";
import DoctorHomePage from "./components/pages/DoctorHomePage";
import DoctorsManagement from "./components/adminComponent/DoctorsManagenment";
import BedsManagement from "./components/adminComponent/BedsManagment";
import AppointmentsManagement from "./components/adminComponent/AppointmentsManagement";
import PatientsRecordManagement from "./components/adminComponent/PatientsRecordManagment";
import PatientRecords from "./components/doctorComponent/PatientRecords";
import Analytics from "./components/doctorComponent/Analytics";
import Appointments from "./components/doctorComponent/Appointments";
import AdminNavbar from "./components/header/AdminNavbar";


const App = () => {
  const doctorsList = ["Dr. Smith", "Dr. John", "Dr. Patel"];
  const title = "Hospease";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  // Handle login with basic credential check
  const handleLogin = (emailOrDoctor, password, type) => {
    if (type === "admin" && emailOrDoctor === "admin@gmail.com" && password === "hospease") {
      setIsAuthenticated(true);
      setUserType("admin");
    } else if (type === "doctor" && doctorsList.includes(emailOrDoctor) && password === "hospease") {
      setIsAuthenticated(true);
      setUserType("doctor");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  // Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // Admin-only route wrapper
  const AdminRoute = ({ children }) => {
    return isAuthenticated && userType === "admin" ? children : <Navigate to="/" />;
  };

  // Doctor-only route wrapper
  const DoctorRoute = ({ children }) => {
    return isAuthenticated && userType === "doctor" ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <div>
      
        <Routes>
          <Route 
            path="/login" 
            element={<LoginPage onLogin={handleLogin} doctors={doctorsList} />} 
          />
          
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {userType === "admin" ? (
                  <AdminHomePage onLogout={handleLogout} />
                ) : (
                  <DoctorHomePage onLogout={handleLogout} />
                )}
              </ProtectedRoute>
            }
          />
          
          {/* Admin-only routes */}
          <Route
            path="/doctors"
            element={
              <AdminRoute>
                <DoctorsManagement />
              </AdminRoute>
            }
          />
          <Route
            path="/beds"
            element={
              <AdminRoute>
                <BedsManagement />
              </AdminRoute>
            }
          />
          <Route
            path="/admin-appointments"
            element={
              <AdminRoute>
                <AppointmentsManagement />
              </AdminRoute>
            }
          />
          <Route
            path="/patients"
            element={
              <AdminRoute>
                <PatientsRecordManagement />
              </AdminRoute>
            }
          />

          {/* Doctor-only routes */}
          <Route
            path="/patients-records"
            element={
              <DoctorRoute>
                <PatientRecords />
              </DoctorRoute>
            }
          />
          <Route
            path="/doctor-appointments"
            element={
              <DoctorRoute>
                <Appointments />
              </DoctorRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <DoctorRoute>
                <Analytics />
              </DoctorRoute>
            }
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
