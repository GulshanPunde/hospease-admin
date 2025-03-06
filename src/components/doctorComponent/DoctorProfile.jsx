import React, { useState } from "react";
import Swal from "sweetalert2";

const DoctorProfile = () => {
  const [photo, setPhoto] = useState("https://via.placeholder.com/200");

  const doctor = {
    name: "Dr. Gulshan Punde",
    specialty: "Cardiologist",
    email: "gulshanpunde1@gmail.com",
    phone: "+91 98765 43210",
    bio: "Passionate cardiologist with 10+ years of experience in heart care. Dedicated to improving patient outcomes through compassionate care and advanced medical techniques.",
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
      <h2 className="text-center text-info">Doctor Profile</h2>
      <div className="card shadow-sm p-4">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src={photo}
              alt="Doctor"
              className="img-fluid rounded-circle mb-3"
              style={{ maxWidth: "200px", height: "200px", objectFit: "cover" }}
            />
            <h3>{doctor.name}</h3>
            <p className="text-muted">{doctor.specialty}</p>

            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                id="photoUpload"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
              <label htmlFor="photoUpload" className="btn btn-primary">
                Change Photo
              </label>
            </div>
          </div>
          <div className="col-md-8">
            <h4 className="mb-3">Contact Information</h4>
            <p>
              <strong>Email:</strong> {doctor.email}
            </p>
            <p>
              <strong>Phone:</strong> {doctor.phone}
            </p>
            <h4 className="mt-4">About Me</h4>
            <p>{doctor.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
