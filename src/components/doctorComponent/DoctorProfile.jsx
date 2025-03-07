import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaPhone,
  FaHospital,
  FaCalendarCheck,
  FaCamera,
} from "react-icons/fa";

const DoctorProfile = () => {
  const [photo, setPhoto] = useState("https://via.placeholder.com/300");

  const doctor = {
    name: "Dr. Gulshan Punde",
    specialty: "Cardiologist",
    email: "gulshanpunde1@gmail.com",
    phone: "+91 98765 43210",
    bio: "Passionate cardiologist with 10+ years of experience in heart care. Dedicated to improving patient outcomes through compassionate care and advanced medical techniques.",
    department: "Cardiology Department",
    availability: "Mon - Fri, 9 AM - 5 PM",
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      Swal.fire({
        title: "Change Profile Photo?",
        text: "Are you sure you want to update your profile photo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Update",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setPhoto(e.target.result);
          };
          reader.readAsDataURL(file);

          Swal.fire({
            title: "Updated!",
            text: "Your profile photo has been successfully changed.",
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="card shadow-lg p-4 border-0 rounded-4"
        style={{
          background: "linear-gradient(135deg, #e3ffe7, #d9e7ff)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="row">
          {/* Left Section - Profile Photo */}
          <div
            className="col-md-4 text-center p-4 rounded-4"
            style={{
              background: "linear-gradient(135deg, #e3ffe7, #d9e7ff)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={photo}
              alt="Doctor"
              className="img-fluid rounded-circle mb-3 border border-4 border-primary shadow w-100"
              style={{ maxWidth: "250px", height: "250px", objectFit: "cover" }}
            />
            <h4 className="text-primary fw-bold">{doctor.name}</h4>
            <p className="text-danger fs-6 fw-semibold">{doctor.specialty}</p>

            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                id="photoUpload"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
              <label
                htmlFor="photoUpload"
                className="btn btn-outline-primary btn-sm shadow d-flex align-items-center justify-content-center gap-2"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 15px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.05)";
                }}
              >
                <FaCamera /> Change Photo
              </label>
            </div>
          </div>

          {/* Right Section - Doctor Details */}
          <div className="col-md-8" >
            {/* Contact Information */}
            <h4 className="mb-3 shadow-sm p-2 text-success text-center rounded bg-light" style={{
              background: "linear-gradient(135deg, #e3ffe7,rgb(196, 208, 229))",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }} >
              <i className="bi bi-person-lines-fill me-2"></i> Contact
              Information
            </h4>
            <div
              className="p-4 bg-light rounded shadow-sm"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                background: "linear-gradient(135deg, #e3ffe7, #d9e7ff)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.05)";
              }}
              
            >
              <p className="d-flex align-items-center gap-3">
                <FaEnvelope className="text-primary fs-5" />{" "}
                <strong>Email:</strong> {doctor.email}
              </p>
              <p className="d-flex align-items-center gap-3">
                <FaPhone className="text-success fs-5" />{" "}
                <strong>Phone:</strong> {doctor.phone}
              </p>
              <p className="d-flex align-items-center gap-3">
                <FaHospital className="text-danger fs-5" />{" "}
                <strong>Department:</strong> {doctor.department}
              </p>
              <p className="d-flex align-items-center gap-3">
                <FaCalendarCheck className="text-info fs-5" />{" "}
                <strong>Availability:</strong> {doctor.availability}
              </p>
            </div>

            {/* About Section */}
            {/* <h4 className="mt-4 shadow-sm p-2 text-info text-center rounded bg-light">
              <i className="bi bi-info-circle me-2"></i> About Me
            </h4> */}
            <p
              className="p-3 bg-light rounded shadow-sm mt-3"
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #e3ffe7, #d9e7ff)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              {doctor.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
