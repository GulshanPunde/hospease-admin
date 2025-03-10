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

const App = () => {
  const doctorsList = ["Dr. Smith", "Dr. John", "Dr. Patel"];
  const title = "Hospease";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

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

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const AdminRoute = ({ children }) => {
    return isAuthenticated && userType === "admin" ? children : <Navigate to="/" />;
  };

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
                {userType === "admin" ? <AdminHomePage onLogout={handleLogout} /> : <DoctorHomePage onLogout={handleLogout} />}
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
            path="/appointments"
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
           <Route
            path="/patients-records"
            element={
              <DoctorRoute>
                <PatientRecords/>
              </DoctorRoute>
            }
          />
           <Route
            path="/appointments"
            element={
              <DoctorRoute>
                <Appointments/>
              </DoctorRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <DoctorRoute>
                <Analytics/>
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
