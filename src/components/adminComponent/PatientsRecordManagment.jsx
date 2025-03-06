import React, { useState } from 'react';

function PatientsRecordManagement() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 45, diagnosis: 'Flu', admissionDate: '2025-03-01' },
    { id: 2, name: 'Jane Smith', age: 30, diagnosis: 'Fracture', admissionDate: '2025-03-02' },
  ]);

  const handleAddPatient = () => {
    const name = prompt('Enter patient name:');
    const age = prompt('Enter patient age:');
    const diagnosis = prompt('Enter diagnosis:');
    if (name && age && diagnosis) {
      setPatients([...patients, { id: patients.length + 1, name, age, diagnosis, admissionDate: new Date().toISOString().split('T')[0] }]);
    }
  };

  const handleDelete = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Patients Record Management</h2>
      <button className="btn btn-primary mb-3" onClick={handleAddPatient}>Add Patient</button>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Diagnosis</th>
            <th>Admission Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.diagnosis}</td>
              <td>{patient.admissionDate}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(patient.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientsRecordManagement;
