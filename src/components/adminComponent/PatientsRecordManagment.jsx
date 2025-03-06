import React, { useState } from 'react';
import Swal from 'sweetalert2';

function PatientsRecordManagement() {
  const [patients, setPatients] = useState([
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Patient ${i + 1}`,
      age: 20 + (i % 30),
      mobile: `123-456-78${i.toString().padStart(2, '0')}`,
      email: `patient${i + 1}@example.com`,
      address: `${i + 1} Main St`,
      diagnosis: i % 2 === 0 ? 'Cold' : 'Injury',
      admissionDate: `2025-03-${(i % 30 + 1).toString().padStart(2, '0')}`,
      photo: ''
    }))
  ]);

  const handleAddPatient = () => {
    Swal.fire({
      title: 'Add New Patient',
      html: `
        <input id="name" class="swal2-input" placeholder="Name">
        <input id="age" type="number" class="swal2-input" placeholder="Age">
        <input id="mobile" class="swal2-input" placeholder="Mobile Number">
        <input id="email" type="email" class="swal2-input" placeholder="Email">
        <input id="address" class="swal2-input" placeholder="Address">
        <input id="diagnosis" class="swal2-input" placeholder="Diagnosis">
        <input id="photo" class="swal2-input" placeholder="Photo URL (optional)">
      `,
      showCancelButton: true,
      confirmButtonText: 'Add Patient',
      customClass: {
        popup: 'custom-popup',
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-secondary'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const diagnosis = document.getElementById('diagnosis').value;
        const photo = document.getElementById('photo').value;

        if (name && age && mobile && email && address && diagnosis) {
          setPatients([...patients, {
            id: patients.length + 1,
            name,
            age,
            mobile,
            email,
            address,
            diagnosis,
            admissionDate: new Date().toISOString().split('T')[0],
            photo
          }]);
          Swal.fire('Success!', 'New patient added successfully.', 'success');
        } else {
          Swal.fire('Error!', 'Please fill all required fields.', 'error');
        }
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        setPatients(patients.filter(patient => patient.id !== id));
        Swal.fire('Deleted!', 'Patient record has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="container mt-4" >
      <h2 className="mb-4 text-center text-primary p-3 shadow">Patients Record Management</h2>
      <button className="btn btn-success mb-3" onClick={handleAddPatient}>Add Patient</button>
      <table className="table table-striped table-hover table-bordered shadow-lg">
        <thead className="table-success">
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Diagnosis</th>
            <th>Admission Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id} className="align-middle">
              <td>{patient.id}</td>
              <td>
                {patient.photo ? <img src={patient.photo} alt="Patient" style={{ width: '50px', height: '50px', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)' }} /> : 'N/A'}
              </td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.mobile}</td>
              <td>{patient.email}</td>
              <td>{patient.address}</td>
              <td>{patient.diagnosis}</td>
              <td>{patient.admissionDate}</td>
              <td>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(patient.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientsRecordManagement;
