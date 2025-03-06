import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin, doctors }) => {
  const [userType, setUserType] = useState("admin");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "admin") {
      onLogin(email, password, userType);
    } else {
      onLogin(doctor, password, userType);
    }
    navigate("/"); // Redirect to the home page after successful login
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#fafafa", fontFamily: "'Roboto', sans-serif" }}
    >
      <div
        className="card shadow"
        style={{ maxWidth: "350px", border: "1px solid #dbdbdb", borderRadius: "8px", padding: "20px", backgroundColor: "#fff" }}
      >
        <div className="text-center mb-4">
          <h1 style={{ fontFamily: "'Lobster', cursive", fontSize: "2.5rem", color: "#262626" }}>
            Hospease
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select
              className="form-select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              style={{ fontSize: "14px", borderRadius: "4px", padding: "10px" }}
            >
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {userType === "admin" ? (
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ fontSize: "14px", borderRadius: "4px", padding: "10px" }}
              />
            </div>
          ) : (
            <div className="mb-3">
              <select
                className="form-select"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
                style={{ fontSize: "14px", borderRadius: "4px", padding: "10px" }}
              >
                <option value="">Select Doctor</option>
                {doctors.map((doc, index) => (
                  <option key={index} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ fontSize: "14px", borderRadius: "4px", padding: "10px" }}
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#0095f6", color: "#fff", fontWeight: "bold", fontSize: "14px", borderRadius: "4px", padding: "10px" }}
            >
              Log In
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p style={{ fontSize: "12px", color: "#8e8e8e" }}>
            By logging in, you agree to our Terms, Privacy Policy, and Cookies Policy.
          </p>
        </div>
        <div className="text-center mt-3" style={{ fontSize: "14px", color: "#8e8e8e" }}>
          © {new Date().getFullYear()} The Trendzy
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
