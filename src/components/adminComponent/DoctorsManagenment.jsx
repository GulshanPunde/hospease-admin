import React, { useState } from 'react';
import Swal from 'sweetalert2';

const DoctorsManagement = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Alice Johnson', specialty: 'Cardiology', contact: 'alice.guldh@hospital.com', experience: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Dr. Bob Smith', specialty: 'Neurology', contact: 'bob.smith@hospital.com', experience: 8, image: 'https://via.placeholder.com/150' },
  ]);

  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '', contact: '', experience: '', image: '' });
  const [editDoctor, setEditDoctor] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleRegisterDoctor = () => {
    if (newDoctor.name && newDoctor.specialty && newDoctor.contact && newDoctor.experience && newDoctor.image) {
      setDoctors([...doctors, { id: Date.now(), ...newDoctor, experience: parseInt(newDoctor.experience, 10) }]);
      setNewDoctor({ name: '', specialty: '', contact: '', experience: '', image: '' });
      showSuccessAlert('Doctor registered successfully!');
    }
  };

  const handleRemoveDoctor = (id) => {
    const doctor = doctors.find((doc) => doc.id === id);

    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to remove ${doctor.name}. This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, remove',
    }).then((result) => {
      if (result.isConfirmed) {
        setDoctors(doctors.filter((doctor) => doctor.id !== id));
        showSuccessAlert('Doctor removed successfully!');
      }
    });
  };

  const handleUpdateDoctor = () => {
    setDoctors(doctors.map((doc) => (doc.id === editDoctor.id ? editDoctor : doc)));
    setEditDoctor(null); // Close edit form
    showSuccessAlert('Doctor details updated successfully!');
  };

  const clearFilters = () => {
    setFilterName('');
    setFilterSpecialty('');
  };

  return (
    <div className="container py-2"  >
      <h2 className="mb-4 text-center text-primary fw-bold shadow p-2">Doctors Management</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h3 className="text-success mb-3">Register New Doctor</h3>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Doctor's Name"
              value={newDoctor.name}
              onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            />
            <select
              className="form-select mb-3"
              value={newDoctor.specialty}
              onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
            >
              <option value="">Select Specialty</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Oncology">Oncology</option>
            </select>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Doctor's Contact Email"
              value={newDoctor.contact}
              onChange={(e) => setNewDoctor({ ...newDoctor, contact: e.target.value })}
            />
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Experience (in years)"
              value={newDoctor.experience}
              onChange={(e) => setNewDoctor({ ...newDoctor, experience: e.target.value })}
            />
            <input
              type="file"
              className="form-control mb-3"
              accept="image/*"
              onChange={(e) => setNewDoctor({ ...newDoctor, image: URL.createObjectURL(e.target.files[0]) })}
            />
            <button className="btn btn-success w-100" onClick={handleRegisterDoctor}>
              Register Doctor
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h3 className="text-warning mb-3">Filter & Manage Doctors</h3>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Filter by Doctor's Name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
            <select
              className="form-select mb-3"
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Oncology">Oncology</option>
            </select>
            <button className="btn btn-secondary w-100" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-center text-info">All Registered Doctors</h3>
      <div className="card shadow-lg p-3">
        <ul className="list-group">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="list-group-item d-flex justify-content-between align-items-center">
              {editDoctor && editDoctor.id === doctor.id ? (
                <div className="w-100">
                  <input className="form-control mb-2" value={editDoctor.name} onChange={(e) => setEditDoctor({ ...editDoctor, name: e.target.value })} />
                  <input className="form-control mb-2" value={editDoctor.specialty} onChange={(e) => setEditDoctor({ ...editDoctor, specialty: e.target.value })} />
                  <input className="form-control mb-2" value={editDoctor.contact} onChange={(e) => setEditDoctor({ ...editDoctor, contact: e.target.value })} />
                  <input className="form-control mb-2" value={editDoctor.experience} onChange={(e) => setEditDoctor({ ...editDoctor, experience: e.target.value })} />
                  <button className="btn btn-success me-2" onClick={handleUpdateDoctor}>Save</button>
                  <button className="btn btn-secondary" onClick={() => setEditDoctor(null)}>Cancel</button>
                </div>
              ) : (
                <>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="rounded-circle me-3" 
                      style={{ width: '50px', height: '50px' }} 
                    />
                    <div>
                      <strong className="text-primary">{doctor.name}</strong>
                      <div>{doctor.specialty}</div>
                      <div className="text-muted">{doctor.contact}</div>
                      <div className="text-info">Experience: {doctor.experience} years</div>
                    </div>
                  </div>
                  
                </div>
                <div>
                    <button 
                      className="btn btn-warning m-2" 
                      onClick={() => setEditDoctor(doctor)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-danger m-2" 
                      onClick={() => handleRemoveDoctor(doctor.id)}
                    >
                      Remove
                    </button>
                  </div>
              </>
              
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorsManagement;
